import React from 'react';
import { Paper, Table, TableHead, TableRow, TableBody, Toolbar, Typography, IconButton, Icon } from '@material-ui/core';
import CustomTableCell from './CustomTableCell';

class PaginationTable extends React.Component {
    render = () => <React.Fragment><Paper className={this.props.classes.root} square>
        <Table className={this.props.classes.table}>
            <TableHead>
                <TableRow>
                    <CustomTableCell>Date</CustomTableCell>
                    {this.props.status.catches && <CustomTableCell numeric>Catches</CustomTableCell>}
                    {this.props.status.result_margin && <CustomTableCell numeric>Result Margin</CustomTableCell>}
                    {this.props.status.batting_score && <CustomTableCell numeric>Batting Score</CustomTableCell>}
                    {this.props.status.runs_conceded && <CustomTableCell numeric>Runs Conceded</CustomTableCell>}
                    {this.props.status.batting_innings && <CustomTableCell numeric>Batting Innings</CustomTableCell>}
                    {this.props.status.toss && <CustomTableCell numeric>Toss</CustomTableCell>}
                    {this.props.status.stumps && <CustomTableCell numeric>Stumps</CustomTableCell>}
                    {this.props.status.wickets && <CustomTableCell numeric>Wickets</CustomTableCell>}
                    {this.props.status.ground && <CustomTableCell numeric>Ground</CustomTableCell>}
                    <CustomTableCell numeric>Opposition</CustomTableCell>
                    {this.props.status.match_result && <CustomTableCell numeric>Match Result</CustomTableCell>}
                </TableRow>
            </TableHead>
            <TableBody>
                {this.props.list.length ? this.props.list.slice(this.props.index * 10, (this.props.index + 1) * 10).map((row, index) => {
                    return (
                        <TableRow className={this.props.classes.row} key={index}>
                            <CustomTableCell component="th" scope="row">{row.date}</CustomTableCell>
                            {this.props.status.catches && <CustomTableCell numeric>{row.catches}</CustomTableCell>}
                            {this.props.status.result_margin && <CustomTableCell numeric>{row.result_margin}</CustomTableCell>}
                            {this.props.status.batting_score && <CustomTableCell numeric>{row.batting_score}</CustomTableCell>}
                            {this.props.status.runs_conceded && <CustomTableCell numeric>{row.runs_conceded}</CustomTableCell>}
                            {this.props.status.batting_innings && <CustomTableCell numeric>{row.batting_innings}</CustomTableCell>}
                            {this.props.status.toss && <CustomTableCell numeric>{row.toss}</CustomTableCell>}
                            {this.props.status.stumps && <CustomTableCell numeric>{row.stumps}</CustomTableCell>}
                            {this.props.status.wickets && <CustomTableCell numeric>{row.wickets}</CustomTableCell>}
                            {this.props.status.ground && <CustomTableCell numeric>{row.ground}</CustomTableCell>}
                            <CustomTableCell numeric>{row.opposition}</CustomTableCell>
                            {this.props.status.match_result && <CustomTableCell numeric>{row.match_result}</CustomTableCell>}
                        </TableRow>
                    );
                }) :
                    <TableRow className={this.props.classes.row}>
                        <CustomTableCell component="th" scope="row" style={{ textAlign: 'center' }} colSpan={Object.keys(this.props.status).filter(ele => this.props.status[ele]).length} >Opps!!!! No Data To Display</CustomTableCell>
                    </TableRow>
                }
            </TableBody>
        </Table>
    </Paper>
        <Toolbar style={{ justifyContent: 'center', width: '100%' }}>
            <IconButton variant="contained" color="primary" disabled={this.props.index <= 0} onClick={this.props.previous} style={{ transform: `rotateZ(180deg)` }}><Icon>navigate_next</Icon></IconButton>
            <Typography variant="title" style={{ padding: 10 }}>
                {this.props.index + 1} / {Math.floor(this.props.list.length / 10) + 1}
            </Typography>
            <IconButton variant="contained" color="primary" disabled={this.props.index >= (Math.floor(this.props.list.length / 10))} onClick={this.props.next} ><Icon>navigate_next</Icon></IconButton>
        </Toolbar>

    </React.Fragment>


}
export default PaginationTable;
