import React from "react";
import { Chart, defaults } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { ActivityData } from "../../data/mockData";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

function BarChart() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <div>
            <Bar
                data={{
                    labels: ActivityData.map((data) =>data.label),
                    datasets: [
                        {
                            label: "count",
                            data: ActivityData.map((data) =>data.value),
                            backgroundColor:colors.secondary[500],
                            borderRadius:50,
                            borderSkipped:false,
                            barPercentage:0.5,
                        },
                    ],
                }}
            />
        </div>
    );
}

export default BarChart;
