import { Grid, Typography, Card as MUICard } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";

type Props = {
    total_assets: number;
    target_amount: number;
    deadline: string;
    monthly_budget: number;
}

const useStyles = makeStyles({
    important: {
        backgroundColor: "#81C784",
        margin: "25px 10px 0 10px",
        padding: 10,
        border: "2px solid #388e3c",
        fontWeight: "bold"
    }
})

const ShowMoneyInfo: React.FC<Props> = (props) => {
    const classes = useStyles();
    const [timeLeft, setTimeLeft] = useState<number>(0);
    const [monthlySavingsAmount, setMonthlySavingAmount] = useState<number>(0);

    useEffect(() => {
        const today = new Date();
        const deadlineDate = new Date(props.deadline);
        setTimeLeft(Math.floor((deadlineDate.getTime() - today.getTime())/(24 * 60 * 60 * 1000)));
    }, [])

    useEffect(() => {
        const difference = props.target_amount - props.total_assets
        setMonthlySavingAmount(difference/Math.round(timeLeft/30))
    }, [timeLeft])

    return (
        <Typography>
            <Grid container spacing={2} justifyContent="space-between">
                <Grid item>目標貯金額：</Grid>
                <Grid item>¥{props.target_amount}</Grid>
            </Grid>
            <Grid container spacing={2} justifyContent="space-between">
                <Grid item>合計保有資産：</Grid>
                <Grid item>¥{props.total_assets}</Grid>
            </Grid>
            <Grid container spacing={2} justifyContent="space-between">
                <Grid item>貯金達成目標日：</Grid>
                <Grid item>{props.deadline}</Grid>
            </Grid>
            <Grid container spacing={2} justifyContent="space-between">
                <Grid item>月予算：</Grid>
                <Grid item>¥{props.monthly_budget}</Grid>
            </Grid>
            <MUICard className={classes.important} elevation={3}>
                <p>残り時間：{Math.floor(timeLeft/365)}年{Math.round((timeLeft%365)/30)}ヶ月</p>
                <p>月必要貯金額：¥{Math.round(monthlySavingsAmount)}</p>
            </MUICard>
        </Typography>
    );
}

export default ShowMoneyInfo;