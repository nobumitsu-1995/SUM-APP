import { PaymentMethodsState } from "./type";


export const SET_PAYMENTMETHODS = "SET_PAYMENTMETHODS";
export const setPaymentMethodsAction = (paymentMethods: PaymentMethodsState) => {
    return {
        type: "SET_PAYMENTMETHODS",
        payload: paymentMethods
    }
}

export const UPDATE_PAYMENTMETHOD = "UPDATE_PAYMENTMETHOD";
export const updatePaymentMethodAction = (paymentMethods: PaymentMethodsState) => {
    return {
        type: "UPDATE_PAYMENTMETHOD",
        payload: paymentMethods
    }
}

export const DELETE_PAYMENTMETHOD = "DELETE_PAYMENTMETHOD";
export const deletePaymentMethodAction = (paymentMethods: PaymentMethodsState) => {
    return {
        type: "DELETE_PAYMENTMETHOD",
        payload: paymentMethods
    }
}

export const CREATE_PAYMENTMETHOD = "CREATE_PAYMENTMETHOD";
export const createPaymentMethodAction = (paymentMethods: PaymentMethodsState) => {
    return {
        type: "CREATE_PAYMENTMETHOD",
        payload: paymentMethods
    }
}