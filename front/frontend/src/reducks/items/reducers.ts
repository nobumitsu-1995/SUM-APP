import { initialState } from "../store/initialState";
import * as Actions from './actions'
import { itemAction } from "./type";

export const ItemsReducer = (state = [{...initialState.items}], action: itemAction) => {
    switch(action.type) {
        case Actions.SET_ITEMS:
            return [
                ...action.payload
            ]
        case Actions.UPDATE_ITEM:
            return [
                ...action.payload
            ]
        case Actions.DELETE_ITEM:
            return [
                ...action.payload
            ]
        case Actions.CREATE_ITEM:
            return [
                ...state, ...action.payload
            ]
        default:
            return state
    }
}