import React from 'react';
import { Paper, withStyles, Typography, Grid, Button } from '@material-ui/core';
import { purple } from '@material-ui/core/colors'

import PieChart2 from '../Charts/PieChart2';
import BarGraph from '../Charts/BarGraph';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

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

const SixthScreen = ({ favor, next, classes, width }) => <Paper className={classes.root} elevation={0}>
    <Typography className={classes.inherit} align="center" variant="headline" color="inherit">
        Here are the Some othee Visualization of Sachin's Carrer
    </Typography >
    <Grid container justify="center" spacing={24}>
        <Grid item xs={12}>
            <Typography align="center" className={classes.inherit} variant="headline" color="inherit">
                Count of classes in which he scored
            </Typography >
        </Grid>
        <Grid item sm={5} xs={false} />
        <Grid item sm={2} xs={12}>
            <PieChart2 width={isWidthUp('md', width) ? 300 : 200} height={isWidthUp('md', width) ? 300 : 200} />
        </Grid>
        <Grid item sm={5} xs={false} />
        <Grid item xs={12}>
            <Typography className={classes.inherit} align="center" variant="headline" color="inherit">
                How his score Affected the Match
            </Typography >
        </Grid>
        <Grid item xs={12} style={{ overflowX: 'scroll' }}>
            <Paper style={{ width: 8000 }}>
                <BarGraph width={8000} height={300} />
            </Paper>
        </Grid>
        <Grid item>
            <Button variant="contained" color="primary" onClick={() => next(true)}>
                What's next now??     </Button>
        </Grid>
    </Grid>

</Paper >

export default withWidth()(withStyles(style)(SixthScreen));
