import { initialState } from "../store/initialState"
import * as Actions from './actions'
import { PaymentMethodAction } from "./type"

export const PaymentMethodsReducer = (state = [{...initialState.payment_methods}], action: PaymentMethodAction) => {
    switch(action.type) {
        case Actions.SET_PAYMENTMETHODS:
            return {
                ...action.payload
            }
        case Actions.UPDATE_PAYMENTMETHOD:
            return {
                ...action.payload
            }
        case Actions.DELETE_PAYMENTMETHOD:
            return {
                ...action.payload
            }
        case Actions.CREATE_PAYMENTMETHOD:
            return {
                ...state, ...action.payload
            }
        default:
            return state
    }
}