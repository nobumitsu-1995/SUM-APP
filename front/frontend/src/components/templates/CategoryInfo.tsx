import { Dns } from "@mui/icons-material";
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import { getCustumList, getDefaultList } from "../../reducks/categories/selectors";
import { ItemMenu, List } from "../molecules";
import Card from "../molecules/Card";
import CategoriesForm from "../organisms/CategoriesForm";

const CategoriesInfo = () => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const defaultList = getDefaultList(selector);
    const custumList = getCustumList(selector);

    return (
        <Card
            color="red"
            title={"収支カテゴリ"}
            action={<ItemMenu edit={() => dispatch(push('/user/edit'))} />}
        >
            <Dns/>
            <Switch>
                <Route path="*/edit">
                    <div style={{marginBottom: 10}}>
                        <CategoriesForm formType='create'/>
                    </div>
                    <div style={{marginTop: 10}}>
                        <List
                            title="カスタムカテゴリ"
                            contents={custumList}
                            listType="category"
                        />
                    </div>
                </Route>
                <Route path="*/category/:categoryId">
                    <div style={{marginBottom: 10}}>
                        <CategoriesForm formType='edit'/>
                    </div>
                    <div style={{marginTop: 10}}>
                        <List
                            title="カスタムカテゴリ"
                            contents={custumList}
                            listType="category"
                        />
                    </div>
                </Route>
                <Route path="*/">
                    <div style={{marginBottom: 10}}>
                        <List
                            title="デフォルトカテゴリ"
                            contents={defaultList}
                        />
                    </div>
                    <div style={{marginTop: 10}}>
                        <List
                            title="カスタムカテゴリ"
                            contents={custumList}
                            listType="category"
                        />
                    </div>             
                </Route>
            </Switch>
        </Card>
    );
}

export default CategoriesInfo;