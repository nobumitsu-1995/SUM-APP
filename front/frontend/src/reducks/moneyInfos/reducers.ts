import { initialState } from "../store/initialState"
import * as Actions from './actions'
import { MoneyInfoAction } from "./type"

export const MoneyInfoReducer = (state = [{...initialState.categories}], action: MoneyInfoAction) => {
    switch(action.type) {
        case Actions.SET_MONEYINFO:
            return {
                state, ...action.payload
            }
        case Actions.UPDATE_MONEYINFO:
            return {
                state, ...action.payload
            }
        case Actions.CREATE_MONEYINFO:
            return {
                ...action.payload
            }
        default:
            return state
    }
}