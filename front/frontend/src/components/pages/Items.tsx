import { AppBar, IconButton, makeStyles, Paper, Tab } from "@material-ui/core";
import { AddCircle, ArrowLeft, ArrowRight } from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { itemsfilter } from "../../reducks/items/operations";
import { initialState } from "../../reducks/store/initialState";
import { getItems as getItemsState } from "../../reducks/items/selectors"
import { Button } from "../atoms";
import ItemsCalendar from "../templates/Calendar";
import Dashboard from "../templates/Dashboard";
import IndexItems from "../templates/IndexItems";
import { itemState } from "../../reducks/items/type";
import { Modal } from "../molecules";
import ItemForm from "../organisms/ItemForm";
import LineChart from "../organisms/LineChart";
import { getMonthlyBudget } from "../../reducks/moneyInfos/selectors";
import { useLocation } from "react-router";

const useStyles = makeStyles({
    subject: {
        margin: 15,
        fontSize: 20,
        fontWeight: "bold"
    },
    select: {
        margin: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    paper: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#f3f3f3"
    }
});

const Items = () => {
    const classes = useStyles();
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(`${today.getFullYear()}-${today.getMonth() +1}-${today.getDate()}`)
    const [value, setValue] = useState("index");
    const [items, setItems] = useState<itemState[]>([initialState.items])
    const selector = useSelector(state => state);
    const allItems = getItemsState(selector);
    const location = useLocation();
    const monthly_budget = getMonthlyBudget(selector);
    
    useEffect(() => {
        setItems(itemsfilter(allItems, currentMonth))
    }, [allItems, currentMonth, location])
    
    const prevMonth = () => {
        const date = new Date(currentMonth)
        date.setMonth(date.getMonth() - 1)
        setCurrentMonth(`${date.getFullYear()}-${date.getMonth() +1}-${date.getDate()}`)
    }

    const nextMonth = () => {
        const date = new Date(currentMonth)
        date.setMonth(date.getMonth() + 1)
        setCurrentMonth(`${date.getFullYear()}-${date.getMonth() +1}-${date.getDate()}`)
    }

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
    };

    return (
        <>
            <h1>月別収支情報</h1>
            <div style={{marginBottom: 20}}>
                <Button variant="contained" size="small" color="primary" onClick={prevMonth} startIcon={<ArrowLeft/>} >前月</Button>
                <span className={classes.subject}>{new Date(currentMonth).getFullYear()}年{new Date(currentMonth).getMonth() + 1}月</span>
                <Button variant="contained" size="small" color="primary" onClick={nextMonth} endIcon={<ArrowRight/>}>次月</Button>
            </div>
            <Modal>
                <IconButton style={{position: "fixed", right: "3%", bottom: "3%"}}>
                    <AddCircle color="error" style={{fontSize: 80}} />
                </IconButton>
                <ItemForm formType="create" item={initialState.items}/>
            </Modal>
            <Paper style={{maxWidth: 1200, margin: "10px auto", padding: "20px 0px"}}>
                <LineChart items={items} currentMonth={currentMonth} budget={monthly_budget} />
            </Paper>
            <div style={{maxWidth: 1200, margin: "0 auto"}}>
                <TabContext value={value}>
                    <AppBar position="static" color="inherit">
                        <TabList onChange={handleChange} aria-label="simple tabs example">
                            <Tab label="月別収支一覧" value="index"/>
                            <Tab label="カレンダー" value="calender" />
                            <Tab label="月別収支情報" value="dashboard" />
                        </TabList>
                    </AppBar>
                    <Paper square>
                        <TabPanel value="index">
                            <IndexItems items={items} currentMonth={currentMonth} />
                        </TabPanel>
                        <TabPanel value="calender">
                            <ItemsCalendar items={items} currentMonth={currentMonth}/>
                        </TabPanel>
                        <TabPanel value="dashboard">
                            <Dashboard items={items} currentMonth={currentMonth} />
                        </TabPanel>
                    </Paper>
                </TabContext>
            </div>
        </>
    );
}

export default Items;