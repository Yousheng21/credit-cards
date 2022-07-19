import React from 'react';
import './header.scss';

export const Header = () => {
    return (
        <section className="header">
            <div className="header-logo">
                <h1>SUMSUNG PAY</h1>
            </div>
            <div className="header-acc">
                <img src="/credit-cards/assets/images/icons/account.svg" alt="account"/>
            </div>
        </section>
    );
};