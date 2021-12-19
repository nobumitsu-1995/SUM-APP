import {Divider, List as MUIList, ListItem, ListItemIcon, ListItemText, makeStyles, Paper} from '@material-ui/core';
import ListIcon from '@mui/icons-material/List';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import { deleteCategory } from '../../reducks/categories/operations';
import { categoryState } from '../../reducks/categories/type';
import { translateBigCategory } from '../../reducks/items/operations';
import { deletePaymentMethod, translateIncome } from '../../reducks/paymentMethods/operations';
import { PaymentMethodState } from '../../reducks/paymentMethods/type';
import ItemMenu from './ItemMenu';

type Props = {
    title: string;
    contents: categoryState[] | PaymentMethodState[];
    listType?: "category" | "payment_method";
}

const useStyles = makeStyles({
    fixedList: {
        position: 'relative',
        overflow: 'auto',
        maxHeight: 240,
    },
    listItem: {
        height: 45,
        padding: 0,
        paddingLeft: 10 
    },
    secondary: {
        fontSize: 4
    }
})

const List: React.FC<Props> = (props) => {
    const classes = useStyles();
    const defineSecondary = (props: any) => {
        return props.big_category ? translateBigCategory(props.big_category) : translateIncome(props.income)
    }
    const dispatch = useDispatch();
    const defineDeleteFunc = (content: any) => {
        console.log("run")
        if (content.big_category) {
            console.log("category delete")
            return dispatch(deleteCategory(content.user_id, content.id, content.big_category));
        } else {
            console.log("pm delete")
            return dispatch(deletePaymentMethod(content.user_id, content.id, content.income))
        }
    }

    return (
        <Paper>
            <MUIList>
                <ListItem>
                    <ListItemIcon>
                        <ListIcon/>
                    </ListItemIcon>
                    <ListItemText primary={props.title}/>
                </ListItem>
            </MUIList>
            <Divider/>
            <MUIList
                className={classes.fixedList}
                disablePadding={true}
                dense
            >
                {props.contents.map(content => {
                    return (
                        <ListItem button className={classes.listItem}>
                            ・<ListItemText
                                classes={{secondary: classes.secondary}}
                                primary={content.name}
                                secondary={`カテゴリ：${defineSecondary(content)}`}
                            />
                            {content.user_id && 
                                <ItemMenu 
                                    edit={() => dispatch(push(`/user/${props.listType}/${content.id}`))}
                                    delete={() => {
                                        window.confirm('削除しますか？') ?
                                        defineDeleteFunc(content)
                                        : alert('削除に失敗しました。')
                                    }}
                                />}
                        </ListItem>
                    )
                })}
            </MUIList>
        </Paper>
    );
}

export default List;