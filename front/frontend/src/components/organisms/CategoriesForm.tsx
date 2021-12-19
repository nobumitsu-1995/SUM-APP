import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { createCategory, updateCategory } from "../../reducks/categories/operations";
import { getCustumList } from "../../reducks/categories/selectors";
import { categoryState } from "../../reducks/categories/type";
import { initialCategoryState } from "../../reducks/store/initialState";
import { getUserId } from "../../reducks/users/selectors";
import { Button, Input } from "../atoms";
import { SelectForm } from "../molecules";

type Props = {
    formType: "create" | "edit";
}

const CategoriesForm: React.FC<Props> = props => {
    const [currentCategory, setCurrentCategory] = useState(initialCategoryState);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setCurrentCategory({...currentCategory, [name]: value});
    }
    const { categoryId } = useParams<{categoryId?: string}>();
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const uid = getUserId(selector);
    const custumCList = getCustumList(selector);
    const onClickFunc = () => {
        switch (props.formType) {
            case "create":
                dispatch(createCategory(uid, currentCategory))
            break;
            case "edit":
                dispatch(updateCategory(uid, currentCategory))
            break;
        }
    }

    useEffect(() => {
        if (props.formType === "edit") {
            const category = custumCList.find((category: categoryState) => {
                return category.id === Number(categoryId)
            })
            setCurrentCategory(category)
        } else {
            setCurrentCategory(initialCategoryState)
        }
    }, [categoryId])

    return (
        <form>
            <Grid container spacing={2}>
                <Grid item>
                    <SelectForm
                        value={currentCategory.big_category}
                        name="big_category"
                        datas={[{value: "fixed_cost", name: "固定費"}, {value: "variable_cost", name: "変動費"}, {value: "income", name: "収入"}]}
                        label="大分類"
                        onChange={handleInputChange}
                        disabled={null}
                    />
                </Grid>
                <Grid item xs={8}>
                    <Input
                        name="name"
                        label="カテゴリ名"
                        placeholder="Name"
                        type="string"
                        value={currentCategory.name}
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

export default CategoriesForm;