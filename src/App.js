import React, { Component, Fragment } from 'react';
import '../node_modules/react-vis/dist/style.css';
import { CssBaseline, Paper, withStyles, Zoom } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import MyHeader from './Components/Header/MyHeader';
import AnimateScreens from './Components/Screens/AnimateScreens';
import { purple, red } from '@material-ui/core/colors'
const styles = theme => ({
  spacing: theme.mixins.toolbar,
  root: {
    margin: theme.spacing.unit * 2,
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      margin: 0,
    }
  }
})

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[800] },
    secondary: { main: red[500] },
  }
});

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
