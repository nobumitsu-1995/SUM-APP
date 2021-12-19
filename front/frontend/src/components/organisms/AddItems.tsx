import { Grid, Paper, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFixedCostList, getIncomeList, getVariableCostList } from "../../reducks/categories/selectors";
import { categoryState } from "../../reducks/categories/type";
import { createItems } from "../../reducks/items/operations";
import { getExpensesList, getIncomeList as getPMIncomeList } from "../../reducks/paymentMethods/selectors";
import { PaymentMethodState } from "../../reducks/paymentMethods/type";
import { initialState } from "../../reducks/store/initialState";
import { getUserId } from "../../reducks/users/selectors";
import { Button, Input } from "../atoms";
import { SelectForm } from "../molecules";

const useStyles = makeStyles({
    button: {
        backgroundColor: "rgba(168,168,168,0.7)",
        height: "60px",
        lineHeight: "60px",
        fontSize: "50px",
        color: "white",
        '&:hover': {
            backgroundColor: "rgba(168,168,168,0.8)",
            cursor: "pointer",
        },
        '&:active': {
            backgroundColor: "rgba(168,168,168,1)",
        }
    },
    box: {
        width: "30vw",
        margin: "10px auto"
    }
});

const AddItems = () => {
    const classes = useStyles();
    const default_message = [{value: 0, name: "大分類を選択してください"}]
    const big_categories = [
        { value: "fixed_cost", name: "固定費" },
        { value: "variable_cost", name: "変動費" },
        { value: "income", name: "収入" }
    ];
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const uid = getUserId(selector);
    const [number, setNumber] = useState([0]);
    const [currentItem, setCurrentItem] = useState([initialState.items]);
    const [categories, setCategories] = useState(default_message);
    const [paymentMethods, setPaymentMethods] = useState(default_message);
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, n: number) => {
        const {name, value} = event.target;
        const arr = currentItem.map((item, index) => {
            if (n === index) {
                return {...item, [name]: value}
            } else {
                return item
            }
        })
        setCurrentItem(arr);
    }
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
    const moldingArray = (array: categoryState[] | PaymentMethodState[]) => {
        return array.map(elm => {
            return {value: Number(elm.id), name: elm.name}
        })
    }

    const addList = () => {
        const arr = Array(number[number.length - 1] + 2).fill(0).map((v, i) => i)
        console.log(arr);
        setNumber(arr);
        currentItem.push(initialState.items)
    }

    const fixed_costs = moldingArray(getFixedCostList(selector));
    const variable_costs = moldingArray(getVariableCostList(selector));
    const incomes = moldingArray(getIncomeList(selector));
    const expenses = moldingArray(getExpensesList(selector));
    const PMincomes = moldingArray(getPMIncomeList(selector));

    return (
        <>
            <div className={classes.box}>
                <SelectForm name="big_category" label={"大分類"} datas={big_categories} disabled={null} onChange={changeFormDatas} />
            </div>
            {number.map(n => {
                return (
                    <Paper style={{padding: 10, margin: 10}}>
                        <Grid container spacing={1} justifyContent="space-around" alignItems="center">
                            <Grid item>
                                <SelectForm value={currentItem[n].category_id} name="category_id" label={"小分類"} datas={categories} disabled={null} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, n)} />    
                            </Grid>
                            <Grid item>
                                <Input name="name" label={"収支内容"} value={currentItem[n].name} type={"string"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, n)}/>
                            </Grid>
                            <Grid item>
                                <Input name="price" label={"値段"} value={currentItem[n].price} placeholder={"¥"} type={"number"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, n)}/>
                            </Grid>
                            <Grid item>
                                <Input name="date" label={"収支発生日"} value={currentItem[n].date} type={"date"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, n)} />
                            </Grid>
                            <Grid item>
                                <SelectForm value={currentItem[n].payment_method_id} name="payment_method_id" label={"支払方法"} datas={paymentMethods} disabled={"disabled"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, n)} />
                            </Grid>
                            <Grid item xs={window.outerWidth < 426 ? 11 : "auto"} >
                                <TextField
                                    name="note"
                                    label="備考"
                                    multiline
                                    rows={3}
                                    defaultValue={currentItem[n].note}
                                    variant="outlined"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, n)}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                );
            })}
            <div onClick={addList} className={classes.button}>+</div>
            <div className={classes.box}>
                <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    fullWidth={true}
                    onClick={() => dispatch(createItems(uid, currentItem))}
                >
                    Create
                </Button>
            </div>
        </>
        
    );
}

export default AddItems;