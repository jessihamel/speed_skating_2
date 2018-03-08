import styles from './styles.css'
import data from './data/speed_skating_results.csv'
import {select, event} from 'd3-selection'
import {scaleLinear, scalePoint} from 'd3-scale'
import {extent, max, bisect} from 'd3-array'
import {transition} from 'd3-transition'
import {axisLeft, axisBottom} from 'd3-axis'
import {easeLinear, easeSinIn, easeSinOut, easeSinInOut} from 'd3-ease'
import skater from './speed_skater.svg'
import yeti from './yeti.svg'

const eventsToInclude = ['500m Men','1000m Men','1500m Men','5000m Men','10000m Men','500m Women','1000m Women','1500m Women','3000m Women','5000m Women']
const yearsWith2X500M = [1998, 2002, 2006, 2010, 2014]
const margin = {top: 40, bottom: 52, left: 80, right: 40}
const radius = 9
const largeRadius = 12
const flagHeight = 15
const poleHeight = 12
const flagWidth = 22
const flagWaviness = 3
const smallWidth = 600
const ribbonHeight = 30
const medalWidth = 20
const ribbonWidth = 10
const ribbonRoot = ribbonWidth / Math.sqrt(2)
const filteredData = data.filter(d => {
  return +d.year >= 1964 && eventsToInclude.indexOf(d.event) !== -1
})
const highestYear = 2002

class Graph {
  constructor() {
    this.hoveredYear = null
    this.data = this.nestData()
    this.years = this.getYears()
    this.highestYear = this.years[highestYear]
    this.flagTimeout = null
    this.yetiTimeout = null
    this.initControls()
    this.initViz()
    window.onresize = this.initViz.bind(this)
    this.waveFlag = this.waveFlag.bind(this)
    this.drawYeti = this.drawYeti.bind(this)
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
    controls.selectAll('option').data(eventsToInclude)
      .enter()
      .append('option')
      .attr('value', d => d)
      .html(d => (d === '500m Men' || d === '500m Women') ? `${d}*` : d)
    controls.on('change', (d, i, node) => {
      this.hoveredYear = null
      const currentEventIdx = node[0].selectedIndex
      this.currentEventData = this.data[Object.keys(this.data)[currentEventIdx]]
      this.cancelAnimations()
      this.drawEvent()
      this.selectYear()
    })
  }

  initViz() {
    select('.viz').selectAll('*').remove()
    this.width = select('.viz').node().getBoundingClientRect().width
    this.height = this.width < smallWidth ? 180 : 300
    this.xDomain = Object.keys(this.years)
    this.xRange = [margin.left, this.width - margin.right]
    this.xScale = scalePoint()
      .domain(this.xDomain)
      .range(this.xRange)
      .padding(this.width / 10)
    this.viz1 = this.drawSVG('viz-1', 'Time (seconds)')
    this.circleGroup = this.viz1.append('g').classed('circle-g', true)
    this.drawGoldMedal()
    this.viz2 = this.drawSVG('viz-2', this.width < smallWidth ? 'Venue Altitude (m)' : 'Olypmic Venue Altitude (meters)')
    this.currentEventData = this.data[Object.keys(this.data)[0]]
    this.drawEvent()
    this.drawAltitudes()
    const g = this.viz2.append('g').classed('flag', true)
      g.append('line')
      g.append('path').classed('flying-flag', true)

    const highestYearApex = this.getApex(this.highestYear.year, this.highestYear.altitude)
    this.viz2
      .append('clipPath').attr('id', 'yeti-clip')
      .append('path')
      .attr('d', `M${highestYearApex.x} ${highestYearApex.y} L${this.width - margin.right} ${highestYearApex.y} L${this.width - margin.right} ${this.height - margin.bottom} L${highestYearApex.x + this.xScale.step()} ${this.height - margin.bottom} Z`)
    const yetiSize = this.getYetiSize()
    this.yeti = this.viz2.append('g').classed('yeti', true)
      .attr('clip-path', 'url(#yeti-clip)')
      .append('g')
      .attr('transform', `translate(${this.xScale('2002') - (yetiSize)}, ${this.height / 2})`)
      .attr('opacity', 0)
    this.yeti
      .append('image')
      .attr('y', -yetiSize)
      .attr('transform', 'rotate(40)')
      .attr('width', yetiSize)
      .attr('height', yetiSize)
      .attr('xlink:href', yeti)
    if (this.width > smallWidth) {
      this.yeti
        .append('text')
        .text('Abominable!')
        .attr('transform', `translate(${yetiSize + 5}, ${-yetiSize / 2})`)
        .style('letter-spacing', '0.2em')
    }
}

