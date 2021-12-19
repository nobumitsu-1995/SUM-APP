import { makeStyles } from "@material-ui/styles";
import { itemState } from "../../reducks/items/type";
import { Card } from "../molecules";
import { DateRange, MonetizationOn, Receipt } from "@mui/icons-material";
import BarChart from "../organisms/BarChart";
import PieChart from "../organisms/PieChart";

const useStyles = makeStyles({
    flex: {
        maxWidth: 800,
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
    },
    card: {
        marginTop: 20,
        maxWidth: 400
    }
});

type Props = {
    items: itemState[];
    currentMonth: string;
}

const Dashboard: React.FC<Props> = (props) => {
    const classes = useStyles();

    return(
        <>
            <div style={{maxWidth: 800, margin: "0 auto"}}>
                <Card title={"日別収支金額"} color={"purple"}>
                    <DateRange/>
                    <BarChart items={props.items} currentMonth={props.currentMonth} />
                </Card>
            </div>
            <div className={classes.flex}>
                <div className={classes.card} >
                    <Card title={"収入カテゴリ内訳"} color={"red"}>
                        <MonetizationOn/>
                        <PieChart chartType={"income"} items={props.items} currentMonth={props.currentMonth} />
                    </Card>
                </div>
                <div className={classes.card}>
                    <Card title={"消費カテゴリ内訳"} color={"#1877D2"}>
                        <Receipt/>
                        <PieChart chartType={"consumption"} items={props.items} currentMonth={props.currentMonth} />
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Dashboard;