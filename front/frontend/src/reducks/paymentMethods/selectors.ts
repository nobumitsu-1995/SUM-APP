import { createSelector } from "reselect";


const paymentMethodsSelector = (state: any) => state.payment_methods;

export const getDefaultList = createSelector(
    [paymentMethodsSelector],
    state => state.default_list
);

export const getCustumList = createSelector(
    [paymentMethodsSelector],
    state => state.custum_list
);

export const getExpensesList = createSelector(
    [paymentMethodsSelector],
    state => state.expenses
);

export const getIncomeList = createSelector(
    [paymentMethodsSelector],
    state => state.incomes
);