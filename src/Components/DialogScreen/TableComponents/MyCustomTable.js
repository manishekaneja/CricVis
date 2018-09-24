import React from 'react';
import { Grid, withStyles, Toolbar, Typography, TextField } from '@material-ui/core';
import FullTable from './FullTable';
import PaginationTable from './PaginationTable';
import { isWidthUp } from '@material-ui/core/withWidth';

const styles = theme => ({
  root: {
    width: '100%',
    position: 'relative',
    overflowX: 'auto',
  },
  table: {
    minWidth: 400,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
    '&:hover': {
      backgroundColor: 'lightBlue'
    }
  },
});

class MyCustomTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      from: new Date('1989-12-18').toISOString().split('T')[0],
      to: new Date().toISOString().split('T')[0],
      query: ''
    }
  }

  listValueFilter = list => list.filter(ele => {
    if (this.state.query) {
      for (let key in ele) {
        if (key !== 'date' && this.props.status[key] && ele[key].toLocaleLowerCase().includes(this.state.query.toLocaleLowerCase())) {
          return true;
        }
      }
      return false;
    }
    else {
      return true;
    }
  })


  listDateFilter = list => {
    let fromDate = (+new Date(this.state.from));
    let toDate = (+new Date(this.state.to));
    return list.filter(ele => (+new Date(ele.date)) >= (fromDate) && (+new Date(ele.date)) <= (toDate))

  }
  render = () => <Grid justify="center" container style={{ paddingTop: 20 }} >
    {isWidthUp('md', this.props.width) ? <Grid item md={1} ></Grid> : null}
    <Grid item md={10} xs={11}> <Toolbar>
      <TextField type="search" variant="outlined" value={this.state.query} onChange={event => this.setState({ query: event.target.value })} fullWidth placeholder="For Specific Result Search Here" />
    </Toolbar>
    </Grid>
    {isWidthUp('md', this.props.width) ? <Grid item md={1} ></Grid> : null}
    <Grid item md={2} xs={11} >
      <Toolbar>
        <Typography variant="headline">
          Select Time Period
      </Typography>
      </Toolbar>
    </Grid>
    <Grid md={4} xs={11} item >
      <Toolbar>
        <TextField
          label="From"
          fullWidth
          type="date"
          defaultValue={this.state.from}
          onChange={event => {
            if (event.target.value) {
              let date = new Date(event.target.value).toISOString().split('T')[0]
              this.setState({ index: 0, from: date })
            }
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Toolbar>
    </Grid>
    <Grid md={4} xs={11} item >
      <Toolbar>
        <TextField
          label="To"
          fullWidth
          type="date"
          defaultValue={this.state.to}
          onChange={event => {
            if (event.target.value) {
              let date = new Date(event.target.value).toISOString().split('T')[0]
              this.setState({ index: 0, to: date })
            }
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Toolbar>
    </Grid>
    <Grid item xs={11}>
      {this.props.status.full ?
        <FullTable list={this.listValueFilter(this.listDateFilter(this.props.list))} classes={this.props.classes} status={this.props.status} />
        :
        <PaginationTable index={this.state.index} next={() => this.setState(state => {
          if (state.index < (Math.floor(this.props.list.length / 10))) {
            return {
              index: state.index + 1
            }
          }
          else {
            return { index: state.index }
          }
        })} previous={() => this.setState(state => {
          if (state.index > 0) {
            return {
              index: state.index - 1
            }
          }
          else {
            return { index: state.index }
          }
        })} list={this.listValueFilter(this.listDateFilter(this.props.list))} classes={this.props.classes} status={this.props.status} />
      }
    </Grid>
  </Grid>
}

export default withStyles(styles)(MyCustomTable);
