import {
    createStore as reduxCreateStore,
    applyMiddleware,
    combineReducers
} from "redux";
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import * as H from 'history';
import { UsersReducer } from "../users/reducers";
import { ItemsReducer } from "../items/reducers";
import { CategoriesReducer } from "../categories/reducers";
import { PaymentMethodsReducer } from "../paymentMethods/reducers";
import { MoneyInfoReducer } from "../moneyInfos/reducers";

export default function createStore(history: H.History) {
    const middleWares = [routerMiddleware(history), thunk];
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            users: UsersReducer,
            items: ItemsReducer,
            categories: CategoriesReducer,
            payment_methods: PaymentMethodsReducer,
            money_info: MoneyInfoReducer
        }),
        applyMiddleware(
            ...middleWares
        )
    );
}