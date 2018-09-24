import React from 'react';
import { Paper, withStyles, Typography, Grid, TableRow, TableBody, TableHead, Table, withWidth, Button } from '@material-ui/core';
import { purple } from '@material-ui/core/colors'
import CustomTableCell from '../DialogScreen/TableComponents/CustomTableCell';
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
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        }
    },
    inherit: {
        fontFamily: "inherit"
    }

})

const ThirdScreen = ({ favor, next, classes, width }) => <Paper className={classes.root} elevation={0}>
    <Typography className={classes.inherit} align="center" variant={isWidthUp('sm', width) ? "display2" : "title"} color="inherit">
        {favor ? "Then You will Love this Tour" : "Then you must take a glance at his Cricket Carrer"}
    </Typography >
    <Grid container justify="center" spacing={8}>
        <Grid item xs={12}>
            <Typography className={classes.inherit} align="center" variant={isWidthUp('sm', width) ? "headline" : "body1"} color="inherit">
                The Table bellow tells a lot about him as a Cricketer
            </Typography >
        </Grid>
        <Grid item md={3} xs={false} />
        <Grid item md={6} xs={12}>
            <Paper>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <CustomTableCell>Parameter</CustomTableCell>
                            <CustomTableCell>Result</CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow className={classes.row}>
                            <CustomTableCell> Runs scored</CustomTableCell>
                            <CustomTableCell>15,921</CustomTableCell>
                        </TableRow>
                        <TableRow className={classes.row}>
                            <CustomTableCell>  Batting average</CustomTableCell>
                            <CustomTableCell>53.78</CustomTableCell>
                        </TableRow><TableRow className={classes.row}>
                            <CustomTableCell> Top Score</CustomTableCell>
                            <CustomTableCell>248</CustomTableCell>
                        </TableRow><TableRow className={classes.row}>
                            <CustomTableCell> 100s/50s</CustomTableCell>
                            <CustomTableCell>51/68</CustomTableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </Grid>
        <Grid item md={3} xs={false} />
        <Grid item>
            <Button variant="contained" color="primary" onClick={() => next(true)}>
                Let's take a Better Look
        </Button>
        </Grid>
    </Grid>

</Paper >

export default withWidth()(withStyles(style)(ThirdScreen));
