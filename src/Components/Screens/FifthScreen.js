import React from 'react';
import { Paper, withStyles, Typography, Grid, withWidth, Button } from '@material-ui/core';
import LineDotGraph from '../Charts/LineDotGraph';
import { purple } from '@material-ui/core/colors'

import { isWidthUp } from '@material-ui/core/withWidth';
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
    inherit: {
        fontFamily: "inherit"
    }

})

const FourthScreen = ({ favor, next, classes, width }) => <Paper className={classes.root} elevation={0}>
    <Typography className={classes.inherit} align="center" variant={isWidthUp('md', width) ? "display2" : 'title'} color="inherit">
        {favor ? "Here it is... " : "TRUE... But May be he is a good Team Player.Now look Bellow."}
        <br />
        The whole Record of his Batting Score.
    </Typography >
    <Grid container justify="center" spacing={8}>
        <Grid item md={10} xs={12} style={{ overflowX: 'scroll' }}>
            <Paper style={{ width: 8000 }}>
                <LineDotGraph width={8000} height={300} />
            </Paper>
        </Grid>
        <Grid item>
            <Button variant="contained" color="primary" onClick={() => next(true)}>
                So many Up's and Down's right. Simplely means he always try to improve himself
            </Button>
        </Grid>
    </Grid>

</Paper >

export default withWidth()(withStyles(style)(FourthScreen));
