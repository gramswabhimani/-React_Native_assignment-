import { BEARKINGBADCAST, SHOW_FAVORITE } from "../const"

const initialState = {

}

export const BreakingBadReducer = (state = initialState, action) => {
  switch (action.type) {
    case BEARKINGBADCAST:
      return { ...state, characters: action.characters }
    case SHOW_FAVORITE:
      console.log(`object`)
      return { ...state, showFavorite: !state.showFavorite }

    default:
      return state
  }
}


