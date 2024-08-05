import React from "react";
import BarChart from "../../../components/Chart/Chart";
import { Box, Chip, Typography } from "@mui/material";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import DoneIcon from '@mui/icons-material/Done';


function ActivityReport() {
    return (
        <div>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h3">Activity</Typography>
                <Chip
                    label="Weekly"
                    deleteIcon={<DoneIcon color="white" />}
                />
            </Box>
            <BarChart />
        </div>
    );
}

export default ActivityReport;
