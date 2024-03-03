import { useContext } from "react";
import CustomerTable from "./table";
import viteLogo from "/vite.svg";
import themeContext from "./DataContext";

export default function Homepage() {
    const themee=useContext(themeContext);

  return (
    <>
       <div className={`text-${themee==="light"?"dark":"light"}   p-5`} >
        Hello world
      </div> 


      
       <div className="m-5">
        <a target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <CustomerTable></CustomerTable>
      </div> 
    </>
  );
}
