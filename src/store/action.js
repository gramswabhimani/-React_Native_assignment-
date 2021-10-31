import { BEARKINGBADCAST, SHOW_FAVORITE } from "../const";
import axios from 'axios';

export const breakingBad = () => async (dispatch, getState) => {

    const characters = await axios.get("https://www.breakingbadapi.com/api/characters")

    dispatch({ type: BEARKINGBADCAST, characters: characters?.data })
};

export const setfavchar = (index) => async (dispatch, getState) => {

    const state = getState().BBReducer?.characters?.map((character, i) =>
    (index === i ? {
        ...character,
        favorite: !character?.favorite,
    } : character)
    )
    dispatch({ type: BEARKINGBADCAST, characters: state })
}

export const showFavorite = () => {
    return { type: SHOW_FAVORITE }
}