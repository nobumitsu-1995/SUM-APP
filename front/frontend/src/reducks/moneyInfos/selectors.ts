import { createSelector } from "reselect";

const moneyInfoSelector = (state: any) => state.money_info;

export const getTotalAssets = createSelector(
    [moneyInfoSelector],
    state => state.total_assets
);

export const getTargetAmount = createSelector(
    [moneyInfoSelector],
    state => state.target_amount
);

export const getDeadline = createSelector(
    [moneyInfoSelector],
    state => state.deadline
);

export const getMonthlyBudget = createSelector(
    [moneyInfoSelector],
    state => state.monthly_budget
)