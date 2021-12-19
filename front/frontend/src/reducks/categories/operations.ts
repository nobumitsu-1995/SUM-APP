import client from "../axios"
import { Dispatch, ReducersMapObject, StateFromReducersMapObject } from "redux"
import { createCategoryAction, setCategoriesAction } from "./actions"
import { categoryState } from "./type"
import { push as pushTo } from 'connected-react-router';


export const getCategories = (user_id: string | undefined) => {
    return async (dispatch: Dispatch) => {
        await client.get(`/${user_id}/categories`)
        .then(resp => {
            const default_list = resp.data.filter((category: categoryState) => !category.user_id);
            const custum_list = resp.data.filter((category: categoryState) => category.user_id);
            const fixed_costs = resp.data.filter((category: categoryState) => category.big_category === "fixed_cost");
            const variable_costs = resp.data.filter((category: categoryState) => category.big_category === "variable_cost");
            const incomes = resp.data.filter((category: categoryState) => category.big_category === "income");
            dispatch(setCategoriesAction({
                fixed_costs: fixed_costs,
                variable_costs: variable_costs,
                incomes: incomes,
                default_list: default_list,
                custum_list: custum_list
            }))
        })
    }
}

export const createCategory = (user_id: string, category: categoryState) => {
    return async (dispatch: Dispatch, getState: () => StateFromReducersMapObject<ReducersMapObject<any, any>>) => {
        await client.post(`/${user_id}/categories`, {
            category: {
                name: category.name,
                big_category: category.big_category,
                user_id: user_id
            }
        })
        .then(resp => {
            const custum_list = getState().categories.custum_list
            custum_list.push(resp.data)
            switch (resp.data.big_category) {
                case 'fixed_cost':
                    const fixed_costs = getState().categories.fixed_costs
                    fixed_costs.push(resp.data)
                    dispatch(createCategoryAction({
                        custum_list: custum_list,
                        fixed_costs: fixed_costs,
                    }))
                break
                case 'variable_cost':
                    const variable_costs = getState().categories.variable_costs
                    variable_costs.push(resp.data)
                    dispatch(createCategoryAction({
                        custum_list: custum_list,
                        variable_costs: variable_costs,
                    }))
                break
                case 'income':
                    const incomes = getState().categories.incomes
                    incomes.push(resp.data)
                    dispatch(createCategoryAction({
                        custum_list: custum_list,
                        incomes: incomes,
                    }))
                break
            }
            dispatch(pushTo('/user'))
        })
    }
}

export const deleteCategory = (user_id: string, category_id: number, big_category: string) => {
    return async (dispatch: Dispatch, getState: () => StateFromReducersMapObject<ReducersMapObject<any, any>>) => {
        await client.delete(`/${user_id}/categories/${category_id}`)
        .then(() => {
            const custum_list = getState().categories.custum_list.filter((category: categoryState) => category.id !== category_id)
            switch (big_category) {
                case 'fixed_cost':
                    const fixed_costs = getState().categories.fixed_costs.filter((category: categoryState) => category.id !== category_id)
                    return dispatch(createCategoryAction({
                        custum_list: custum_list,
                        fixed_costs: fixed_costs,
                    }))
                case 'variable_cost':
                    const variable_costs = getState().categories.variable_costs.filter((category: categoryState) => category.id !== category_id)
                    return dispatch(createCategoryAction({
                        custum_list: custum_list,
                        variable_costs: variable_costs,
                    }))
                case 'income':
                    const incomes = getState().categories.incomes.filter((category: categoryState) => category.id !== category_id)
                    return dispatch(createCategoryAction({
                        custum_list: custum_list,
                        incomes: incomes,
                    }))
            }
            dispatch(pushTo('/user'))
        })
    }
}

export const updateCategory = (user_id: string, category: categoryState) => {
    return async (dispatch: Dispatch, getState: () => StateFromReducersMapObject<ReducersMapObject<any, any>>) => {
        await client.patch(`/${user_id}/categories/${category.id}`, {
            category: {
                name: category.name,
                big_category: category.big_category,
                user_id: user_id
            }
        })
        .then(resp => {
            const custum_list = getState().categories.custum_list.filter((category: categoryState) => category.id !== resp.data.id)
            custum_list.push(resp.data)
            switch (resp.data.big_category) {
                case 'fixed_cost':
                    const fixed_costs = getState().categories.fixed_costs.filter((category: categoryState) => category.id !== resp.data.id)
                    fixed_costs.push(resp.data)
                    return dispatch(createCategoryAction({
                        custum_list: custum_list,
                        fixed_costs: fixed_costs,
                    }))
                case 'variable_cost':
                    const variable_costs = getState().categories.variable_costs.filter((category: categoryState) => category.id !== resp.data.id)
                    variable_costs.push(resp.data)
                    return dispatch(createCategoryAction({
                        custum_list: custum_list,
                        variable_costs: variable_costs,
                    }))
                case 'income':
                    const incomes = getState().categories.incomes.filter((category: categoryState) => category.id !== resp.data.id)
                    incomes.push(resp.data)
                    return dispatch(createCategoryAction({
                        custum_list: custum_list,
                        incomes: incomes,
                    }))
            }
            dispatch(pushTo('/user'))
        })
    }
}