import { Badge, Box, Grid, Paper, Typography, styled, useTheme } from '@mui/material';
import React from 'react';
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { tokens } from '../../theme';
import styles from "./card.module.scss";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#141b2d" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,

}));

const makeStyle = (status) => {
    if (status === "delivered") {
        return {
            position: "absolute",
            right: "15px",
            bottom: "10px",
            width: "12px",
            borderRadius: "15px",
            backgroundColor: "#00cf8f",
            height: "12px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "10px",
        };
    } else if (status === "ordered") {
        return {
            position: "absolute",
            right: "15px",
            bottom: "10px",
            width: "12px",
            borderRadius: "15px",
            backgroundColor: "#7494ff",
            height: "12px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "10px",
        };
    } else if (status === "cancelled") {
        return {
            position: "absolute",
            right: "15px",
            bottom: "10px",
            width: "12px",
            borderRadius: "15px",
            backgroundColor: "#f65d5c",
            height: "12px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "10px",
        };
    } else {
        return {
            position: "absolute",
            right: "15px",
            bottom: "10px",
            width: "12px",
            borderRadius: "15px",
            backgroundColor: "#e45ca8",
            height: "12px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "10px",
        };
    }
};

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        right: "2px",
        top: 28,
    },
}));

function DataCard(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Grid container spacing={2}>
    {props.orderDetails.map((item) => (
        <Grid key={item.id} item xs={6} sm={6} md={3}>
            <Item>
                <Box
                    className={`${styles["icon_wrapper"]}`}
                    backgroundColor={
                        item.orderStatus === "ordered"
                            ? colors.secondary[200]
                            : item.orderStatus === "delivered"
                            ? colors.success[200]
                            : item.orderStatus === "cancelled"
                            ? colors.danger[200]
                            : item.orderStatus === "revenue"
                            ? colors.alert[200]
                            : ""
                    }
                >
                    {item.orderStatus === "ordered" ? (
                        <item.icon
                            fontSize="large"
                            color="secondary"
                        />
                    ) : item.orderStatus === "delivered" ? (
                        <item.icon
                            fontSize="large"
                            color="success"
                        />
                    ) : item.orderStatus === "cancelled" ? (
                        <item.icon
                            fontSize="large"
                            color="danger"
                        />
                    ) : item.orderStatus === "revenue" ? (
                        <item.icon
                            fontSize="large"
                            color="alert"
                        />
                    ) : (
                        ""
                    )}
                    <span
                        className="status"
                        style={makeStyle(item.orderStatus)}
                    >
                        {item.badge}
                    </span>
                </Box>
                <Typography
                    textAlign="left"
                    marginTop="10px"
                    marginBottom="16px"
                    className="body"
                >
                    {item.title}
                </Typography>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="h1">
                        {item.totalCount}
                    </Typography>
                    <Box display="flex">
                        {item.status ? (
                            <>
                                {" "}
                                <ArrowDropUpIcon color="success" />
                                <Typography
                                    color={colors.success[500]}
                                    className={
                                        styles["percentage"]
                                    }
                                >
                                    {item.percentage}
                                </Typography>
                            </>
                        ) : (
                            <>
                                {" "}
                                <ArrowDropDownIcon color="danger" />
                                <Typography
                                    className={
                                        styles["percentage"]
                                    }
                                    color={colors.danger[500]}
                                >
                                    {item.percentage}
                                </Typography>
                            </>
                        )}
                    </Box>
                </Box>
            </Item>
        </Grid>
    ))}
</Grid>
   
  )
}

export default DataCard