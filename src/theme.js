import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// colors

export const tokens = (mode) => ({
    ...(mode === "dark"
        ? {
              primary: {
                  100: "#d0d1d5",
                  200: "#27336A",
                  300: "rgba(255, 255, 255, 0.16)",
                  400: "#1F2A40",
                  500: "#141b2d",
                  600: "#101624",
                  700: "#0c101b",
                  800: "#080b12",
                  900: "#040509",
              },
              secondary: {
                100: "#e3eaff",
                200: "rgba(40,52,107,0.8)",
                300: "#acbfff",
                400: "#90a9ff",
                500: "#7494ff",
                600: "#5d76cc",
                700: "#465999",
                800: "#181E40",
                900: "#171e33",
            },
              success: {
                  100: "#ccf5e9",
                  200: "rgba(17,84,71,0.8)",
                  300: "#66e2bc",
                  400: "#33d9a5",
                  500: "#00cf8f",
                  600: "#00a672",
                  700: "#007c56",
                  800: "#005339",
                  900: "#00291d",
              },
              danger: {
                  100: "#fddfde",
                  200: "rgba(95,51,57,0.7)",
                  300: "#fa9e9d",
                  400: "#f87d7d",
                  500: "#f65d5c",
                  600: "#c54a4a",
                  700: "#943837",
                  800: "#622525",
                  900: "#311312",
              },
              alert: {
                  100: "#fadeee",
                  200: "rgba(90,45,74,0.9)",
                  300: "#ef9dcb",
                  400: "#e97db9",
                  500: "#e45ca8",
                  600: "#b64a86",
                  700: "#893765",
                  800: "#5b2543",
                  900: "#2e1222",
              },
          }
        : {
              primary: {
                  100: "#040509",
                  200: "#080b12",
                  300: "#0c101b",
                  400: "#f2f0f0",
                  500: "#141b2d",
                  600: "#1F2A40",
                  700: "#727681",
                  800: "#a1a4ab",
                  900: "#d0d1d5",
              },
              secondary: {
                  900: "#e3eaff",
                  800: "#c7d4ff",
                  700: "#acbfff",
                  600: "#90a9ff",
                  500: "#7494ff",
                  400: "#5d76cc",
                  300: "#465999",
                  200: "#2e3b66",
                  100: "#171e33",
              },
              success: {
                  100: "#00291d",
                  200: "#0C332B",
                  300: "#007c56",
                  400: "#00a672",
                  500: "#00cf8f",
                  600: "#33d9a5",
                  700: "#66e2bc",
                  800: "#99ecd2",
                  900: "#ccf5e9",
              },
              danger: {
                  100: "#311312",
                  200: "#622525",
                  300: "#943837",
                  400: "#c54a4a",
                  500: "#f65d5c",
                  600: "#f87d7d",
                  700: "#fa9e9d",
                  800: "#fbbebe",
                  900: "#fddfde",
              },
              alert: {
                  100: "#2e1222",
                  200: "#5b2543",
                  300: "#893765",
                  400: "#b64a86",
                  500: "#e45ca8",
                  600: "#e97db9",
                  700: "#ef9dcb",
                  800: "#f4bedc",
                  900: "#fadeee",
              },
          }),
});

// theme settings

export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                      primary: {
                          main: colors.primary[500],
                      },
                      secondary: {
                        main: colors.secondary[500],
                        secondary: colors.secondary[800]
                    },
                      success: {
                          main: colors.success[500],
                      },
                      background: {
                          default: colors.primary[600],
                      },
                      danger: {
                        main: colors.danger[500],
                      }
                  }
                : {
                      primary: {
                          main: colors.primary[100],
                      },
                      secondary: {
                        main: colors.secondary[500],
                    },
                      success: {
                          main: colors.success[500],
                      },
                      background: {
                          default: "#fcfcfc",
                      },
                  }),
        },
        typography: {
            fontFamily: ["Roboto", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 30,
                fontWeight:"700"
            },
            h2: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 24,
                fontWeight:"700"
            },
            h3: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 20,
                fontWeight:"700"
            },
            h4: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 20,
                fontWeight:"700"
            },
            h5: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 24,
                fontWeight:"700"
            },

            title: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 20,
                fontWeight:"700"
            },
            subtitle1: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 16,
                fontWeight:"500"
            },
            body1: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 14,
                fontWeight:"500"
            },
            body2: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 6,
            },
        },
    };
};

// context for color mode

export const ColorModeContext = createContext({
    toggleColorMode: () => {},
});
export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, colorMode];
};
