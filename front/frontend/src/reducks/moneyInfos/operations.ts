import client from "../axios"
import { push } from "connected-react-router"
import { Dispatch, ReducersMapObject, StateFromReducersMapObject } from "redux"
import { createMoneyInfoAction, setMoneyInfoAction, updateMoneyInfoAction } from "./actions"
import { moneyInfoState } from "./type"

export const getMoneyInfo = (user_id?: string) => {
    return async (dispatch: any) => {
        await client.get(`/${user_id}/money_info`)
        .then(resp => {
            dispatch(setMoneyInfoAction(
                resp.data
            ))
        })
        .catch(e => {
            dispatch(createMoneyInfo(user_id))
        })
    }
}

export const updateMoneyInfo = (user_id: string, money_info: moneyInfoState) => {
    return async (dispatch: Dispatch) => {
        await client.patch(`/${user_id}/money_info`, {
            money_info: {
                total_assets: money_info.total_assets,
                target_amount: money_info.target_amount,
                deadline: money_info.deadline,
                monthly_budget: money_info.monthly_budget
            }    
        })
        .then(resp => {
            dispatch(updateMoneyInfoAction(
                resp.data
            ));
            dispatch(push('/user'));
        })
    }
}

export const createMoneyInfo = (user_id?: string) => {
    return async (dispatch: Dispatch) => {
        const deadline = new Date();
        await client.post(`/${user_id}/money_info`, {
            money_info: {
                total_assets: 100000,
                target_amount: 1000000,
                deadline: deadline,
                monthly_budget: 200000,
                user_id: user_id
            }   
        })
        .then(resp => {
            dispatch(createMoneyInfoAction(
                resp.data
            ));
        })
    }
}

export const calculateTotalAssets = (user_id: string, price: number) => {
    return async (dispatch: Dispatch, getState: () => StateFromReducersMapObject<ReducersMapObject<any, any>>) => {
        const prev_total_assets = getState().money_info.total_assets
        const new_total_assets = prev_total_assets + price;
        await client.patch(`/${user_id}/money_info`, {
            money_info: {
                total_assets: new_total_assets
            }    
        })
        .then(resp => {
            dispatch(updateMoneyInfoAction(
                resp.data
            ));
        })
    }
}