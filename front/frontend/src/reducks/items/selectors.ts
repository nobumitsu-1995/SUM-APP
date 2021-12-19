import { createSelector } from "reselect";


const itemsSelector = (state: any) => state.items;

export const getItems = createSelector(
    [itemsSelector],
    state => state
);