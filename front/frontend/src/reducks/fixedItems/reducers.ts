import { initialState } from "../store/initialState";
import * as Actions from './actions';
import { fixedCostAction } from "./type";

export const FixedItemsReducer = (state = [{...initialState.fixed_costs}], action: fixedCostAction) => {
    switch(action.type) {
        case Actions.SET_FIXED_COSTS:
            return [
                ...action.payload
            ]
        case Actions.UPDATE_FIXED_COST:
            return [
                ...action.payload
            ]
        case Actions.DELETE_FIXED_COST:
            return [
                ...action.payload
            ]
        case Actions.CREATE_FIXED_COST:
            return [
                ...state, ...action.payload
            ]
        default:
            return state
    }
}