import React from 'react';
import PropTypes from 'prop-types'
import { IconButton, MenuItem, Menu, Checkbox } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

//Having a functionality for selecting the Columns in the Display Table
class SelectionMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      element: null
    }
  }
  componentDidMount = () => this.setState({ someKey: 'otherValue' });
  onClose = () => this.setState({ element: null })
  render = () => <div>
    <IconButton onClick={event => this.setState({ element: event.currentTarget })} color="inherit" ><MoreVertIcon color="inherit" /></IconButton>
    <Menu
      anchorEl={this.state.element}
      open={Boolean(this.state.element)}
      onClose={this.onClose}>
      <MenuItem onClick={this.props.handleClick('catches')}> <Checkbox checked={this.props.status.catches} /> Catches</MenuItem>
      <MenuItem onClick={this.props.handleClick('result_margin')}> <Checkbox checked={this.props.status.result_margin} /> Result Margin</MenuItem>
      <MenuItem onClick={this.props.handleClick('batting_score')}> <Checkbox checked={this.props.status.batting_score} /> Batting Score</MenuItem>
      <MenuItem onClick={this.props.handleClick('runs_conceded')}> <Checkbox checked={this.props.status.runs_conceded} /> Runs Conceded</MenuItem>
      <MenuItem onClick={this.props.handleClick('batting_innings')}> <Checkbox checked={this.props.status.batting_innings} /> Batting Innings</MenuItem>
      <MenuItem onClick={this.props.handleClick('stumps')}> <Checkbox checked={this.props.status.stumps} /> Stumps</MenuItem>
      <MenuItem onClick={this.props.handleClick('toss')}> <Checkbox checked={this.props.status.toss} /> Toss</MenuItem>
      <MenuItem onClick={this.props.handleClick('wickets')}> <Checkbox checked={this.props.status.wickets} /> Wickets</MenuItem>
      <MenuItem onClick={this.props.handleClick('ground')}> <Checkbox checked={this.props.status.ground} /> Ground</MenuItem>
      <MenuItem onClick={this.props.handleClick('match_result')}> <Checkbox checked={this.props.status.match_result} /> Match Results</MenuItem>
    </Menu>
  </div>
}
SelectionMenu.propTypes = {
  state: PropTypes.bool,
  handleClick: PropTypes.func.isRequired
}
SelectionMenu.defaultProps = {
  state: false
}
export default SelectionMenu;
