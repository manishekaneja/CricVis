import React from 'react';
import {
    XYPlot,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    LineMarkSeries
} from 'react-vis';


import data from '../../data.json';

const give = data.map((entry, index) => ({ x: index, y: parseInt(entry.batting_score.split('*')[0], 10) || 0 }))

class LineDotGraph extends React.Component {

    render = () => <XYPlot width={this.props.width} height={this.props.height}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <YAxis />
        <LineMarkSeries
            style={{
                strokeWidth: '3px'
            }}
            curve={'curveMonotoneX'}
            lineStyle={{ stroke: 'red' }}
            data={give}
        />
    </XYPlot>
}
export default LineDotGraph;
