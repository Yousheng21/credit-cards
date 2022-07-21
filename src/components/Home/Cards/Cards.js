import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCards} from "../../../redux/actions/actionCards";

import "./cards.scss";

export const Cards = () => {
    const dispatch = useDispatch();
    const cards = useSelector(state => state.cards.array);

    useEffect(() => {
        if (!cards) dispatch(getCards());
    }, [cards])

    if (!cards) return "Loading...";

    return (
        <div className="cards">
            {cards.length ? (
                cards.map((card) => <div key={card._id} className="cards-block" style={{backgroundImage:`url('/credit-cards/assets/images/bgCards/${card.img}.jpeg')`}}>
                    <div>{card.name}</div>
                    <div>{card.number}</div>
                </div>)
            ) : (
                <div className="cards-add">
                    <img src="/credit-cards/assets/images/icons/plus.svg" alt="plus" />
                </div>
            )}
        </div>
    );
};