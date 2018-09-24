import React from 'react';
import { RadialChart, DiscreteColorLegend } from 'react-vis';
import data from '../../data.json';

const win = data.filter(entry => entry.match_result === 'won').length
const lost = data.filter(entry => entry.match_result === 'lost').length
const tied = data.filter(entry => entry.match_result === 'tied').length


class PieChart extends React.Component {
    render = () => <React.Fragment>
        <DiscreteColorLegend
            colors={[
                '#5c5',
                'orange',
                '#e55'
            ]}
            items={[
                `WIN (${win})`,
                `TIED (${tied})`,
                `LOST (${lost})`
            ]}
            orientation="horizontal"
        />
        <RadialChart
            data={[
                { color: '#5c5', angle: win },
                { color: 'orange', angle: tied },
                { color: '#e55', angle: lost },
            ]}
            colorType='literal'
            width={this.props.width} height={this.props.height}
            radius={this.props.width<300?this.props.width/2:200}
            innerRadius={this.props.width<300?50:80}
            labelsRadiusMultiplier={0.85}
            padAngle={0.05}
            labelsStyle={{ fontSize: 14, fontWeight: 700 }}
            showLabels
        />
    </React.Fragment>

}
export default PieChart;