  drawSVG(className, yAxisLabel) {
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
    viz.append('g').classed('stat-label', true)
      .attr('transform', `translate(${margin.left}, ${this.height})`)
      .append('text')
      .attr('dy', '-0.5em')
    return viz
  }

  drawEvent() {
    const golds = this.currentEventData.filter(d => d.medal === 'GOLD')
    const scaleExtent = extent(golds, d => d.time)
    this.yScale = scaleLinear()
      .domain(scaleExtent)
      .range([margin.top, this.height - margin.bottom])
    const circles = this.circleGroup.selectAll('circle').data(golds, d => d.year)
    const circlesEnter = circles.enter()
      .append('circle')
      .attr('cx', d => this.xScale(d.year))
      .attr('cy', this.height)
      .attr('opacity', 0)
    circles.exit().remove()
    this.circleGroup.selectAll('circle')
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
      const vizOffset = select('.viz').node().getBoundingClientRect().left
      const graphX = event.clientX - vizOffset
      let hoveredYear = null
      if (graphX > margin.left && graphX < (this.width - margin.right)) {
        const scaledX = graphX - (this.xScale.step() / 2)
        hoveredYear = this.xDomain[bisect(this.xDomain.map(d => this.xScale(d)), scaledX)]
      } else {
        hoveredYear = null
      }
      if (this.hoveredYear !== hoveredYear) {
        this.hoveredYear = hoveredYear
        this.selectYear()
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
    clearTimeout(this.yetiTimeout)
    this.drawFlag()
    this.updateGoldMedal()
    this.highlightMountain()
    this.updateStatLabels()
    if (this.hoveredYear === '2002') {
      this.yetiTimeout = window.setTimeout(this.drawYeti, 7000)
    }
  }

  drawGoldMedal(d) {
    this.medalGroup = this.viz1.append('g').classed('medal', true)
    this.hide(this.medalGroup)
    this.medalGroup.append('path').classed('path-1', true)
    this.medalGroup.append('path').classed('path-2', true)
    this.medalGroup.append('path').classed('path-3', true)
    this.goldGroup = this.medalGroup.append('g')
    this.goldGroup.append('circle').classed('medal-circle', true)
    this.goldGroup.append('polygon').classed('star', true)
      .attr('points', this.calculateStarPoints(0, 0, 5, radius, 4))
    this.goldGroup.attr('transform', `translate(0, ${ribbonHeight + radius})`)
    this.medalGroup.select('.medal-circle').attr('r', largeRadius)
  }

  updateGoldMedal() {
    if (!this.hoveredYear) {
      this.hide(this.medalGroup)
      return
    }
    this.show(this.medalGroup)
    const medalDatum = this.currentEventData.find(d => {
      return d.year == this.hoveredYear && d.medal === 'GOLD'
    })
    if (!medalDatum) {
      this.hide(this.medalGroup)
      return
    }
    const medalGroupTranslate = `translate(${this.xScale(medalDatum.year)}, ${this.yScale(medalDatum.time) - ribbonHeight - radius})`
    const medalAnimationTime = 600
    this.medalGroup.interrupt()
    this.medalGroup.attr('transform', medalGroupTranslate)
    this.medalGroup.select('.path-1')
      .attr('d', `M0 ${ribbonHeight} L0 ${ribbonHeight} L0 ${ribbonHeight} L0 ${ribbonHeight} Z`)
      .transition().duration(medalAnimationTime)
      .attr('d', this.calculateRibbon(1))
    this.medalGroup.select('.path-2')
      .attr('d', `M0 ${ribbonHeight} L0 ${ribbonHeight} L0 ${ribbonHeight} L0 ${ribbonHeight} Z`)
      .transition().duration(medalAnimationTime)
      .attr('d', this.calculateRibbon(2))
    this.medalGroup.select('.path-3')
      .attr('d', `M0 ${ribbonHeight} L0 ${ribbonHeight} L0 ${ribbonHeight} L0 ${ribbonHeight} L0 ${ribbonHeight} Z`)
      .transition().duration(medalAnimationTime)
      .attr('d', this.calculateRibbon(3))
    this.medalGroup
      .transition().duration(medalAnimationTime).ease(easeSinInOut)
      .attr('transform', `${medalGroupTranslate} rotate(3)`)
      .transition().duration(medalAnimationTime).ease(easeSinInOut)
      .attr('transform', `${medalGroupTranslate} rotate(-2)`)
      .transition().duration(medalAnimationTime).ease(easeSinInOut)
      .attr('transform', `${medalGroupTranslate} rotate(1)`)
      .transition().duration(medalAnimationTime).ease(easeSinInOut)
      .attr('transform', `${medalGroupTranslate}`)
  }

  highlightMountain() {
    this.viz2.selectAll('g.altitudes')
      .classed('selected', d => d.year == this.hoveredYear ? true : false)
  }

  updateStatLabels() {
    if (this.width < 450 || !this.hoveredYear) {
      this.viz1.select('.stat-label text').text('')
      this.viz2.select('.stat-label text').text('')
      return
    }
    const medalDatum = this.currentEventData.find(d => {
      return d.year == this.hoveredYear && d.medal === 'GOLD'
    })
    if (!medalDatum) {
      this.viz1.select('.stat-label text').text('')
      this.viz2.select('.stat-label text').text('')
      return
    }
    const asterix = this.isDoubleYear(medalDatum) ? '*' : ''
    const yearDatum = this.years[this.hoveredYear]
    const text0 = `${medalDatum.timeFormat}${asterix} | ${medalDatum.athlete}`
    const text1 = `${yearDatum.location} | ${yearDatum.altitude}m`
    this.viz1.select('.stat-label text').text(text0)
    this.viz2.select('.stat-label text').text(text1)
  }

  drawFlag() {
    const flagGroup = this.viz2.select('.flag')
    if (!this.hoveredYear) {
      this.hide(flagGroup)
      return
    }
    this.show(flagGroup)
    const yearData = this.years[this.hoveredYear]
    const apex = this.getApex(yearData.year, yearData.altitude)
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
      this.flagTimeout = window.setTimeout(() => this.waveFlag(flagGroup), 1500)
    })
  }

  getYetiSize() {
    return Math.floor(this.xScale.step() * 2)
  }

  drawYeti() {
    this.yeti.transition().duration(1500)
      .attr('transform', `translate(${this.xScale('2002') - (this.getYetiSize() / 5)}, ${this.height * 0.5})`)
      .attr('opacity', 1)
      .transition().delay(1500)
      .attr('transform', `translate(${this.xScale('2002') - (this.getYetiSize())}, ${this.height * 0.5})`)
      .attr('opacity', 0)
  }

  isDoubleYear(d) {
    if (d.event === '500m Men' || d.event === '500m Women') {
      if (yearsWith2X500M.indexOf(d.year) !== -1) {
        return true
      }
    }
    return false
  }

  calculateRibbon(pathIdx) {
    const ratio = medalWidth / ribbonHeight
    if (pathIdx === 1) {
      return `M${ribbonRoot} ${ribbonHeight} L${-medalWidth + ribbonRoot} 0 L${-medalWidth} ${ribbonRoot} L0 ${ribbonHeight + ribbonRoot} Z`
    } else if (pathIdx === 2) {
      return `M${-ribbonRoot} ${ribbonHeight} L${medalWidth - ribbonRoot} 0 L${medalWidth} ${ribbonRoot} L0 ${ribbonHeight + ribbonRoot} Z`
    } else if (pathIdx === 3) {
      return `M0 0 L${-medalWidth + ribbonRoot} 0 L${-medalWidth + ribbonRoot + (ribbonWidth * ratio)} ${ribbonWidth} L${medalWidth - (ribbonWidth * ratio) - ribbonRoot} ${ribbonWidth} L${medalWidth - ribbonRoot} 0 Z`
    }
  }

  calculateStarPoints(centerX, centerY, arms, outerRadius, innerRadius) {
    // https://dillieodigital.wordpress.com/2013/01/16/quick-tip-how-to-draw-a-star-with-svg-and-javascript/
    let results = ''
    const angle = Math.PI / arms;
    for (let i = 0; i < 2 * arms; i++) {
       const r = (i & 1) == 0 ? outerRadius : innerRadius
       const currX = centerX + Math.cos(i * angle) * r
       const currY = centerY + Math.sin(i * angle) * r
       if (i == 0) {
          results = currX + "," + currY
       } else {
          results += ", " + currX + "," + currY
       }
    }
    return results
  }

  hide(el) {
    el.style('visibility', 'hidden')
  }

  show(el) {
    el.style('visibility', 'visible')
  }

  cancelAnimations() {
    this.viz2.select('.flag').select('.flying-flag').interrupt()
    this.medalGroup.interrupt()
  }
}

const skaterImg = document.getElementById('skater')
skaterImg.src = skater

new Graph()
