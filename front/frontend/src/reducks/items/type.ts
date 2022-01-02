export type itemState = {
    id: number;
    date: string;
    scheduled_date?: undefined;
    category_id : number;
    category: {id: number, big_category: string, name: string};
    payment_method_id: number;
    payment_method: {id: number, name: string, income: boolean};
    name: string;
    price: number;
    note: string;
    user_id: string;
};

export type itemAction = {
    type: string;
    payload: itemState[];
}