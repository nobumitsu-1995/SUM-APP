import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { itemState } from '../../reducks/items/type';

type Props = {
    items: itemState[];
    currentMonth: string;
    budget: number;
}

const useStyles = makeStyles({
    info: {
        backgroundColor: "rgb(75,192,192)",
        width: "60vw",
        minWidth: 300,
        margin: "10px auto",
        borderRadius: 10,
        border: "4px solid #5BC0A3",
        color: "white" ,
        fontWeight: "bold"
    }
})

const LineChart: React.FC<Props> = (props) => {
    const [endOfMonth, setEndOfMonth] = useState(0) 
    const [x, setX] = useState([""])
    const [consumptionData, setconsumptionData] = useState([0]);
    const [incomeData, setIncomeData] = useState(0);
    const [amountY, setAmountY] = useState([0]);
    console.log(props.budget)

    useEffect(() => {
        const day = new Date(props.currentMonth)
        // 翌月の取得
        day.setMonth(day.getMonth() + 1);
        // 先月末日の取得
        day.setDate(0);
        setEndOfMonth(day.getDate())
        setX(Array(endOfMonth).fill(0).map((v, i) => `${i + 1}日`))
    }, [props.items, props.currentMonth])

    useEffect(() => {
        const initialAmountY = Array(endOfMonth).fill(0);
        setconsumptionData(initialAmountY);
        props.items.forEach(item => {
            if (item.category.big_category !== "income") {
                const date = new Date(item.date);
                const day = date.getDate();
                initialAmountY[day-1] -= item.price
                setconsumptionData(initialAmountY)
            }
        });
    }, [endOfMonth, props.items])

    useEffect(() => {
        const initialPrice = 0;
        const price = props.items.reduce((result, current) => {
            if (current.category.big_category === "income") {
                return result + current.price;
            }
            return result;
        }, initialPrice)
        setIncomeData(price);
    }, [endOfMonth, props.items])

    useEffect(() => {
        const arr = consumptionData.reduce((result, current) => {
            const price = result[result.length - 1] + current
            result.push(price)
            return result
        }, [props.budget])
        arr.shift();
        setAmountY(arr);
    }, [consumptionData])

    const data = {
        labels: x,
        datasets: [
            {
                label: '今月残り予算推移',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderDash: [],
                borderDashOffset: 0.0,
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 30,
                data: amountY,
            },
        ],
    };

    const difference = amountY[amountY.length-1] - props.budget
    const saving = incomeData + difference
    const classes = useStyles();

    return (
        <>
            <Line data={data} height={window.outerWidth < 426 ? 200 : 80}/>
            <div className={classes.info}>
                <Grid container justifyContent="center">
                    <Grid item style={{margin: "8px 12px"}}>予算残高：　{amountY[amountY.length-1]}円</Grid>
                    <Grid item style={{margin: "8px 12px"}}>月使用金額：　▲{-difference}円</Grid>
                </Grid>
                <Grid container justifyContent="center">
                    <Grid item style={{margin: "8px 12px"}}>月収入　：　{incomeData}円</Grid>
                    <Grid item style={{margin: "8px 12px"}}>月貯金額：　{saving < 0 ? `▲${-saving}` : saving}円</Grid>
                </Grid>
            </div>
        </>
    );
}

export default LineChart;