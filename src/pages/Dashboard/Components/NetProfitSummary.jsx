import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { ProfitData } from "../../../data/mockData";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { tokens } from "../../../theme";
import styles from "../dashboard.module.scss";

function NetProfitSummary() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <div className={styles["profit_summary_section"]}>
            <Stack
                direction={{xs:"row", sm: "column", md: "row" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                justifyContent={{xs:"space-evenly", sm: "center", md: "space-between" }}
                alignItems="center"
                height="100%"
            >
                <Box >
                    <Typography
                        className="body"
                        textAlign={{ sm: "center", md: "left" }}
                        marginBottom={2}
                    >
                        {ProfitData.title}
                    </Typography>
                    <Typography variant="h1">{ProfitData.amount}</Typography>
                    <Box marginTop={2}
                        display="flex"
                        justifyContent={{xs:"center", sm: "center", md: "left" }}
                    >
                        <ArrowDropUpIcon color="success" />
                        <Typography
                            color={colors.success[500]}
                            // textAlign={{ sm: "center", md: "left" }}
                        >
                            {ProfitData.growth}
                        </Typography>
                    </Box>
                </Box>
                <Box className={styles["progressbar"]}>
                    <CircularProgressbar
                        value={70}
                        text={`${70}%`}
                        strokeWidth={10}
                        styles={buildStyles({
                            textColor: "#fff",
                            pathColor: colors.secondary[500],
                            trailColor: colors.secondary[200]
                          })}
                    />
                </Box>
                {/* <Typography variant="body2" textAlign="center" maxWidth="80px">
                        *The values here has been rounded off.
                    </Typography> */}
            </Stack>
        </div>
    );
}

export default NetProfitSummary;
