import styles from './styles.css'
import data from './data/speed_skating_results.csv'
import {select, event} from 'd3-selection'
import {scaleLinear, scalePoint} from 'd3-scale'
import {extent, max, bisect} from 'd3-array'
import {transition} from 'd3-transition'
import {axisLeft, axisBottom} from 'd3-axis'

const margin = {top: 15, bottom: 20, left: 50, right: 50}
const radius = 6
const filteredData = data.filter(d => +d.year >= 1964)

class Graph {
  constructor() {
    this.data = this.nestData()
    this.years = this.getYears()
    this.initControls()
    this.initViz()
    window.onresize = this.initViz.bind(this)
  }

  nestData() {
    const dataByEvent = {}
    filteredData.forEach(d => {
      d.year = + d.year
      if (!d.timeFormat) {
        d.time = null
      } else {
        const parseTime = d.timeFormat.split(':')
        const minutes = parseInt(parseTime[0], 10)
        const seconds = parseFloat(parseTime[1])
        d.time = (minutes * 60) + seconds
      }
      if (!dataByEvent[d.event]) {
        dataByEvent[d.event] = []
      }
      dataByEvent[d.event].push(d)
    })
    return dataByEvent
  }

  getYears() {
    return filteredData.reduce((a,b) => {
      a[b.year] = {location: b.location, altitude: b.altitude, year: b.year}
      return a
    }, {})
  }

  initControls() {
    const controls = select('.controls').append('select')
    controls.selectAll('option').data(Object.keys(this.data))
      .enter()
      .append('option')
      .attr('value', d => d)
      .html(d => d)
    controls.on('change', (d, i, node) => {
      this.drawEvent(node[0].selectedIndex)
    })
  }

  initViz() {
    select('.viz').selectAll("*").remove()
    this.width = window.innerWidth
    this.height = 330
    this.xDomain = Object.keys(this.years)
    this.xRange = [margin.left, this.width - margin.right]
    this.xScale = scalePoint()
      .domain(this.xDomain)
      .range(this.xRange)
      .padding(this.width / 10)
    this.viz1 = this.drawSVG('viz-1')
    this.viz2 = this.drawSVG('viz-2')
    this.drawEvent(0)
    this.drawAltitudes()
  }

  drawSVG(className) {
    const viz = select('.viz').append('svg').classed(className, true)
      .attr('width', this.width)
      .attr('height', this.height)
    viz.append('g').classed('yAxis', true)
    viz.append('g').classed('xAxis', true)
    return viz
  }

  drawEvent(eventIndex) {
    const eventData = this.data[Object.keys(this.data)[eventIndex]]
    const golds = eventData.filter(d => d.medal === 'GOLD')
    const scaleExtent = extent(golds, d => d.time)
    this.yScale = scaleLinear()
      .domain(scaleExtent)
      .range([margin.top, this.height - margin.bottom])
    const circles = this.viz1.selectAll('circle').data(golds, d => d.year)
    const circlesEnter = circles.enter()
      .append('circle')
      .attr('cx', d => this.xScale(d.year))
      .attr('cy', this.height)
      .attr('opacity', 0)
    circles.exit().remove()
    this.viz1.selectAll('circle')
      .transition()
      .attr('cy', this.height)
      .attr('opacity', 0)
      .transition()
      .attr('cx', d => this.xScale(d.year))
      .attr('cy', d => this.yScale(d.time))
      .attr('r', radius)
      .attr('opacity', 1)

    const leftAxis = axisLeft().scale(this.yScale).ticks(5).tickSizeOuter(0)
    this.viz1.select('.yAxis')
      .attr('transform', `translate(${margin.left}, 0)`)
      .transition()
      .call(leftAxis)
    const bottomAxis = axisBottom().scale(this.xScale).tickFormat(d => d).tickSizeOuter(0)
    this.viz1.select('.xAxis')
      .attr('transform', `translate(0, ${this.height - margin.bottom})`)
      .call(bottomAxis)
  }

  drawAltitudes() {
    const venues = Object.keys(this.years).map(k => this.years[k])
      .sort((a,b) => b.altitude - a.altitude)
    const altitudeDomain = [0, max(venues, d => +d.altitude)]
    this.yScaleAltitudes = scaleLinear()
      .domain(altitudeDomain)
      .range([this.height - margin.bottom, margin.top])
    this.stepScale = scaleLinear()
        .domain(altitudeDomain)
        .range([this.xScale.step() / 5, this.xScale.step()])
    const altitudeGroups = this.viz2.selectAll('g.altitudes').data(venues)
      .enter()
      .append('g')
      .classed('altitudes', true)

    this.drawMountains(altitudeGroups)

    const leftAxis = axisLeft().scale(this.yScaleAltitudes).ticks(5).tickSizeOuter(0)
    this.viz2.select('.yAxis')
      .attr('transform', `translate(${margin.left}, 0)`)
      .transition()
      .call(leftAxis)
    const bottomAxis = axisBottom().scale(this.xScale).tickFormat(d => d).tickSizeOuter(0)
    this.viz2.select('.xAxis')
      .attr('transform', `translate(0, ${this.height - margin.bottom})`)
      .call(bottomAxis)

    select('.viz').on('mousemove', () => {
      const mouseX = event.clientX - (this.xScale.step() / 2)
      const hoveredYear = this.xDomain[bisect(this.xDomain.map(d => this.xScale(d)), mouseX)]
      console.log(hoveredYear)
    })

  }

  drawMountains(groups) {
    groups.append('path')
      .attr('d', d => this.generateMountain(d))
      .attr('opacity', 0.9)
      .classed('mountain', true)
    groups.append('path')
      .attr('d', d => this.generateSnow(d))
      .attr('transform', d => {
        const translateY = Math.max(
          (this.height - margin.bottom - this.yScaleAltitudes(d.altitude)) * 0.05,
          2
        )
        return `translate(0, ${Math.round(translateY)})`
      })
      .attr('opacity', 0.92)
      .classed('snow', true)
  }

  generateMountain(d) {
    const scaleStep = this.stepScale(d.altitude)
    const apexX = this.xScale(d.year)
    const apexY = this.yScaleAltitudes(d.altitude)
    const baseY = this.yScaleAltitudes(0)
    return `M${apexX} ${apexY} L${apexX + scaleStep} ${baseY} L${apexX - scaleStep} ${baseY} Z`
  }

  generateSnow(d) {
    const snowSize = 0.4
    const snowWaviness = 8
    const scaleStep = this.stepScale(d.altitude)
    const apexX = this.xScale(d.year)
    const apexY = this.yScaleAltitudes(d.altitude)
    const baseY = this.yScaleAltitudes(0)
    const snowLineX0 = apexX + (scaleStep * snowSize)
    const snowLineX1 = apexX - (scaleStep * snowSize)
    const snowLineY = (this.yScaleAltitudes(d.altitude * (1 - snowSize)))
    const cpx0 = (snowLineX0 + apexX) / 2
    const cpy0 = snowLineY - (snowLineY - apexY) / snowWaviness
    const cpx1 = (snowLineX1 + apexX) / 2
    const cpy1 = snowLineY + (snowLineY - apexY) / snowWaviness
    return `M${apexX} ${apexY} L${snowLineX0} ${snowLineY} Q${cpx0} ${cpy0}, ${apexX} ${snowLineY} Q ${cpx1} ${cpy1}, ${snowLineX1} ${snowLineY} Z`
  }

}

new Graph()
