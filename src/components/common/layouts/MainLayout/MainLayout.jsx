import React from 'react';
import {Header} from "../../Header/Header";
import "./mainLayout.scss";

export const MainLayout = ({ children}) => {
    return (
        <div className="wrapper">
            <Header />
            <main className="wrapper-main">
                {children}
            </main>
        </div>
    );
};