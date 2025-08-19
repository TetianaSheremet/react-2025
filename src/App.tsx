import './App.css'
import {Outlet} from "react-router-dom";
import {MenuComponent} from "./components/menu/MenuComponent.tsx";

function App() {

  return (
      <>
          <MenuComponent/>
          <Outlet/>
      </>
  )
}

export default App
