export type fixedCostState = {
    id: number;
    date?: undefined; 
    scheduled_date: number;
    category_id : number;
    category: {id: number, big_category: string, name: string};
    payment_method_id: number;
    payment_method: {id: number, name: string, income: boolean};
    name: string;
    price: number;
    note: string;
    user_id: string;
};

export type fixedCostAction = {
    type: string;
    payload: fixedCostState[];
}