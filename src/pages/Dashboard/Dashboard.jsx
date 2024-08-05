import React from "react";
import styles from "./dashboard.module.scss";
import { Box, Grid, Stack, Typography, styled } from "@mui/material";
import Paper from "@mui/material/Paper";
import ProductSummary from "./Components/ProductSummary";
import NetProfitSummary from "./Components/NetProfitSummary";
import ActivityReport from "./Components/ActivityReport";
import BarChart from "../../components/Chart/Chart";
import Categories from "./Components/CategoriesAndGoals";
import OrderTable from "./Components/OrderTable";
import FeedbackSection from "./Components/FeedbackSection";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#141b2d" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height:"100%",
    maxHeight:"325px",
    overflow:"auto"
    // height:"100%"
    // maxWidth:"200px",
}));

function Dashboard() {
    return (
        <div className={styles["dashboard_section"]}>
            <Typography variant="h2" mb={2} >Dashboard</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={8} md={8}>
                        <ProductSummary />
                       
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Item>
                            <NetProfitSummary />
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={7} md={8}>
                        <Item>
                            <ActivityReport />
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={5} md={4}>
                        <Item>
                            <Categories />
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={7} md={8}>
                        <Item>
                            <OrderTable />
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={5} md={4}>
                        <Item>
                            <FeedbackSection />
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default Dashboard;
