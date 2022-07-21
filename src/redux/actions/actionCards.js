import data from "../../utils/data.json";
import {initialize} from "../slices/CardsSlice";

export const getCards = () => dispatch => {
    const resp = data;
    dispatch(initialize(resp));
}