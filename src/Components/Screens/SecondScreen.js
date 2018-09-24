import React from 'react';
import { Paper, withStyles, Typography, Grid, Button, withWidth, } from '@material-ui/core';
import { isWidthUp } from '@material-ui/core/withWidth'
import photo from '../../assets/sachin_photo.jpg';
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
    inherit: {
        fontFamily: "inherit"
    }

})
const SecondScreen = ({ classes, width, next }) => <Paper className={classes.root} elevation={0}>
    <Grid container justify="center" >
        <Grid item xl={2} lg={3} md={4} sm={5} xs={10}>
            <img className={classes.photo} src={photo} alt="sachin_photo" />
        </Grid>
    </Grid>
    <Typography className={classes.inherit} align="center" variant={isWidthUp('sm', width) ? "display3" : "body1"} color="inherit">
        Wikipedia says,
            </Typography >
    <Typography className={classes.inherit} align="center" variant={isWidthUp('sm', width) ? "headline" : "title"} color="inherit">
        “Sachin Tendulkar is a former Indian cricketer, widely regarded to be the greatest cricketer of all time.”
        </Typography>
    <Typography className={classes.inherit} style={{ marginTop: 20 }} align="center" variant={isWidthUp('sm', width) ? "headline" : "title"} color="inherit">
        I would love to know, Do You belive?
        </Typography>
    <Grid container justify="center" spacing={24}>
        <Grid item>
            <Button variant="contained" color="primary" onClick={() => next(true)}>
                Yes, I do.
                </Button>
        </Grid>
        <Grid item>
            <Button variant="contained" color="secondary" onClick={() => next(false)}>
                No, not at all
                </Button>
        </Grid>
    </Grid>
</Paper>

export default withWidth()(withStyles(style)(SecondScreen));
