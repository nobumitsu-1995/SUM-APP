import { categoriesState } from "./type";


export const SET_CATEGORIES = "SET_CATEGORIES";
export const setCategoriesAction = (categories: categoriesState) => {
    return {
        type: "SET_CATEGORIES",
        payload: categories
    }
}

export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const updateCategoryAction = (categories: categoriesState) => {
    return {
        type: "UPDATE_CATEGORY",
        payload: categories
    }
}

export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const deleteCategoryAction = (categories: categoriesState) => {
    return {
        type: "DELETE_CATEGORY",
        payload: categories
    }
}

export const CREATE_CATEGORY = "CREATE_CATEGORY";
export const createCategoryAction = (categories: categoriesState) => {
    return {
        type: "CREATE_CATEGORY",
        payload: categories
    }
}