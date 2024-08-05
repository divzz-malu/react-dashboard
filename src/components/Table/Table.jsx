import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, CardHeader, Chip, Typography, styled, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        color: theme.palette.common.white,
        fontSize: 16,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const makeStyle = (status) => {
    if (status === "Delivered") {
        return {
            background: "rgba(17,84,71,0.8)",
            color: "#00cf8f",
            borderRadius: "12px",
            padding:"5px"
        };
    } else if (status === "Pending" || status === "Cancelled") {
        return {
            background: "rgba(95,51,57,0.7)",
            color: "#f65d5c",
            borderRadius: "12px",
            padding:"5px"
        };
    } else {
        return {
            background: "#59bfff",
            color: "white",
            borderRadius: "12px",
            padding:"5px"
        };
    }
};
function DataTable(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <TableContainer
            component={Paper}
            sx={{
                backgroundColor: colors.primary[500],
                border: "none",
                boxShadow: "none",
            }}
        >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell >Customer</StyledTableCell>
                        <StyledTableCell align="left">Order No</StyledTableCell>
                        <StyledTableCell align="left">Amount</StyledTableCell>
                        <StyledTableCell align="left">Status</StyledTableCell>
                        {/* <StyledTableCell align="left"></StyledTableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody style={{ color: "white" }}>
                    {props.rows.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <StyledTableCell component="th" scope="row" >
                                <CardHeader sx={{margin:"0px",padding:"0px"}}
                                    avatar={
                                        <Avatar
                                            alt={row.customer}
                                            src={row.avatar}
                                        />
                                    }
                                    title={<Typography variant="body1" >{row.customer}</Typography>}
                                />
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                {row.orderNo}
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                {row.amount}
                            </StyledTableCell>
                            <StyledTableCell align="left">
                            {/* {row.status=== "Delivered" ? <Chip label={row.status} color="success" size="small" />:""} */}

                                <span
                                    className="status"
                                    style={makeStyle(row.status)}
                                >
                                    {row.status}
                                </span>
                            </StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default DataTable;
