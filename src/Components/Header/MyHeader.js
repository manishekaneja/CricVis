import React, { Fragment } from 'react';
import { AppBar, Toolbar, Typography, withWidth, Icon, IconButton } from '@material-ui/core';

import MyDialog from '../DialogScreen/MyDialog';

//This componet is the main Header 
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
                    assessment
                   </Icon>
                </IconButton>
            </Toolbar>
        </AppBar>
        <MyDialog width={this.props.width} state={this.state.open} onClose={() => this.setState({ open: false })} />
    </Fragment>
}

export default withWidth()(MyHeader);