import "./App.css";
import Navbar from "./component/navbar";
import {  useState } from "react";
import Homepage from "./component/home";
import themeContext from "./component/DataContext";


function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  };

  return (
    <themeContext.Provider value={theme}>
      <div className="container">
        <Navbar changeTheme={changeTheme}></Navbar>
        <Homepage></Homepage>
      </div>
    </themeContext.Provider>
  );
}

export default App;
