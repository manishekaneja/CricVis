import React from 'react';
import { Slide } from '@material-ui/core'
import EntryScreen from './EntryScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';
import FourthScreen from './FourthScreen';
import FifthScreen from './FifthScreen';
import LastScreen from './LastScreen';
import SixthScreen from './SixthScreen';
import SevenScreen from './SevenScreen';

const AnimateSetup = ({ condition, children }) => <Slide in={condition} direction={"left"} timeout={{ entry: 500, exit: 0 }} mountOnEnter unmountOnExit>
    <div>
        {children}
    </div>
</Slide>

class AnimateScreens extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            favor: false
        }
    }
    render = () => {
        const { checked, next } = this.props
        return <React.Fragment>
            <AnimateSetup condition={checked === 0}>
                <EntryScreen next={next} />
            </AnimateSetup>
            <AnimateSetup condition={checked === 1}>
                <SecondScreen next={value => { this.setState({ favor: value }); next() }} />
            </AnimateSetup>
            <AnimateSetup condition={checked === 2}>
                <ThirdScreen favor={this.state.favor} next={next} />
            </AnimateSetup>
            <AnimateSetup condition={checked === 3}>
                <FourthScreen favor={this.state.favor} next={next} />
            </AnimateSetup>
            <AnimateSetup condition={checked === 4}>
                <FifthScreen favor={this.state.favor} next={next} />
            </AnimateSetup>
            <AnimateSetup condition={checked === 5}>
                <SixthScreen favor={this.state.favor} next={next} />
            </AnimateSetup>
            <AnimateSetup condition={checked === 6}>
                <SevenScreen favor={this.state.favor} next={next} />
            </AnimateSetup>
            <AnimateSetup condition={checked === 7}>
                <LastScreen favor={this.state.favor} next={next} />
            </AnimateSetup>
        </React.Fragment>
    }

}


export default AnimateScreens;
