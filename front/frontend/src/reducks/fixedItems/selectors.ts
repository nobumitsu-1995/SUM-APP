import { createSelector } from "reselect";

const fixedCostsSelector = (state: any) => state.fixed_costs;

export const getFixedCosts = createSelector(
    [fixedCostsSelector],
    state => state
);