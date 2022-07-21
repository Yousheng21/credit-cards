import React, {useEffect} from 'react';
import './main.scss';
import {useDispatch, useSelector} from "react-redux";
import {displayCount} from "../../../utils/logic";
import {getCards} from "../../../redux/actions/actionCards";

export const Main = () => {
    const dispatch = useDispatch();
    const cards = useSelector(state => state.cards.array);

    useEffect(() => {
        if (!cards) dispatch(getCards());
    }, [cards])

    return (
        <section className="main">
            <div className="main-cards">
                <div>
                    <h1>
                        Банковские карты
                    </h1>
                    <span>{displayCount(cards?.length)}</span>
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