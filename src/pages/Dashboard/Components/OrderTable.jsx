import React from 'react'
import { Typography } from '@mui/material'
import DataTable from '../../../components/Table/Table';
import styles from '../dashboard.module.scss'
import { rows } from '../../../data/mockData';


// function createData(avatar,customer, orderNo, amount, status) {
//     return { avatar,customer, orderNo, amount, status };
// }

// const rows = [
//     createData("","Wade Warren", 18908424, "$124.00", "Delivered"),
//     createData("","Jane Cooper ", 18908424, "$365.02", "Delivered"),
//     createData("","Mouth Freshner", 18908424, "$45.88", "Cancelled"),
//     createData("","Cupcake", 18908421, "$65", "Pending"),
//     createData("","Cody Fisher", 18908424, "$545.00", "Delivered"),
//     createData("","Savannah Gnuyen ", 18908424, "$128.00", "Delivered"),
// ];

function OrderTable() {
  return (
    <div className={styles["order_table_section"]}>
        <Typography variant="h3" textAlign="left" mb={2}>Recent Orders</Typography>
        <DataTable rows={rows} />
    </div>
  )
}

export default OrderTable