import React from 'react';
import PropTypes from 'prop-types'
import { Slide, Dialog, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import MyCustomTable from './TableComponents/MyCustomTable';
import { isWidthUp } from '@material-ui/core/withWidth';

import SelectionMenu from './SelectionMenu';

import data from './../../data.json';

const Transition = props => <Slide timeout={100} direction="up" {...props} />

//A state Full Component for showing Full Dialog Screen
class MyDialog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: true,
            catches: true,
            result_margin: true,
            batting_score: true,
            runs_conceded: true,
            batting_innings: true,
            stumps: true,
            toss: true,
            wickets: true,
            ground: true,
            opposition: true,
            match_result: true,
        }
    }
    render = () => <Dialog fullScreen open={this.props.state} onClose={this.props.onClose} TransitionComponent={Transition}>
        <AppBar style={{ position: 'relative' }}>
            <Toolbar>
                <IconButton color="inherit" onClick={this.props.onClose} aria-label="Close">
                    <CloseIcon />
                </IconButton>
                <Typography variant="title" color="inherit" style={{ flex: 1 }}>
                    {isWidthUp('md', this.props.width) ? `Sachin's Cricket Record` : `Record`}
                </Typography>
                <div>
                    <SelectionMenu status={this.state} handleClick={value => () => this.setState(state => ({ [value]: !state[value] }))} />
                </div>
            </Toolbar>
        </AppBar>
        <MyCustomTable width={this.props.width} list={data} status={this.state} />
    </Dialog>
}


MyDialog.propTypes = {
    width: PropTypes.string.isRequired,
    state: PropTypes.bool
}
MyDialog.defaultProps = {
    state: false
}

export default MyDialog;

