import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { createPaymentMethod, updatePaymentMethod } from "../../reducks/paymentMethods/operations";
import { getCustumList } from "../../reducks/paymentMethods/selectors";
import { PaymentMethodState } from "../../reducks/paymentMethods/type";
import { initialPaymentMethodState } from "../../reducks/store/initialState";
import { getUserId } from "../../reducks/users/selectors";
import { Button, Input } from "../atoms";
import { SelectForm } from "../molecules";

type Props = {
    formType: "create" | "edit";
}

const PaymentMethodsForm: React.FC<Props> = props => {
    const [currentPaymentMethod, setCurrentPaymentMethod] = useState(initialPaymentMethodState);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setCurrentPaymentMethod({...currentPaymentMethod, [name]: value});
    }
    const { paymentMethodId } = useParams<{paymentMethodId? :string}>();
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const uid = getUserId(selector);
    const custumList = getCustumList(selector);
    const onClickFunc = () => {
        switch (props.formType) {
            case "create":
                dispatch(createPaymentMethod(uid, currentPaymentMethod))
            break
            case "edit":
                dispatch(updatePaymentMethod(uid, currentPaymentMethod))
            break
        }
    }

    useEffect(() => {
        if (props.formType === "edit") {
            const paymentMethod = custumList.find((paymentMethod: PaymentMethodState) => {
                return paymentMethod.id === Number(paymentMethodId)
            })
            setCurrentPaymentMethod(paymentMethod)
        } else {
            setCurrentPaymentMethod(initialPaymentMethodState)
        }
    }, [paymentMethodId])

    return (
        <form>
            <Grid container spacing={2}>
                <Grid item>
                    <SelectForm
                        value={currentPaymentMethod.income}
                        name="income"
                        datas={[{value: true, name: "収入"}, {value: false, name: "支出"}]}
                        label="収支"
                        onChange={handleInputChange}
                        disabled={null}
                    />
                </Grid>
                <Grid item xs={8}>
                    <Input
                        name="name"
                        label="支払方法名"
                        placeholder="Name"
                        type="string"
                        value={currentPaymentMethod.name}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        color="primary"
                        variant="contained"
                        size="medium"
                        fullWidth={true}
                        onClick={() => {
                            onClickFunc();
                        }}
                    >
                        {props.formType === "create" ? "CREATE" : "UPDATE"}
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default PaymentMethodsForm;