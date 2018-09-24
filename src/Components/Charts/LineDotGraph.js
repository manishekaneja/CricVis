import React from 'react';
import PropTypes from 'prop-types'

import { XYPlot, YAxis, VerticalGridLines, HorizontalGridLines, LineMarkSeries } from 'react-vis';

import data from '../../data.json';

const give = data.map((entry, index) => ({ x: index, y: parseInt(entry.batting_score.split('*')[0], 10) || 0 }))

//Componet to Display LineDotGraph
const LineDotGraph = ({ width, height }) => <XYPlot width={width} height={height}>
    <VerticalGridLines />
    <HorizontalGridLines />
    <YAxis />
    <LineMarkSeries
        style={{
            strokeWidth: '2px'
        }}
        curve={'curveMonotoneX'}
        lineStyle={{ stroke: 'red' }}
        data={give}
    />
</XYPlot>

LineDotGraph.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
}

export default LineDotGraph;
