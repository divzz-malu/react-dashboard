import React from 'react'
import { Typography } from '@mui/material'
import DataTable from '../../../components/Table/Table';
import styles from '../dashboard.module.scss'
import { rows } from '../../../data/mockData';


function OrderTable() {
  return (
    <div className={styles["order_table_section"]}>
        <Typography variant="h3" textAlign="left" mb={2}>Recent Orders</Typography>
        <DataTable rows={rows} />
    </div>
  )
}

export default OrderTable