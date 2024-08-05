import { Box, IconButton, Typography, useTheme } from "@mui/material";
import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import styles from "../dashboard.module.scss";
import { tokens } from "../../../theme";
import { categories } from "../../../data/mockData";

function Categories() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <div className={`${styles["category_section"]}`}>
            {categories.map((category) => (
                <Box
                    key={category.id}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    marginBottom={2}
                >
                    <Box display="flex" alignItems="center">
                        <Box
                            className={`${styles["category_icon_wrapper"]}`}
                            backgroundColor={
                                category.id === 1
                                    ? colors.danger[200]
                                    : category.id === 2
                                    ? colors.secondary[200]
                                    : category.id === 3
                                    ? colors.success[200]
                                    : ""
                            }
                        >
                            {category.id === 1 ? (
                                <category.icon color="danger" />
                            ) : category.id === 2 ? (
                                <category.icon color="secondary" />
                            ) : category.id === 3 ? (
                                <category.icon color="success" />
                            ) : (
                                ""
                            )}
                        </Box>
                        <Typography variant="subtitle1" paddingLeft={2}>
                            {category.title}
                        </Typography>
                    </Box>
                    <IconButton sx={{ backgroundColor: colors.primary[300] }}>
                        <NavigateNextIcon />
                    </IconButton>
                </Box>
            ))}
        </div>
    );
}

export default Categories;
