import styles from './styles.css'
import data from './data/speed_skating_results.csv'
import {select, event} from 'd3-selection'
import {scaleLinear, scalePoint} from 'd3-scale'
import {extent, max, bisect} from 'd3-array'
import {transition} from 'd3-transition'
import {axisLeft, axisBottom} from 'd3-axis'
import {easeLinear, easeSinIn, easeSinOut} from 'd3-ease'
import skater from './speed_skater.svg';

const eventsToInclude = ["500m Men","1500m Men","5000m Men","10000m Men","500m Women","1000m Women","1500m Women","3000m Women","1000m Men","5000m Women"]
const yearsWith2X500M = [1998, 2002, 2006, 2010, 2014]
const margin = {top: 35, bottom: 35, left: 80, right: 60}
const radius = 9
const flagHeight = 15
const poleHeight = 12
const flagWidth = 22
const flagWaviness = 3
const smallWidth = 600
const filteredData = data.filter(d => {
  return +d.year >= 1964 && eventsToInclude.indexOf(d.event) !== -1
})

const skaterImg = document.getElementById('skater')
skaterImg.src = skater

class Graph {
  constructor() {
    this.hoveredYear = null
    this.data = this.nestData()
    this.years = this.getYears()
    this.flagTimeout = null
    this.initControls()
    this.initViz()
    window.onresize = this.initViz.bind(this)
    this.waveFlag = this.waveFlag.bind(this)
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
      if (this.isDoubleYear(d)) {
        d.time /= 2
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
      .html(d => (d === '500m Men' || d === '500m Women') ? `${d}*` : d)
    controls.on('change', (d, i, node) => {
      const currentEventIdx = node[0].selectedIndex
      this.currentEventData = this.data[Object.keys(this.data)[currentEventIdx]]
      this.drawEvent()
    })
  }

  initViz() {
    select('.viz').selectAll("*").remove()
    this.width = select('.viz').node().getBoundingClientRect().width
    this.height = this.width < smallWidth ? 180 : 300
    this.xDomain = Object.keys(this.years)
    this.xRange = [margin.left, this.width - margin.right]
    this.xScale = scalePoint()
      .domain(this.xDomain)
      .range(this.xRange)
      .padding(this.width / 10)
    this.viz1 = this.drawSVG('viz-1', 'Time (seconds)')
    this.viz2 = this.drawSVG('viz-2', this.width < smallWidth ? 'Venue Altitude (m)' : 'Olypmic Venue Altitude (meters)')
    this.currentEventData = this.data[Object.keys(this.data)[0]]
    this.drawEvent()
    this.drawAltitudes()
    const g = this.viz2.append('g').classed('flag', true)
      g.append('line')
      g.append('path').classed('flying-flag', true)
  }

  drawSVG(className, yAxisLabel) {
    console.log(yAxisLabel)
    const viz = select('.viz').append('svg').classed(className, true)
      .attr('width', this.width)
      .attr('height', this.height)
    viz.append('g').classed('yAxis', true)
    viz.append('g').classed('xAxis', true)
    viz.append('g').classed('yAxis-label', true)
      .attr('transform', 'rotate(-90)')
      .append('text')
      .text(yAxisLabel)
      .attr('transform', `translate(${-this.height / 2}, 26)`)
      .attr('text-anchor', 'middle')
    return viz
  }

  drawEvent() {
    const golds = this.currentEventData.filter(d => d.medal === 'GOLD')
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
    const bottomAxis = axisBottom().scale(this.xScale).tickFormat(d => d).tickSizeOuter(0).tickSizeInner(12)
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
    const bottomAxis = axisBottom().scale(this.xScale).tickFormat(d => d).tickSizeOuter(0).tickSizeInner(12)
    this.viz2.select('.xAxis')
      .attr('transform', `translate(0, ${this.height - margin.bottom})`)
      .call(bottomAxis)

    select('.viz').on('mousemove', () => {
      const mouseX = event.clientX - margin.left
      if (mouseX > margin.left && mouseX < this.width) {
        const hoveredYear = this.xDomain[bisect(this.xDomain.map(d => this.xScale(d)), mouseX)]
        if (!hoveredYear) {
          this.hoveredYear = null
        } else if (this.hoveredYear !== hoveredYear) {
          this.hoveredYear = hoveredYear
          this.selectYear()
        }
      } else {
        this.hoveredYear = null
      }
    })

  }

  drawMountains(groups) {
    groups.append('path')
      .attr('d', d => this.generateMountain(d))
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
    const apex = this.getApex(d.year, d.altitude)
    const baseY = this.yScaleAltitudes(0)
    return `M${apex.x} ${apex.y} L${apex.x + scaleStep} ${baseY} L${apex.x - scaleStep} ${baseY} Z`
  }

  generateSnow(d) {
    const snowSize = 0.4
    const snowWaviness = 8
    const scaleStep = this.stepScale(d.altitude)
    const apex = this.getApex(d.year, d.altitude)
    const baseY = this.yScaleAltitudes(0)
    const snowLineX0 = apex.x + (scaleStep * snowSize)
    const snowLineX1 = apex.x - (scaleStep * snowSize)
    const snowLineY = (this.yScaleAltitudes(d.altitude * (1 - snowSize)))
    const cpx0 = (snowLineX0 + apex.x) / 2
    const cpy0 = snowLineY - (snowLineY - apex.y) / snowWaviness
    const cpx1 = (snowLineX1 + apex.x) / 2
    const cpy1 = snowLineY + (snowLineY - apex.y) / snowWaviness
    return `M${apex.x} ${apex.y} L${snowLineX0} ${snowLineY} Q${cpx0} ${cpy0}, ${apex.x} ${snowLineY} Q ${cpx1} ${cpy1}, ${snowLineX1} ${snowLineY} Z`
  }

  selectYear() {
    clearTimeout(this.flagTimeout)
    this.drawFlag()
    this.highlightMedal()
    this.highlightMountain()
  }

  highlightMedal() {
    const medalDatum = this.currentEventData.find(d => {
      return d.year == this.hoveredYear && d.medal === 'GOLD'
    })
    this.viz1.selectAll('circle')
      .attr('r', d => d.year == this.hoveredYear ? radius + 2 : radius)
      .classed('selected', d => d.year == this.hoveredYear ? true : false)
  }

  highlightMountain() {
    this.viz2.selectAll('g.altitudes')
      .classed('selected', d => d.year == this.hoveredYear ? true : false)
  }

  drawFlag() {
    const yearData = this.years[this.hoveredYear]
    const apex = this.getApex(yearData.year, yearData.altitude)
    const flagGroup = this.viz2.select('.flag')
    flagGroup.attr('transform', `translate(${apex.x}, ${apex.y})`)
    flagGroup.select('line')
      .attr('x1', 0)
      .attr('y1', 3)
      .attr('x2', 0)
      .attr('y2', 0)
      .transition()
      .attr('y2', -poleHeight - flagHeight)
    flagGroup.select('.flying-flag').interrupt()
      .attr('transform', `translate(0, 0)`)
      .attr('d', `M0 ${-flagHeight} Q0 ${-flagHeight - flagWaviness}, 0 ${-flagHeight} Q0 ${-flagHeight + flagWaviness}, 0 ${-flagHeight} L0 0 Q0 0, 0 0 Q0 0, 0 0 Z`)
      .transition()
      .attr('transform', `translate(0, ${-poleHeight})`)
      .on('end', () => {this.waveFlag(flagGroup)})
  }

  getApex(year, altitude) {
    return {x: this.xScale(year), y: this.yScaleAltitudes(altitude)}
  }

  generateFlagPath(cp0, offset, cp1, invert) {
    invert = invert ? -1 : 1
    return `M0 ${-flagHeight} Q${flagWidth * cp0} ${-flagHeight - (invert * flagWaviness)}, ${flagWidth * offset} ${-flagHeight} Q${flagWidth * cp1} ${-flagHeight + (invert * flagWaviness)}, ${flagWidth} ${-flagHeight} L${flagWidth} 0 Q${flagWidth * cp1} ${(invert * flagWaviness)}, ${flagWidth * offset} 0 Q${flagWidth * cp0} ${-(invert * flagWaviness)}, 0 0 Z`
  }

  waveFlag(flagGroup) {
    flagGroup.select('.flying-flag').transition().ease(easeSinIn)
    .attr('d', this.generateFlagPath(0.25, 0.5, 0.75, false))
    .transition().ease(easeLinear)
    .attr('d', this.generateFlagPath(0.9, 0.95, 1, false))
    .transition().ease(easeLinear)
    .attr('d', this.generateFlagPath(0.9, 0.95, 1, true))
    .transition().ease(easeSinOut)
    .attr('d', this.generateFlagPath(0.25, 0.5, 0.75, true))
    .on('end', () => {
      this.flagTimeout = window.setTimeout(() => this.waveFlag(flagGroup), 700)
    })
  }

  isDoubleYear(d) {
    if (d.event === "500m Men" || d.event === "500m Women") {
      if (yearsWith2X500M.indexOf(d.year) !== -1) {
        return true
      }
    }
    return false
  }

}

new Graph()
