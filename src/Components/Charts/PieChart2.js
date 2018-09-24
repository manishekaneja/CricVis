import React from 'react';
import { RadialChart, DiscreteColorLegend } from 'react-vis';
import json from '../../data.json';
const calc = (() => {
    let data = {
        zero: 0,
        score: 0,
        fifty: 0,
        hundred: 0,
        notPlayed: 0
    }
    json.forEach(element => {
        let val = parseInt(element.batting_score.includes("*") ? element.batting_score.split('*')[0] : element.batting_score.includes("D") ? -1 : element.batting_score, 10);
        if (val === -1) {
            data.notPlayed += 1;
        }
        else if (val === 0) {
            data.zero += 1
        }
        else if (val > 0 && val < 50) {
            data.score += 1
        }
        else if (val >= 50 && val < 100) {
            data.fifty += 1
        }
        else {
            data.hundred += 1
        }
    });
    return data;
})()

class PieChart2 extends React.Component {
    render = () => <React.Fragment>
        <RadialChart
            data={[
                { angle: calc.hundred, color: '#f00' },
                { angle: calc.fifty, color: 'blue' },
                { angle: calc.score, color: 'green' },
                { angle: calc.zero, color: 'orange' },
                { angle: calc.notPlayed, color: 'yellow' },
            ]}
            colorType='literal'
            width={this.props.width} height={this.props.height}
            radius={this.props.width < 600 ? this.props.width / 2 : 200}
        />
        <DiscreteColorLegend
            colors={[
                'red',
                'blue',
                'green',
                'orange',
                'yellow'
            ]}
            items={[
                `HUNDRED (${calc.hundred})`,
                `FIFTY (${calc.fifty})`,
                `BELOW FIFTY (${calc.score})`,
                `DUCK ${calc.zero}`,
                `NOT PLAYED ${calc.zero}`
            ]}
            orientation="vertical"
        />
    </React.Fragment>

}

export default PieChart2;
