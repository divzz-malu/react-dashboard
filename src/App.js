import { useEffect, useState } from "react";
import Header from "./containers/Header/Header";
import Sidebar from "./containers/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import { ColorModeContext, useMode } from "./theme";
import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import { AppContext } from './AppContext';

function App() {
    const [theme, colorMode] = useMode();
    const [expanded, setExpanded] = useState(false);
    console.log(expanded,"ex");
    // function handleToggle(){
    //   setExpanded(!expanded)
    // }
    // useEffect(() =>{
    //   setExpanded(expanded)
    // },[expanded])
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
                {/* <AppContext.Provider value={{data:expanded,handleData:setExpanded}}> */}
                <div className="App">
                        <Sidebar toggleData={handleClose} expanded={expanded} />
                        {/* <Header expanded={expanded} toggleData={handleToggle} /> */}
                        <Header toggleData={handleExpand} expanded={expanded} />
                        <Dashboard />
                </div>
                {/* </AppContext.Provider> */}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
