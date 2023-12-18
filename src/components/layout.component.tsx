import React from "react";
import HeaderComponent from "./header.component";
import {Outlet} from 'react-router-dom'

const LayoutComponent: React.FC = () => {
    return (
        <>
            <HeaderComponent/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default LayoutComponent;