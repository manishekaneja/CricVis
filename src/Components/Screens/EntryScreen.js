import React from 'react';
import PropTypes from 'prop-types'
import { Typography, withStyles, Paper, Button, Icon } from '@material-ui/core'

const style = theme => ({
    root: {
        padding: theme.spacing.unit * 3,
        overflowY: 'hidden',
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    button: {
        padding: 20
    }
})

//Component representing the First Screen <Main Screen> of the  App
const EntryScreen = ({ classes, next }) =>
    <Paper className={classes.root}>
        <Button className={classes.button} variant="contained" onClick={next} color="primary" >
            <Typography color="inherit" variant="title" >
                Start the Tour <Icon>golf_course
            </Icon>
            </Typography>
        </Button>
    </Paper >

EntryScreen.propTypes = {
    next: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
}

export default withStyles(style)(EntryScreen);
