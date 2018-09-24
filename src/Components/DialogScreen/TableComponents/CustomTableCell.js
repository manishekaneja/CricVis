import { withStyles, TableCell } from '@material-ui/core';

//Component to customize the Table Cell
export default withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 16
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);
