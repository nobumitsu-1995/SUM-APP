import { push } from "connected-react-router"
import { Dispatch, ReducersMapObject, StateFromReducersMapObject } from "redux"
import client from "../axios"
import { createFixedCostAction, deleteFixedCostAction, setFixedCostsAction, updateFixedCostAction } from "./actions"
import { fixedCostState } from "./type"

export const getFixedCosts = (user_id?: string) => {
    return async (dispatch: Dispatch) => {
        await client.get(`/${user_id}/fixed_costs`)
        .then(resp => {
            dispatch(setFixedCostsAction(resp.data));
        })
    }
}

export const createFixedCost = (user_id: string, fixed_cost: fixedCostState) => {
    return async (dispatch: any) => {
        await client.post(`/${user_id}/fixed_costs`, {
            fixed_cost: {
                scheduled_date: fixed_cost.scheduled_date,
                category_id: fixed_cost.category_id,
                name: fixed_cost.name,
                price: fixed_cost.price,
                payment_method_id: fixed_cost.payment_method_id,
                note: fixed_cost.note,
                user_id: user_id
            }
        })
        .then(resp => {
            dispatch(createFixedCostAction([resp.data]));
            dispatch(push('/items'));
        })
        .catch(e => {
            alert("必要事項を入力してください");
        });
    }
}

export const deleteFixedCost = (user_id: string, fixed_cost_id: number) => {
    return async (dispatch: Dispatch, getState: () => StateFromReducersMapObject<ReducersMapObject<any, any>>) => {
        await client.delete(`/${user_id}/fixed_costs/${fixed_cost_id}`)
        .then(() => {
            const prevFixedCosts = getState().fixed_costs;
            const nextFixedCosts = prevFixedCosts.filter((fixed_cost: fixedCostState) => fixed_cost.id !== fixed_cost_id);
            dispatch(deleteFixedCostAction(nextFixedCosts));
            dispatch(push('/items'));
        })
        .catch(e => {
            alert("必要事項を入力してください");
        });
    }
}

export const updateFixedCost = (user_id: string, fixed_cost: fixedCostState) => {
    return async (dispatch: any, getState: () => StateFromReducersMapObject<ReducersMapObject<any, any>>) => {
        await client.patch(`/${user_id}/fixed_costs/${fixed_cost.id}`, {
            fixed_cost: {
                scheduled_date: fixed_cost.scheduled_date,
                category_id: fixed_cost.category_id,
                name: fixed_cost.name,
                price: fixed_cost.price,
                payment_method_id: fixed_cost.payment_method_id,
                note: fixed_cost.note,
                user_id: user_id
            }
        })
        .then(resp => {
            const prevFixedCosts = getState().fixed_costs
            const nextFixedCosts = prevFixedCosts.filter((prevFixedCost: fixedCostState) => prevFixedCost.id !== fixed_cost.id)
            nextFixedCosts.push(resp.data)
            dispatch(updateFixedCostAction(nextFixedCosts));
            dispatch(push('/items'));
        })
        .catch(e => {
            alert("必要事項を入力してください");
        });
    }
}