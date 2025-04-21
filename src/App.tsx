import './App.css'
import {Outlet} from "react-router-dom";
import {Menu} from "./components/menu/Menu.tsx";
function App() {


  return (
    <div >
        <Menu></Menu>

   <h3>This is app component</h3>

        <Outlet/>
    </div>
  )
}

export default App
