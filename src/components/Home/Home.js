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
                <Link to={""}>
                    <h3 className={clsx({active:tab === ''})}>Главная</h3>
                </Link>
                <Link to={"mycards"}>
                    <h3 className={clsx({active:tab === 'mycards'})}>Мои карты</h3>
                </Link>
            </div>
            <div className="home-block">
                <Outlet />
            </div>
        </div>
    );
};