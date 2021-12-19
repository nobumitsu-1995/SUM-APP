export type PaymentMethodState = {
    id: number;
    name: string;
    income: boolean;
    user_id?: string;
}

export type PaymentMethodsState = {
    incomes?: PaymentMethodState[];
    expenses?: PaymentMethodState[];
    default_list?: PaymentMethodState[];
    custum_list: PaymentMethodState[];
}

export type PaymentMethodAction = {
    type: string;
    payload: PaymentMethodsState;
}