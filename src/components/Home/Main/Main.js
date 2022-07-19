import React from 'react';
import './main.scss';

export const Main = () => {
    return (
        <section className="main">
            <div className="main-cards">
                <div>
                    <h1>
                        Банковские карты
                    </h1>
                    <span>00</span>
                </div>
                <div>
                    <h1>
                        Клубные карты
                    </h1>
                    <span>00</span>
                </div>
            </div>
            <div className="main-news">
                <h1>Новости о Sumsung Pay</h1>
                <div>
                    Новости о Sumsung Pay
                </div>
            </div>
            <div className="main-transactions">
                <h1>Денежные переводы</h1>
                <div>
                    <img src="" alt=""/>
                    <p>Простой и безопасный перевод денег</p>
                </div>
            </div>
        </section>
    );
};