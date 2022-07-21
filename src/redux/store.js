import {configureStore} from "@reduxjs/toolkit";
import cards from "./slices/CardsSlice";

const store = configureStore({
    reducer: {cards},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true,
})

export default store;