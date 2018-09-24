import React from 'react';
import PropTypes from 'prop-types'

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

//Componet to Display Second PieChart
const PieChart2 = ({ width, height }) => <React.Fragment>
    <RadialChart
        data={[
            { angle: calc.hundred, color: '#f00' },
            { angle: calc.fifty, color: 'blue' },
            { angle: calc.score, color: 'green' },
            { angle: calc.zero, color: 'orange' },
            { angle: calc.notPlayed, color: 'yellow' },
        ]}
        colorType='literal'
        width={width} height={height}
        padAngle={0.05}
        innerRadius={width < 300 ? 50 : 80}
        radius={width < 600 ? width / 2 : 200}
        style={{
            strokeWidth: "1px",
            stroke: "black"
        }}
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

PieChart2.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
}

export default PieChart2;
