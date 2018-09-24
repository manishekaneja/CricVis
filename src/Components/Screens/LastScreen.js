import React from 'react';
import { Paper, withStyles, Typography, withWidth } from '@material-ui/core';
import { isWidthUp } from '@material-ui/core/withWidth';
import { purple } from '@material-ui/core/colors'

const style = theme => ({
    root: {
        backgroundColor: purple[100],
        padding: theme.spacing.unit * 2
    },
    photo: {
        width: '100%',
        borderRadius: '50%'
    },
    table: {
        minWidth: 400,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        }
    },

})

const LastScreen = ({ favor, classes, width }) => <Paper className={classes.root} elevation={0}>
    <Typography align="center" variant={isWidthUp('sm', width) ? "display2" : 'title'} style={{ fontFamily: "inherit" }} color="inherit">
        {favor ? "You also have something to share" : "Still not convinced??"}
        <br />
        <br />
        Just contact me.
         <br />
        manishekaneja@gmail.com
    </Typography >
    <Typography align="center" variant="title" style={{ fontFamily: "inherit" }} color="inherit">
        Always up for a Discussion or a Debate.
    </Typography >
    <Typography align="center" variant="subheading" style={{ fontFamily: "inherit" }} color="inherit">
        *You can always see the whole data from the option at right in Header
    </Typography >

</Paper >

export default withWidth()(withStyles(style)(LastScreen));
