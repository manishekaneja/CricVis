import React from 'react';
import PropTypes from 'prop-types'

import { Paper, withStyles, Typography, Grid, Button } from '@material-ui/core';
import { purple } from '@material-ui/core/colors'

import firstPic from './../../assets/f.png'
import secondPic from './../../assets/s.png'

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

//This component represent the Seven Screen of the Appliction  
const SevenScreen = ({ favor, next, classes }) => <Paper className={classes.root} elevation={0}>
    <Typography align="center" variant="headline" style={{ fontFamily: "inherit" }} color="inherit">
        Well, all of this was statical data. It doesn't tell us about how he behave with other players or his nature.
    </Typography >
    <Typography align="center" variant="headline" style={{ fontFamily: "inherit" }} color="inherit">
        But I can say, It will be difficult for you to find an incident about Sachin being involved in a Disput or Fight on Ground.This thing shows that he has a healty sportsman spirit.
    </Typography >
    <Typography align="center" color="inherit" variant="display2" style={{ marginTop: 10 }}>Facts Time</Typography>
    <Grid container justify="center" spacing={24}>
        <Grid item md={6} xs={12} >
            <img src={firstPic} style={{ width: '100%', height: '100%' }} alt="first_img" />
        </Grid>
        <Grid item md={6} xs={12} >
            <img src={secondPic} style={{ width: '100%', height: '100%' }} alt="second_img" />
        </Grid>
        <Grid item xs={12}>
            Above two images make it totally clear that Wikipedia didn't say but it's own. Almost all the Crickets belive it.
        </Grid>
        <Grid item >
            <Button variant="contained" color="primary" onClick={() => next(true)}>
                Let's End the Tour now
           </Button>
        </Grid>
    </Grid>
</Paper >

SevenScreen.propTypes = {
    next: PropTypes.func.isRequired,
    favor: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired
}


export default withStyles(style)(SevenScreen);
