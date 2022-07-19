import React from 'react';
import {Link, Outlet, useOutlet} from "react-router-dom";
import clsx from "clsx";
import './home.scss';

export const Home = () => {
    const location = useOutlet();
    const tab = location.props.children.props.value.matches[1].route.path;
    return (
        <div className="home">
            <div className="home-tabs">
                <h3 className={clsx({active:tab === ''})}>
                    <Link to={""}>Главная</Link></h3>
                <h3 className={clsx({active:tab === 'mycards'})}>
                    <Link to={"mycards"}>Мои карты</Link></h3>
            </div>
            <div className="home-block">
                <Outlet />
            </div>
        </div>
    );
};