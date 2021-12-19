import { Typography } from "@material-ui/core";
import { AttachFile, Comment, MonetizationOn } from "@mui/icons-material";
import { translateBigCategory } from "../../reducks/items/operations";
import { itemState } from "../../reducks/items/type";
import Card from "../molecules/Card";
import Modal from "../molecules/Modal";

type Props = {
    item: itemState;
}

const ShowItem: React.FC<Props> = (props) => {
    return (
        <Modal>
            <p>{props.item.name}</p>
            <div>
                <div style={{margin: 20}}>
                    <Card color={"green"}　title={"支出情報"}>
                        <AttachFile/>
                        <>
                            <Typography color="textSecondary">
                                    {translateBigCategory(props.item.category.big_category)} / {props.item.category.name}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {props.item.name} ： ￥{props.item.price}
                            </Typography>
                            <Typography align="right" color="textSecondary">
                                {props.item.date}
                            </Typography>
                        </>
                    </Card>
                </div>
                <div style={{margin: 20}}>
                    <Card color={"gold"}　title={"支払方法"}>
                        <MonetizationOn/>
                        <Typography>
                            支払方法 ： {props.item.payment_method.name}
                        </Typography>
                    </Card>
                </div>
                <div style={{margin: 20}}>
                    <Card color={"green"}　title={"備考"}>
                        <Comment/>
                        <Typography color="textSecondary">
                            {props.item.note}
                        </Typography>
                    </Card>
                </div>
            </div>
        </Modal>
    );
}

export default ShowItem;