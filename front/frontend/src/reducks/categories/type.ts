export type categoryState = {
    id: number;
    name: string;
    big_category: string;
    user_id?: string;
}
            
export type categoriesState = {
    fixed_costs?: categoryState[];
    variable_costs?: categoryState[];
    incomes?: categoryState[];
    default_list?: categoryState[];
    custum_list: categoryState[];
}

export type categoryAction = {
    type: string;
    payload: categoriesState[];
}