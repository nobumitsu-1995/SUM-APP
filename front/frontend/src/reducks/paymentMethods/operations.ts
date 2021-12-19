import client from "../axios";
import { Dispatch, ReducersMapObject, StateFromReducersMapObject } from "redux";
import { createPaymentMethodAction, setPaymentMethodsAction } from "./actions";
import { PaymentMethodState } from "./type";
import { push as pushTo } from 'connected-react-router';

export const translateIncome = (income: boolean) => {
    return income ? "収入" : "支出"
}

export const getPaymentMethods = (user_id: string | undefined) => {
    return async (dispatch: Dispatch) => {
        await client.get(`/${user_id}/payment_methods`)
        .then(resp => {
            const default_list = resp.data.filter((payment_method: PaymentMethodState) => !payment_method.user_id);
            const custum_list = resp.data.filter((payment_method: PaymentMethodState) => payment_method.user_id);
            const incomes = resp.data.filter((payment_method: PaymentMethodState) => payment_method.income);
            const expenses = resp.data.filter((payment_method: PaymentMethodState) => !payment_method.income);
            dispatch(setPaymentMethodsAction({
                incomes: incomes,
                expenses: expenses,
                default_list: default_list,
                custum_list: custum_list
            }))
        })
    }
}

export const createPaymentMethod = (user_id: string, payment_method: PaymentMethodState) => {
    return async (dispatch: Dispatch, getState: () => StateFromReducersMapObject<ReducersMapObject<any, any>>) => {
        await client.post(`/${user_id}/payment_methods`, {
            payment_method: {
                name: payment_method.name,
                income: payment_method.income,
                user_id: user_id
            }
        })
        .then(resp => {
            const custum_list = getState().payment_methods.custum_list
            custum_list.push(resp.data)
            if (resp.data.income) {
                const incomes = getState().payment_methods.incomes
                incomes.push(resp.data)
                dispatch(createPaymentMethodAction({
                    custum_list: custum_list,
                    incomes: incomes,
                }))
            } else {
                const expenses = getState().payment_methods.expenses
                expenses.push(resp.data)
                dispatch(createPaymentMethodAction({
                    custum_list: custum_list,
                    expenses: expenses,
                }))
            }
            dispatch(pushTo('/user'))
        })
    }
}

export const deletePaymentMethod = (user_id: string, payment_method_id: number, income: boolean) => {
    return async (dispatch: Dispatch, getState: () => StateFromReducersMapObject<ReducersMapObject<any, any>>) => {
        await client.delete(`/${user_id}/payment_methods/${payment_method_id}`)
        .then(() => {
            const custum_list = getState().categories.custum_list.filter((payment_method: PaymentMethodState) => payment_method.id !== payment_method_id)
            if (income) {
                const incomes = getState().payment_methods.incomes.filter((payment_method: PaymentMethodState) => payment_method.id !== payment_method_id)
                dispatch(createPaymentMethodAction({
                    custum_list: custum_list,
                    incomes: incomes,
                }))
            } else {
                const expenses = getState().payment_methods.expenses.filter((payment_method: PaymentMethodState) => payment_method.id !== payment_method_id)
                dispatch(createPaymentMethodAction({
                    custum_list: custum_list,
                    expenses: expenses,
                }))
            }
            dispatch(pushTo('/user'))
        })
    }
}

export const updatePaymentMethod = (user_id: string, payment_method: PaymentMethodState) => {
    return async (dispatch: Dispatch, getState: () => StateFromReducersMapObject<ReducersMapObject<any, any>>) => {
        await client.patch(`/${user_id}/payment_methods/${payment_method.id}`, {
            payment_method: {
                name: payment_method.name,
                income: payment_method.income,
                user_id: user_id
            }
        })
        .then(resp => {
            const custum_list = getState().payment_methods.custum_list.filter((payment_method: PaymentMethodState) => payment_method.id !== resp.data.id)
            custum_list.push(resp.data)
            if (resp.data.income) {
                const incomes = getState().payment_methods.incomes.filter((payment_method: PaymentMethodState) => payment_method.id !== resp.data.id)
                incomes.push(resp.data)
                dispatch(createPaymentMethodAction({
                    custum_list: custum_list,
                    incomes: incomes,
                }))
            } else {
                const expenses = getState().payment_methods.expenses.filter((payment_method: PaymentMethodState) => payment_method.id !== resp.data.id)
                expenses.push(resp.data)
                dispatch(createPaymentMethodAction({
                    custum_list: custum_list,
                    expenses: expenses,
                }))
            }
            dispatch(pushTo('/user'))
        })
    }
}