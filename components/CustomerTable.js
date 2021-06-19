import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
    {id: "customerid", label: "Customer ID", minWidth: 150},
<<<<<<< Updated upstream
    {id: "joindate", label: "Date joined", minWidth: 150},
=======
    {id: "joindate", label: "Date joined", minWidth: 170},
>>>>>>> Stashed changes
    {
        id: "custname",
        label: "Customer Name",
        minWidth: 170,
    },
    {
        id: "total",
        label: "Total spent",
        minWidth: 150,
        align: "right",
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "last",
        label: "Last Transaction",
        minWidth: 170,
        align: "right",
    },
];

function createData(customerid, joindate, custname, total, last) {
    return {customerid, joindate, custname, total, last};
}

const rows = [
    createData("C-004562", "1/04/20", "Olivia Shine", 3287263, 22),
    createData("C-00458", "1/04/20", "Rendy Greenlee", 9596961),
    createData("C-004563", "1/05/20", "Roberto Carlo", 301340),
    createData("C-004563", "1/07/20", "David Horizon", 9833520),
    createData("C-00456", "1/10/20", "Oliver Sykes", 9984670),
    createData("C-004560", "2/14/20", "Danny Worsnop", 7692024),
    createData("C-00451", "3/5/20", "Jeremy McKinnon", 357578),
    createData("C-004564", "3/20/20", "Samantha Bake", 70273),
    createData("C-00459", "9/15/20", "Veronica Vernon", 1972550),
    createData("C-00457", "11/7/20", "Franky Itadory", 377973),
    createData("C-00487", "12/5/20", "Jessica Wong", 640679),
    createData("C-00448", "2/6/21", "Emilia Johansson", 242495),
    createData("C-00459", "4/19/21", "Jui Hong", 17098246),
    createData("C-00411", "5/7/21", "Jarl Varg", 923768),
    createData("C-00412", "5/9/21", "Rober Blake", 8515767),
];

const useStyles = makeStyles({
    root: {
        width: "100%",
    },
    container: {
        maxHeight: 600,
    },
});

export default function StickyHeadTable() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{minWidth: column.minWidth}}>
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((row) => {
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}>
                                                    {column.format &&
                                                    typeof value === "number"
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                className="btn"
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
