import React, { FC, useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import { useLocation } from "react-router";
import { itemState } from "../../reducks/items/type";

type Props = {
    items: itemState[];
    currentMonth: string;
}

const BarChart: FC<Props> = (props) => {
    const [items, setItems] = useState(props.items)
    const [endOfMonth, setEndOfMonth] = useState<number>()    
    const [x, setX] = useState([""])
    const [incomeY, setIncomeY] = useState([""]);
    const [consumptionY, setConsumptionY] = useState([""]);
    const location = useLocation();

    useEffect(() => {
        setItems(props.items)
    }, [props.items])

    useEffect(() => {
        const day = new Date(props.currentMonth)
        // 翌月の取得
        day.setMonth(day.getMonth() + 1);
        // 先月末日の取得
        day.setDate(0);
        setEndOfMonth(day.getDate())
        setX(Array(endOfMonth).fill(0).map((v, i) => `${i + 1}日`))
    }, [items, props.currentMonth, location, endOfMonth])

    useEffect(() => {
        const initialIncomeY = Array(endOfMonth).fill(0);
        const initialConsumptionY = Array(endOfMonth).fill(0);
        setIncomeY(initialIncomeY);
        setConsumptionY(initialConsumptionY);
        items.forEach((item: itemState) => {
            const date = new Date(item.date);
            const day = date.getDate();
            if (item.category.big_category === "income") {
                initialIncomeY[day-1] += item.price
                setIncomeY(initialIncomeY)
            } else {
                initialConsumptionY[day-1] += item.price
                setConsumptionY(initialConsumptionY)
            }
            
        });
    }, [x, items, endOfMonth])    

    const data = {
        labels: x,
        datasets: [
            {
                label: "収入",
                data: incomeY,
                backgroundColor: 'rgb(255, 99, 132)',
            },
            {
                label: "支出",
                data: consumptionY,
                backgroundColor: 'rgb(54, 162, 235)',
            },
            ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    }

    return (
        <Bar data={data} height={450} options={options}/>
    );
}

export default BarChart;