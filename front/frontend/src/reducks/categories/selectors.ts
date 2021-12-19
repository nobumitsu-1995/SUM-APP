import { createSelector } from "reselect";


const categoriesSelector = (state: any) => state.categories;

export const getDefaultList = createSelector(
    [categoriesSelector],
    state => state.default_list
);

export const getCustumList = createSelector(
    [categoriesSelector],
    state => state.custum_list
);

export const getFixedCostList = createSelector(
    [categoriesSelector],
    state => state.fixed_costs
);

export const getVariableCostList = createSelector(
    [categoriesSelector],
    state => state.variable_costs
);

export const getIncomeList = createSelector(
    [categoriesSelector],
    state => state.incomes
);