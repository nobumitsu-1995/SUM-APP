
export const initialCategoryState = {
    id: 0,
    name: "",
    user_id: "",
    big_category: "fixed_cost",
}

export const initialPaymentMethodState = {
    id: 0,
    name: "",
    income: false,
    user_id: "",
}

export const initialState = {
    users: {
        isSignedIn: false,
        icon: "",
        uid: "",
        username: ""
    },
    money_infos: {
        total_assets: 0,
        target_amount: 0,
        deadline: "",
        user_id: "",
        monthly_budget: 0,
    },
    categories: {
        fixed_costs: [initialCategoryState],
        variable_costs: [initialCategoryState],
        incomes: [initialCategoryState],
        default_list: [initialCategoryState],
        custum_list: [initialCategoryState],
    },
    payment_methods: {
        incomes: [initialPaymentMethodState],
        expenses: [initialPaymentMethodState],
        default_list: [initialPaymentMethodState],
        custum_list: [initialPaymentMethodState]
    },
    items: {
        id: 0,
        date: "",
        category_id: 0,
        name: "",
        price: 0,
        payment_method_id: 0,
        note: "",
        user_id: "",
        category: {id: 0, name: "", big_category: ""},
        payment_method: {id: 0, name: "", income: false}
    }
}
