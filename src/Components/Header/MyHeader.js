import React, { Fragment } from 'react';
import { AppBar, Toolbar, Typography,  withWidth, Icon, IconButton } from '@material-ui/core';
import MyDialog from '../DialogScreen/MyDialog';

class MyHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false
        };
    }
    render = () => <Fragment>
        <AppBar>
            <Toolbar>
                <Typography align="center" variant="title" color="inherit" style={{ flex: 1, fontFamily: "inherit" }}>
                    Analysis
                    </Typography>
                <IconButton color="secondary" variant="contained" onClick={() => this.setState({ open: true })}>
                    <Icon>
                        data_usage
                   </Icon>
                </IconButton>
            </Toolbar>
        </AppBar>
        <MyDialog width={this.props.width} state={this.state.open} onClose={() => this.setState({ open: false })} />
    </Fragment>
}

export default withWidth()(MyHeader);