import React from 'react';
import { Paper, withStyles, Typography, Grid, Button, withWidth } from '@material-ui/core';
import PieChart from '../Charts/PieChart';
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
    <Typography className={classes.inherit} align="center" variant={isWidthUp('sm', width) ? "display2" : "title"} color="inherit">
        {favor ? "You Might Find It Intresting." : "Let's see the wall of Truth."}
    </Typography >
    <Grid container justify="center" spacing={24}>
        <Grid item xs={12}>
            <Typography className={classes.inherit} align="center" variant={isWidthUp('sm', width) ? "headline" : "body2"} color="inherit">
                Among all the matches he played, more than 50% were converted into wins.</Typography >
        </Grid>
        <Grid item md={4} xs={false} />
        <Grid item md={4} xs={12}>
            <PieChart width={isWidthUp('md', width) ? 400 : 200} height={isWidthUp('md', width) ? 400 : 200} />
        </Grid>
        <Grid item md={4} xs={false} />

        <Grid item >
            <Button variant="contained" color="primary" onClick={() => next(true)}>
                {favor ? "Excited for whats Next :)" : "Now you will say it was result of Whole "}
            </Button>
        </Grid>
    </Grid>

</Paper >

export default withWidth()(withStyles(style)(FourthScreen));
