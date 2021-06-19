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
    {id: "customerid", label: "Transaction ID", minWidth: 150},
    {id: "joindate", label: "Date joined", minWidth: 150},
    {
        id: "custname",
        label: "Customer Name",
        minWidth: 170,
    },
    {
        id: "total",
        label: "Amount",
        minWidth: 150,
        align: "right",
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "last",
        label: "Order Status",
        minWidth: 170,
        align: "right",
    },
];

function createData(customerid, joindate, custname, total, last) {
    return {customerid, joindate, custname, total, last};
}

const rows = [
    createData("#1510031", "6/19/21", "Olivia Shine", "$263.5", "Pending"),
    createData(
        "#1510036",
        "6/19/21",
        "Rendy Greenlee",
        "$250.00",
        "Not received"
    ),
    createData(
        "#1510018",
        "6/19/21",
        "Roberto Carlo",
        "$150.20",
        "Shipped out"
    ),
    createData("#1510022", "6/18/21", "David Horizon", "$99.95", "Delivered"),
    createData("#1510025", "6/18/21", "Oliver Sykes", "$95.84", "Delivered"),
    createData("#1510090", "6/17/21", "Danny Worsnop", "$145.50", "Delivered"),
    createData(
        "#1510037",
        "6/15/21",
        "Jeremy McKinnon",
        "$129.00",
        "Delivered"
    ),
    createData(
        "#1510030",
        "6/15/21",
        "Samantha Bake",
        "$200.00",
        "Not Delivered"
    ),
    createData("#1510038", "6/12/21", "Veronica Vernon", "$20.00", "Delivered"),
    createData("#1510071", "6/7/21", "Franky Itadory", "$80.00", "Delivered"),
    createData("#1510001", "6/2/21", "Jessica Wong", "$55.90", "Delivered"),
    createData("#1510043", "6/2/21", "Emilia Johansson", "$80.00", "Delivered"),
    createData("#1510019", "6/1/21", "Jui Hong", "$80.00", "Delivered"),
    createData("#1510023", "5/29/21", "Jarl Varg", "$190.00", "Delivered"),
    createData("#1510039", "5/29/21", "Rober Blake", "$250.00", "Delivered"),
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
