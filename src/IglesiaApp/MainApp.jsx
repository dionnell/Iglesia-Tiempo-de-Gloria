import { Navigate, Route, Routes } from "react-router-dom";
import { Ubicaciones, NavBar, HomePage } from "./";

export const MainApp = () => {
 
 
 
    return (
      <>
          <NavBar/>
      
          <Routes>
            
            <Route path="/" element={<HomePage/>} />
            <Route path="ubicaciones" element={<Ubicaciones/>} />
            <Route path="/*" element={<Navigate to="/"/>} />

          </Routes>
          <footer>
            <br /><br /><br />  
            
          </footer>      
      </>
  )
}
