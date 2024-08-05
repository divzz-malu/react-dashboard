import React, { useState } from "react";
import {
    Box,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    styled,
    useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import styles from "./sidebar.module.scss";
import Logo from "../../assets/logo192.png";
import { MenuItems } from "../../data/mockData";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CloseIcon from "@mui/icons-material/Close";

const CustomList = styled(List)(({ theme }) => ({
    "& .MuiListItemButton-root": {
        paddingLeft: 12,
        paddingRight: 12,
        color: "white",
        "&.Mui-selected": {
            backgroundColor: `${theme.palette.mode.primary}`,
            borderLeft: `4px solid ${theme.palette.secondary.main}`,
            "& .MuiListItemText-primary": {
                color: "white",
            },
        },
        "&:hover": {
            background: `${theme.palette.mode.primary}`,
        },
    },
    "& .MuiListItemIcon-root": {
        minWidth: "unset",
    },
}));

function Sidebar(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [selectedIndex, setSelectedIndex] = useState(0);
    console.log(props.expanded, "exp");

    const handleListItemClick = (index) => {
        setSelectedIndex(index);
    };
    return (
        <nav className="nav">
            {props.expanded ? (
                <Box
                    backgroundColor={colors.primary[500]}
                    className={`${styles["sidebar-section"]} ${styles["show"]}`}
                >
                    <Box
                        display="flex"
                        paddingLeft={1}
                        paddingTop={2}
                        className={styles["logo"]}
                    >
                        <img
                            className={`${styles["sidebar_logo"]}`}
                            src={Logo}
                        />
                        <IconButton
                            className={styles["sidebar-menu"]}
                            aria-label="delete"
                            onClick={() => props.toggleData()}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Box paddingTop={2} height="calc(100vh - 60px)">
                        <CustomList className={`${styles["sidebar_list"]}`}>
                            <Box>
                                {MenuItems.map((item, index) => (
                                    <ListItem
                                        disablePadding
                                        key={index}
                                        className={`${styles["sidebar_list_item"]}`}
                                    >
                                        <ListItemButton
                                            className={
                                                styles["list_item_button"]
                                            }
                                            selected={selectedIndex === index}
                                            onClick={() =>
                                                handleListItemClick(index)
                                            }
                                        >
                                            <ListItemIcon>
                                                <item.icon />
                                            </ListItemIcon>
                                            <ListItemText
                                                className={
                                                    styles["list_item_text"]
                                                }
                                                primary={item.label}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </Box>
                            <ListItem disablePadding>
                                <ListItemButton
                                    className={styles["list_item_button"]}
                                    sx={{ justifyContent: "center" }}
                                >
                                    <ListItemIcon>
                                        <ExitToAppIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        className={styles["list_item_text"]}
                                        primary="Logout"
                                    />
                                </ListItemButton>
                            </ListItem>
                        </CustomList>
                    </Box>
                </Box>
            ) : (
                <Box
                    backgroundColor={colors.primary[500]}
                    className={`${styles["sidebar-section"]} ${styles["hide"]}`}
                >
                    <Box
                        display="flex"
                        paddingLeft={1}
                        paddingTop={2}
                        className={styles["logo"]}
                    >
                        <img
                            className={`${styles["sidebar_logo"]}`}
                            src={Logo}
                        />
                        <IconButton
                            className={styles["sidebar-menu"]}
                            aria-label="delete"
                            onClick={() => props.toggleData()}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Box paddingTop={2} height="calc(100vh - 60px)">
                        <CustomList className={`${styles["sidebar_list"]}`}>
                            <Box>
                                {MenuItems.map((item, index) => (
                                    <ListItem
                                        disablePadding
                                        key={index}
                                        className={`${styles["sidebar_list_item"]}`}
                                    >
                                        <ListItemButton
                                            className={
                                                styles["list_item_button"]
                                            }
                                            selected={selectedIndex === index}
                                            onClick={() =>
                                                handleListItemClick(index)
                                            }
                                        >
                                            <ListItemIcon>
                                                <item.icon />
                                            </ListItemIcon>
                                            <ListItemText
                                                className={
                                                    styles["list_item_text"]
                                                }
                                                primary={item.label}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </Box>
                            <ListItem disablePadding>
                                <ListItemButton
                                    className={styles["list_item_button"]}
                                    sx={{ justifyContent: "center" }}
                                >
                                    <ListItemIcon>
                                        <ExitToAppIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        className={styles["list_item_text"]}
                                        primary="Logout"
                                    />
                                </ListItemButton>
                            </ListItem>
                        </CustomList>
                    </Box>
                </Box>
            )}
        </nav>
    );
}

export default Sidebar;
