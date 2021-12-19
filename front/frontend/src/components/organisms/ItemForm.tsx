import { TextField, Typography } from "@material-ui/core";
import { AttachFile, Comment, MonetizationOn } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFixedCostList, getIncomeList, getVariableCostList } from "../../reducks/categories/selectors";
import { categoryState } from "../../reducks/categories/type";
import { createItem, updateItem } from "../../reducks/items/operations";
import { itemState } from "../../reducks/items/type";
import { getExpensesList, getIncomeList as getPMIncomeList } from "../../reducks/paymentMethods/selectors";
import { PaymentMethodState } from "../../reducks/paymentMethods/type";
import { initialState } from "../../reducks/store/initialState";
import { getUserId } from "../../reducks/users/selectors";
import { Button, Input } from "../atoms";
import { Card, SelectForm } from "../molecules";

type Props = {
    formType: "edit" | "create";
    item: itemState;
}

const ItemForm: React.FC<Props> = props => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const uid = getUserId(selector);
    const default_message = [{value: 0, name: "大分類を選択してください"}]
    const big_categories = [
        { value: "fixed_cost", name: "固定費" },
        { value: "variable_cost", name: "変動費" },
        { value: "income", name: "収入" }
    ];
    const [currentItem, setCurrentItem] = useState(initialState.items);
    const [categories, setCategories] = useState(default_message);
    const [paymentMethods, setPaymentMethods] = useState(default_message);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setCurrentItem({...currentItem, [name]: value});
    }

    const moldingArray = (array: categoryState[] | PaymentMethodState[]) => {
        return array.map(elm => {
            return {value: Number(elm.id), name: elm.name}
        })
    }

    const fixed_costs = moldingArray(getFixedCostList(selector));
    const variable_costs = moldingArray(getVariableCostList(selector));
    const incomes = moldingArray(getIncomeList(selector));
    const expenses = moldingArray(getExpensesList(selector));
    const PMincomes = moldingArray(getPMIncomeList(selector));

    const judgeFormDatas = (value: string) => {
        switch (value) {
            case "fixed_cost":
                setCategories(fixed_costs);
                setPaymentMethods(expenses);
            break;
            case "variable_cost":
                setCategories(variable_costs);
                setPaymentMethods(expenses);
            break;
            case "income":
                setCategories(incomes);
                setPaymentMethods(PMincomes);
            break;
        }
    }

    const changeFormDatas = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        judgeFormDatas(value);
    }

    const onClickFunc = () => {
        switch (props.formType) {
            case "create":
                dispatch(createItem(uid, currentItem));
            break;
            case "edit":
                dispatch(updateItem(uid, currentItem));
            break;
        }
    }

    useEffect(() => {
        if (props.formType === "edit") {
            judgeFormDatas(props.item.category.big_category)
            setCurrentItem(props.item)
        }
    }, [])

    return (
        
            <form>
                <div style={{margin: 10}}>
                    <Card color={"green"} title={"支出情報"}>
                        <AttachFile/>
                        <>
                            <Typography color="textSecondary">
                                {props.formType === "create" && <SelectForm name={"big_category"} label={"大分類"} datas={big_categories} disabled={null} onChange={changeFormDatas} />}
                                <SelectForm value={currentItem.category_id} name={"category_id"} label={"小分類"} datas={categories} disabled={null} onChange={handleInputChange} />
                            </Typography>
                            <Typography variant="h5" component="h2">
                                <Input name={"name"} label={"収支内容"} value={currentItem.name} type={"string"} onChange={handleInputChange}/>
                                <Input name={"price"} label={"値段"} value={currentItem.price} placeholder={"¥"} type={"number"} onChange={handleInputChange}/>
                            </Typography>
                            <Typography align="right" color="textSecondary">
                                <Input name={"date"} label={"収支発生日"} value={currentItem.date} type={"date"} onChange={handleInputChange} />
                            </Typography>
                        </>
                    </Card>
                </div>
                <div style={{margin: 10}}>
                    <Card color={"gold"}　title={"支払方法"}>
                        <MonetizationOn/>
                        <Typography>
                            <SelectForm value={currentItem.payment_method_id} name={"payment_method_id"} label={"支払方法"} datas={paymentMethods} disabled={"disabled"} onChange={handleInputChange} />
                        </Typography>
                    </Card>
                </div>
                <div style={{margin: 10}}>
                    <Card color="green"　title={"備考"}>
                        <Comment/>
                        <TextField
                            name="note"
                            label="備考"
                            multiline
                            rows={4}
                            defaultValue={currentItem.note}
                            variant="outlined"
                            onChange={handleInputChange}
                            fullWidth
                        />
                    </Card>
                </div>
                <div style={{margin: 10}}>
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
                </div>
            </form>
    );
}

export default ItemForm;