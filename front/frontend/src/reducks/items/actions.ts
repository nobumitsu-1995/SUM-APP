import { itemState } from "./type";

export const SET_ITEMS = "SET_ITEMS";
export const setItemsAction = (items: itemState[]) => {
    return {
        type: "SET_ITEMS",
        payload: items
    }
};

export const UPDATE_ITEM = "UPDATE_ITEM";
export const updateItemAction = (items: itemState[]) => {
    return {
        type: "UPDATE_ITEM",
        payload: items
    }
};

export const DELETE_ITEM = "DELETE_ITEM";
export const deleteItemAction = (items: itemState[]) => {
    return {
        type: "DELETE_ITEM",
        payload: items
    }
};

export const CREATE_ITEM = "CREATE_ITEM";
export const createItemAction = (item: itemState[]) => {
    return {
        type: "CREATE_ITEM",
        payload: item
    }
};