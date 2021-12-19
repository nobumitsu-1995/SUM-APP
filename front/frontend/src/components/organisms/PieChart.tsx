import React, {useEffect, FC} from "react";
import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { itemState } from "../../reducks/items/type";

type Props = {
    chartType: string;
    items: itemState[];
    currentMonth: string;
}

const PieChart: FC<Props> = (props) => {
    const [chartDatas, setChartDatas] = useState<{name:string, price: number}[]>([{name: "", price: 0}])
    const [x, setX] = useState<string[]>([]);
    const [y, setY] = useState<number[]>([]);

    useEffect(() => {
        const groupBy = props.items.reduce((result, current) => {
            if (props.chartType === "income" ? (current.category.big_category === "income") : (current.category.big_category !== "income")) {
                    const element = result.find((value: {name:string, price: number}) => value.name === current.category.name);
                if (element) {
                    element.price += current.price
                } else {
                    result.push({
                        name: current.category.name,
                        price: current.price
                    })
                }
            }
            return result
        }, [{name: "", price: 0}])
        groupBy.shift()
        setChartDatas(groupBy)
    }, [props.items, props.chartType])

    useEffect(() => {
        const x = chartDatas.map((item) => {
            return item.name
        })
        const y = chartDatas.map((item) => {
            return item.price
        })
        setX(x)
        setY(y)
    }, [chartDatas])

    const data = {
        // x 軸のラベル
        labels: x,
        datasets: [
            {
                label: 'Dataset',
                // データの値
                data: y,
                // グラフの背景色
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                ],
                // グラフの枠線の色
                borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
                ],
                // グラフの枠線の太さ
                borderWidth: 1,
            },
            ],
    };

    return (
        <Pie width={250} data={data}/>
    );
}

export default PieChart;