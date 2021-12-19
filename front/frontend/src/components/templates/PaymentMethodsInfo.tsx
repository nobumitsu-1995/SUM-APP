import { MonetizationOn } from "@mui/icons-material";
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import { getCustumList, getDefaultList } from "../../reducks/paymentMethods/selectors";
import { ItemMenu, List } from "../molecules";
import Card from "../molecules/Card";
import PaymentMethodsForm from "../organisms/PaymentMethodsForm";

const PaymentMEthodsInfo = () => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const defaultList = getDefaultList(selector);
    const custumList = getCustumList(selector);

    return (
        <Card
            color="gold"
            title={"支払方法"}
            action={<ItemMenu edit={() => dispatch(push('/user/edit'))} />}
        >
            <MonetizationOn/>
            <Switch>
                <Route path="*/edit">
                    <div style={{marginBottom: 10}}>
                        <PaymentMethodsForm formType="create"/>
                    </div>
                    <div style={{marginTop: 10}}>
                        <List 
                            title="カスタム支払方法"
                            contents={custumList}
                            listType="payment_method"
                        />
                    </div>
                </Route>
                <Route path="*/payment_method/:paymentMethodId">
                    <div style={{marginBottom: 10}}>
                        <PaymentMethodsForm formType="edit"/>
                    </div>
                    <div style={{marginTop: 10}}>
                        <List 
                            title="カスタム支払方法"
                            contents={custumList}
                            listType="payment_method"
                        />
                    </div>
                </Route>
                <Route path="*">
                    <div style={{marginBottom: 10}}>
                        <List 
                            title="デフォルト支払方法"
                            contents={defaultList}
                            listType="payment_method"
                        />
                    </div>
                    <div style={{marginTop: 10}}>
                        <List 
                            title="カスタム支払方法"
                            contents={custumList}
                            listType="payment_method"
                        />
                    </div>
                </Route>
            </Switch>
        </Card>
    );
}

export default PaymentMEthodsInfo;