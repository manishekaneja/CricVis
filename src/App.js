import React, { Component, Fragment } from 'react';
import { CssBaseline, Paper, withStyles, Zoom } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import '../node_modules/react-vis/dist/style.css';

import MyHeader from './Components/Header/MyHeader';
import AnimateScreens from './Components/Screens/AnimateScreens';

import myTheme from './util/theme';

const styles = theme => ({
  spacing: theme.mixins.toolbar,
  backgroundSet: {
    backgroundSize: 'cover',
    fontFamily: `'Patrick Hand', cursive!important`,
    position: 'fixed',
    width: '100%',
    backgroundPosition: 'center',
    height: '100%',
    backgroundImage: 'url("https://2.bp.blogspot.com/-3DYLp5jMWYE/WaJ3i-bNC6I/AAAAAAAAISc/pMv9JiqRO9sXPz8Q3NlklxdYxLgC8IrowCLcBGAs/s1600/Cricket%2BGround%2BHD%2BImages.jpg")'
  },
  root: {
    margin: theme.spacing.unit * 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)',

    [theme.breakpoints.down('md')]: {
      margin: 0,
    }
  }
})

const theme = createMuiTheme(myTheme);

//Main Entry Point of Whole App
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      compValue: 0
    }
  }
  next = () => this.setState(state => ({ compValue: state.compValue + 1 }))
  back = () => this.setState(state => ({ compValue: state.compValue - 1 }))
  render = () => <Fragment>
    <MuiThemeProvider theme={theme}>
      <MyHeader />
      <CssBaseline />
      <div className={this.props.classes.backgroundSet} style={{ opacity: this.state.compValue === 0 ? 1 : (this.state.compValue / 7) }} />
      <Paper className={this.props.classes.spacing} />
      <Zoom in timeout={500}>
        <Paper square className={this.props.classes.root} elevation={0} >
          <div>
            <AnimateScreens checked={this.state.compValue} next={this.next} back={this.back} />
          </div>
        </Paper>
      </Zoom>
    </MuiThemeProvider>
  </Fragment>
}

export default withStyles(styles)(App);
