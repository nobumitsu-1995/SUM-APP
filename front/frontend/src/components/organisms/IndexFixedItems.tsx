import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from "react-redux";
import { deleteFixedCost } from '../../reducks/fixedItems/operations';
import { getFixedCosts } from '../../reducks/fixedItems/selectors';
import { fixedCostState } from '../../reducks/fixedItems/type';
import { translateBigCategory } from "../../reducks/items/operations";
import { getUserId } from "../../reducks/users/selectors";
import { Button } from "../atoms";
import { Modal, ItemMenu, Table } from "../molecules";
import { StyledTableCell, StyledTableRow } from "../molecules/Table";
import ShowItem from "../organisms/ShowItem";
import FixedCostForm from './FixedCostForm';

const IndexFixedItems = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const uid = getUserId(selector);
    const fixedCosts = getFixedCosts(selector);
    return (
        <div style={{maxWidth: 1000, margin: "0 auto"}}>
            <Table headerItems={["収支発生日","カテゴリ","内容","値段","操作"]}>
                {fixedCosts ? (fixedCosts.map((fixedCost: fixedCostState) => (
                    <StyledTableRow key={fixedCost.id}>
                        <StyledTableCell align="center" style={{width: 80}}>
                            {fixedCost.scheduled_date}
                        </StyledTableCell>
                        <StyledTableCell align="center" style={{width: 130}}>
                            {translateBigCategory(fixedCost.category.big_category)}/{fixedCost.category.name}
                        </StyledTableCell>
                        <StyledTableCell align="center"><ShowItem item={fixedCost}/></StyledTableCell>
                        <StyledTableCell
                            align="right"
                            style={{
                                fontSize: 20,
                                width: 100,
                                fontWeight: "bold",
                                color: `${fixedCost.category.big_category === "income" ? "red" : "blue"}`
                            }}
                        >
                            {fixedCost.category.big_category !== "income" && "▲"}{fixedCost.price}円
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
                                <FixedCostForm
                                    formType='edit'
                                    item={fixedCost}
                                />
                            </Modal>
                            <ItemMenu
                                delete={() => {
                                    window.confirm('削除しますか？') ?
                                    dispatch(deleteFixedCost(uid, fixedCost.id))
                                    : alert('削除に失敗しました。')
                                }}
                            />
                        </StyledTableCell>
                    </StyledTableRow>
                ))) : "-"}
            </Table>
        </div>
    );
}

export default IndexFixedItems;