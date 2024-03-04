import "./App.css";
import Navbar from "./component/navbar";
import {  useState } from "react";
import Homepage from "./component/home";
import themeContext from "./component/DataContext";


function App() {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  };

  return (
    <div className={`p-5 bg-${theme} `}
    style={{
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
      minHeight: "100vh",
    }}>
    <themeContext.Provider value={theme}>
      
        <Navbar changeTheme={changeTheme}></Navbar>
        <Homepage></Homepage>
      
    </themeContext.Provider>
    </div>
  );
}

export default App;
