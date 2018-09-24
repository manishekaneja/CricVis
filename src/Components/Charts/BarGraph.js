import React from 'react';
import { XYPlot, DiscreteColorLegend, YAxis, VerticalBarSeries } from 'react-vis';

import data from '../../data.json';

const give = data.map(element => {
    let val = parseInt(element.batting_score.includes("*") ? element.batting_score.split('*')[0] : element.batting_score.includes("D") ? 0 : element.batting_score, 10);
    return { x: element.date, y: val, color: element.match_result !== 'won' ? (element.match_result === "lost" ? 'red' : 'yellow') : 'green' }
}
)
class BarGraph extends React.Component {
    render = () => <React.Fragment> <XYPlot xType="ordinal" height={this.props.height} width={this.props.width}>
        <YAxis attr="y" attrAxis="x" orientation="left" />
        <VerticalBarSeries colorType='literal' data={give} />
    </XYPlot>
        <DiscreteColorLegend
            colors={[
                'red',
                'green',
                'yellow'
            ]}
            items={[
                `Lost`,
                `Won`,
                `Tied`]}
            orientation="horizontal"
        />
    </React.Fragment>


}

export default BarGraph;
