import { makeStyles } from '@material-ui/styles';
import React, { FC, useEffect } from 'react';
import { useState } from 'react';
import Calendar, { CalendarTileProperties } from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { differenceInCalendarDays } from 'date-fns';
import { itemState } from '../../reducks/items/type';

type Props = {
    currentMonth: string;
    items: itemState[];
}

const useStyles = makeStyles({
    calendar: {
        width: 1000,
        height: 600
    },
    tile: {
        height: 93,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        fontWeight: "bold",
    },
    minus: {
        color: "blue",
        fontSize: "1em"
    },
    plus: {
        color: "red",
        fontSize: "1em"
    }
})

const ItemsCalendar: FC<Props> = (props) => {
    const classes = useStyles();
    const [currentMonth, setCurrentMonth] = useState(new Date(props.currentMonth))
    const [calendarDatas, setCalendarDatas] = useState([{date: "", price: 0}])
    function isSameDay(a: number | Date, b: number | Date) {
        return differenceInCalendarDays(a, b) === 0;
    }
    
    const tileContent = (props: CalendarTileProperties) => {
        const contents = calendarDatas.find(data => {
            return isSameDay(new Date(data.date), props.date) ? data : null
        })
        return contents ? (
            <p className={contents.price < 0 ? classes.minus : classes.plus}>{contents.price}</p>
        )
        : null
    }

    useEffect(() => {
        setCurrentMonth(new Date(props.currentMonth))
    }, [props.currentMonth])

    useEffect(() => {
        const groupBy = props.items.reduce((result, current) => {
            const element = result.find(value => value.date === current.date);
            const signedNumber = current.category.big_category !== "income" ? -(current.price) : current.price
            if (element) {
                element.price += signedNumber
            } else {
                result.push({
                    date: current.date,
                    price: signedNumber
                })
            }
            return result
        },[{date: "", price: 0}])
        groupBy.shift()
        setCalendarDatas(groupBy)
    }, [props.items])

    console.log(calendarDatas)

        return (
            <div style={{maxWidth: 800, margin: "0 auto"}}>
                <Calendar
                    className={classes.calendar}
                    tileClassName={classes.tile}
                    showNavigation={false}	
                    value={currentMonth}
                    showFixedNumberOfWeeks={true}
                    tileContent={tileContent}
                    activeStartDate={currentMonth}
                />
            </div>
            
        )    
}

export default ItemsCalendar;