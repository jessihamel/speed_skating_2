import data from './data/speed_skating_results.csv'
import {select} from 'd3-selection'
import {scaleLinear, scalePoint} from 'd3-scale'
import {extent} from 'd3-array'
import {transition} from 'd3-transition'
import {axisLeft, axisBottom} from 'd3-axis'

const margin = {top: 15, bottom: 20, left: 50, right: 20}
const radius = 6

class Graph {
  constructor() {
    this.data = this.nestData()
    this.years = this.getYears()
    this.initControls()
    this.initViz()
    window.onresize = this.initViz
  }

  nestData() {
    const dataByEvent = {}
    data.forEach(d => {
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
    return data.reduce((a,b) => {
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
    this.width = Math.min(window.innerWidth, 1000)
    this.height = 360
    this.xScale = scalePoint()
      .domain(Object.keys(this.years))
      .range([margin.left, this.width - margin.right])
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

    const leftAxis = axisLeft().scale(this.yScale).ticks(5)
    this.viz1.select('.yAxis')
      .attr('transform', `translate(${margin.left}, 0)`)
      .transition()
      .call(leftAxis)
    const bottomAxis = axisBottom().scale(this.xScale).tickFormat(d => d)
    this.viz1.select('.xAxis')
      .attr('transform', `translate(0, ${this.height - margin.bottom})`)
      .call(bottomAxis)
  }

  drawAltitudes() {
    const venues = Object.keys(this.years).map(k => this.years[k])
    this.yScaleAltitudes = scaleLinear()
      .domain(extent(venues, d => +d.altitude))
      .range([this.height - margin.bottom, margin.top])

    const altitudeGroups = this.viz2.selectAll('g.altitudes').data(venues)
      .enter()
      .append('g')
      .classed('altitudes', true)

    this.drawMountains(altitudeGroups)

    const leftAxis = axisLeft().scale(this.yScaleAltitudes).ticks(5)
    this.viz2.select('.yAxis')
      .attr('transform', `translate(${margin.left}, 0)`)
      .transition()
      .call(leftAxis)
    const bottomAxis = axisBottom().scale(this.xScale).tickFormat(d => d)
    this.viz2.select('.xAxis')
      .attr('transform', `translate(0, ${this.height - margin.bottom})`)
      .call(bottomAxis)
  }

  drawMountains(groups) {
    const scaleStep = this.xScale.step()
    groups.append('path')
      .attr('d', d => {
        const apexX = this.xScale(d.year)
        const apexY = this.yScaleAltitudes(d.altitude)
        const baseY = this.yScaleAltitudes(0)
        return `M${apexX} ${apexY} L${apexX + scaleStep} ${baseY} L${apexX - scaleStep} ${baseY} Z`
      })
      .attr('fill', 'darkbrown')
      .attr('opacity', 0.4)
  }

}

new Graph()
