import React from "react";
import styles from "../dashboard.module.scss";
import {
    Box,
} from "@mui/material";
import { orderDetails } from "../../../data/mockData";
import DataCard from "../../../components/Card/Card";



function ProductSummary() {
    return (
        <div className={styles["product_summary_section"]}>
            <Box sx={{ flexGrow: 1 }}>
                <DataCard orderDetails={orderDetails} />
            </Box>
        </div>
    );
}

export default ProductSummary;
