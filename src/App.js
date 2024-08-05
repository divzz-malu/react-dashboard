import { useState } from "react";
import Header from "./containers/Header/Header";
import Sidebar from "./containers/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
    const [theme, colorMode] = useMode();
    const [expanded, setExpanded] = useState(false);
    console.log(expanded,"ex");
    function handleExpand(){
      setExpanded(true)
    }
    function handleClose(){
      setExpanded(false)
    }
    console.log("expa",expanded)
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="App">
                        <Sidebar toggleData={handleClose} expanded={expanded} />
                        <Header toggleData={handleExpand} expanded={expanded} />
                        <Dashboard />
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
