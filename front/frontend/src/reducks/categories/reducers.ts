import { initialState } from "../store/initialState"
import * as Actions from './actions'
import { categoryAction } from "./type"

export const CategoriesReducer = (state = [{...initialState.categories}], action: categoryAction) => {
    switch(action.type) {
        case Actions.SET_CATEGORIES:
            return {
                ...action.payload
            }
        case Actions.UPDATE_CATEGORY:
            return {
                ...action.payload
            }
        case Actions.DELETE_CATEGORY:
            return {
                ...action.payload
            }
        case Actions.CREATE_CATEGORY:
            return {
                ...state, ...action.payload
            }
        default:
            return state
    }
}