export type moneyInfoState = {
    total_assets: number;
    target_amount: number;
    deadline: string;
    user_id: string;
    monthly_budget: number
}

export type MoneyInfoAction = {
    type: string;
    payload: moneyInfoState[];
}