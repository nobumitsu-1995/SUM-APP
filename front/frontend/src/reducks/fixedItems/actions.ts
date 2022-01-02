import { fixedCostState } from "./type";

export const SET_FIXED_COSTS = "SET_FIXED_COSTS";
export const setFixedCostsAction = (fixed_costs: fixedCostState[]) => {
    return {
        type: "SET_FIXED_COSTS",
        payload: fixed_costs
    }
};

export const UPDATE_FIXED_COST = "UPDATE_FIXED_COST";
export const updateFixedCostAction = (fixed_cost: fixedCostState[]) => {
    return {
        type: "UPDATE_FIXED_COST",
        payload: fixed_cost
    }
};

export const DELETE_FIXED_COST = "DELETE_FIXED_COST";
export const deleteFixedCostAction = (fixed_cost: fixedCostState[]) => {
    return {
        type: "DELETE_FIXED_COST",
        payload: fixed_cost
    }
};

export const CREATE_FIXED_COST = "CREATE_FIXED_COST";
export const createFixedCostAction = (fixed_cost: fixedCostState[]) => {
    return {
        type: "CREATE_FIXED_COST",
        payload: fixed_cost
    }
};