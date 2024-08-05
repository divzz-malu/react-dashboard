import React from "react";
import {
    Avatar,
    Badge,
    Box,
    IconButton,
    InputBase,
    useTheme,
} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import styles from "./header.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import Person from "../../assets/male-01.jpg";

function Header(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <header className={`header ${styles["header-section"]}`}>
            <Box
                display="flex"
                justifyContent="space-between"
                backgroundColor={colors.primary[500]}
                alignItems="center"
                padding="0 1rem"
                height="100%"
                gap={0.5}
            >
                <Box display="flex" alignItems="center">
                    <IconButton
                        className={styles["header-menu"]}
                        aria-label="delete"
                        onClick={() => props.toggleData()}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box
                        display="flex"
                        backgroundColor={colors.primary[400]}
                        borderRadius={1}
                        p={0.2}
                    >
                        <IconButton type="button">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            sx={{ flex: 1 }}
                            placeholder="Search"
                        />
                    </Box>
                </Box>
                <Box sx={{ flexShrink: 0 }}>
                    <IconButton
                        size="small"
                        className={`${styles["iconButton"]}`}
                        sx={{ backgroundColor: colors.primary[300] }}
                    >
                        <MailOutlineIcon />
                    </IconButton>
                    <IconButton
                        size="small"
                        className={`${styles["iconButton"]}`}
                        sx={{ backgroundColor: colors.primary[300] }}
                    >
                        <Badge color="secondary" variant="dot">
                            <NotificationsOutlinedIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        size="small"
                        className={`${styles["iconButton"]}`}
                        sx={{ backgroundColor: colors.primary[300] }}
                    >
                        <SettingsOutlinedIcon />
                    </IconButton>
                    <IconButton size="small">
                        <Avatar sx={{ width: 30, height: 30 }} src={Person} />
                    </IconButton>
                </Box>
            </Box>
        </header>
    );
}

export default Header;
