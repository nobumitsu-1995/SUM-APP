import { Avatar, Card as MaterialUiCard, CardContent, CardHeader } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

type Props = {
    color: string;
    title: string;
    children: React.ReactNode[];
    action?: React.ReactNode;
}

const Card: React.FC<Props> = (props) => {
    const useStyles = makeStyles({
        square: {
            color: "white",
            backgroundColor: `${props.color}`,
        },
        cardHeader: {
            padding: 0,
            backgroundColor: "#e0e0e0",
        },
        action: {
            height: 40,
            margin: 0,
            display: "flex",
        },
        title: {
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
        }
    })
    const classes = useStyles();

    return (
        <MaterialUiCard>
            <CardHeader
                classes={{root: classes.cardHeader, action: classes.action, title: classes.title}}
                avatar={
                    <Avatar variant="square" className={classes.square}>
                        {props.children[0]}
                    </Avatar>
                }
                action={props.action}
                title={props.title}
            />
            <CardContent>
                {props.children[1]}
            </CardContent>
        </MaterialUiCard>
    );
}

export default Card;