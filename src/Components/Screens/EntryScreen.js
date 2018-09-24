import React from 'react';
import { Typography, withStyles, Paper, Button, Icon } from '@material-ui/core'

const style = theme => ({
    root: {
        padding: theme.spacing.unit * 3,
        overflowY: 'hidden',
        height: '80vh',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'cover',
        fontFamily: `'Patrick Hand', cursive!important`,
        backgroundImage: 'url("https://2.bp.blogspot.com/-3DYLp5jMWYE/WaJ3i-bNC6I/AAAAAAAAISc/pMv9JiqRO9sXPz8Q3NlklxdYxLgC8IrowCLcBGAs/s1600/Cricket%2BGround%2BHD%2BImages.jpg")'
    },
    button: {
        padding: 20
    }
})
const EntryScreen = ({ classes, next }) =>
    <Paper className={classes.root}>
        <Button className={classes.button} variant="contained" onClick={next} color="primary" >
            <Typography color="inherit" variant="title" >
                Start the Tour <Icon>golf_course
</Icon>
            </Typography>
        </Button>
    </Paper >

export default withStyles(style)(EntryScreen);
