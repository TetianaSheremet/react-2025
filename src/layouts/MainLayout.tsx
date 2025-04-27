import MenuComponent from "../components/menu/MenuComponent.tsx";

import {Outlet} from "react-router-dom";


export const MainLayout = () => {
    return (
        <div>
            Main Layout
            <MenuComponent/>
            <Outlet/>
        </div>
    );
};