import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, translateBigCategory } from "../../reducks/items/operations";
import { getUserId } from "../../reducks/users/selectors";
import { Button } from "../atoms";
import { Modal, ItemMenu, Table } from "../molecules";
import { StyledTableCell, StyledTableRow } from "../molecules/Table";
import ItemForm from "../organisms/ItemForm";
import ShowItem from "../organisms/ShowItem";

const FixedItems = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const uid = getUserId(selector);

    const items = [{
        id: 0,
        date: "",
        category_id: 0,
        name: "qwerty",
        price: 1000,
        payment_method_id: 0,
        note: "qwerty",
        user_id: "qwerty",
        category: {id: 0, name: "qwerty", big_category: "qwerty"},
        payment_method: {id: 0, name: "qwerty", income: false}
    }]

    return (
        <div style={{maxWidth: 1000, margin: "0 auto"}}>
            <Table headerItems={["収支発生日","カテゴリ","内容","値段","操作"]}>
                {items.map((item) => (
                    <StyledTableRow key={item.id}>
                        <StyledTableCell align="center" style={{width: 80}}>
                            {item.date}
                        </StyledTableCell>
                        <StyledTableCell align="center" style={{width: 130}}>
                            {translateBigCategory(item.category.big_category)}/{item.category.name}
                        </StyledTableCell>
                        <StyledTableCell align="center"><ShowItem item={item}/></StyledTableCell>
                        <StyledTableCell
                            align="right"
                            style={{
                                fontSize: 20,
                                width: 100,
                                fontWeight: "bold",
                                color: `${item.category.big_category === "income" ? "red" : "blue"}`
                            }}
                        >
                            {item.category.big_category !== "income" && "▲"}{item.price}円
                        </StyledTableCell>
                        <StyledTableCell align="center" style={{width: 200}}>
                            <Modal>
                                <Button
                                    children={"edit"}
                                    color="inherit"
                                    size="small"
                                    variant="text"
                                    startIcon={<EditIcon color="info"/>}
                                />
                                <ItemForm
                                    formType="edit"
                                    item={item}
                                />
                            </Modal>
                            <ItemMenu
                                delete={() => {
                                    window.confirm('削除しますか？') ?
                                    dispatch(deleteItem(uid, item.id))
                                    : alert('削除に失敗しました。')
                                }}
                            />
                        </StyledTableCell>
                    </StyledTableRow>
                ))}
            </Table>
        </div>
    );
}

export default FixedItems;