import React from 'react';
import PropTypes from 'prop-types'
import { Paper, Table, TableHead, TableRow, TableBody, Toolbar, Typography, IconButton, Icon } from '@material-ui/core';

import CustomTableCell from './CustomTableCell';

//A Component for Displaying the Paginationed  Table
const PaginationTable = ({ classes, status, list, index, previous, next }) => <React.Fragment><Paper className={classes.root} square>
    <Table className={classes.table}>
        <TableHead>
            <TableRow>
                <CustomTableCell>Date</CustomTableCell>
                {status.catches && <CustomTableCell numeric>Catches</CustomTableCell>}
                {status.result_margin && <CustomTableCell numeric>Result Margin</CustomTableCell>}
                {status.batting_score && <CustomTableCell numeric>Batting Score</CustomTableCell>}
                {status.runs_conceded && <CustomTableCell numeric>Runs Conceded</CustomTableCell>}
                {status.batting_innings && <CustomTableCell numeric>Batting Innings</CustomTableCell>}
                {status.toss && <CustomTableCell numeric>Toss</CustomTableCell>}
                {status.stumps && <CustomTableCell numeric>Stumps</CustomTableCell>}
                {status.wickets && <CustomTableCell numeric>Wickets</CustomTableCell>}
                {status.ground && <CustomTableCell numeric>Ground</CustomTableCell>}
                <CustomTableCell numeric>Opposition</CustomTableCell>
                {status.match_result && <CustomTableCell numeric>Match Result</CustomTableCell>}
            </TableRow>
        </TableHead>
        <TableBody>
            {list.length ? list.slice(index * 10, (index + 1) * 10).map((row, index) => {
                return (
                    <TableRow className={classes.row} key={index}>
                        <CustomTableCell component="th" scope="row">{row.date}</CustomTableCell>
                        {status.catches && <CustomTableCell numeric>{row.catches}</CustomTableCell>}
                        {status.result_margin && <CustomTableCell numeric>{row.result_margin}</CustomTableCell>}
                        {status.batting_score && <CustomTableCell numeric>{row.batting_score}</CustomTableCell>}
                        {status.runs_conceded && <CustomTableCell numeric>{row.runs_conceded}</CustomTableCell>}
                        {status.batting_innings && <CustomTableCell numeric>{row.batting_innings}</CustomTableCell>}
                        {status.toss && <CustomTableCell numeric>{row.toss}</CustomTableCell>}
                        {status.stumps && <CustomTableCell numeric>{row.stumps}</CustomTableCell>}
                        {status.wickets && <CustomTableCell numeric>{row.wickets}</CustomTableCell>}
                        {status.ground && <CustomTableCell numeric>{row.ground}</CustomTableCell>}
                        <CustomTableCell numeric>{row.opposition}</CustomTableCell>
                        {status.match_result && <CustomTableCell numeric>{row.match_result}</CustomTableCell>}
                    </TableRow>
                );
            }) :
                <TableRow className={classes.row}>
                    <CustomTableCell component="th" scope="row" style={{ textAlign: 'center' }} colSpan={Object.keys(status).filter(ele => status[ele]).length} >Opps!!!! No Data To Display</CustomTableCell>
                </TableRow>
            }
        </TableBody>
    </Table>
</Paper>
    <Toolbar style={{ justifyContent: 'center', width: '100%' }}>
        <IconButton variant="contained" color="primary" disabled={index <= 0} onClick={previous} style={{ transform: `rotateZ(180deg)` }}><Icon>navigate_next</Icon></IconButton>
        <Typography variant="title" style={{ padding: 10 }}>
            {index + 1} / {Math.floor(list.length / 10) + 1}
        </Typography>
        <IconButton variant="contained" color="primary" disabled={index >= (Math.floor(list.length / 10))} onClick={next} ><Icon>navigate_next</Icon></IconButton>
    </Toolbar>
</React.Fragment>

PaginationTable.propTypes = {
    index: PropTypes.number.isRequired,
    next: PropTypes.func.isRequired,
    previous: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired,
    status: PropTypes.object.isRequired,
    classes: PropTypes.object
}
PaginationTable.defaultProps = {
    classes: {},
}

export default PaginationTable;
