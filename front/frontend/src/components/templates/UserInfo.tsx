import { Avatar } from "@material-ui/core";
import { AccountBoxOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import { getUserEmail, getUserIcon, getUserId, getUserName } from "../../reducks/users/selectors";
import Card from "../molecules/Card";

const UserInfo = () => {
    const selector = useSelector(state => state);
    const username = getUserName(selector);
    const icon = getUserIcon(selector);
    const id = getUserId(selector);
    const email = getUserEmail(selector);
    const dispatch = useDispatch();

    return (
        <div
            onClick={() => dispatch(push('/user'))}
        >
            <Card
                color="#1877D2"
                title={"ユーザー情報"}
            >
                <AccountBoxOutlined/>
                <>
                    <Avatar
                        alt={username}
                        src={icon}
                        style={{ margin: "10px auto", width: 75, height: 75}}
                    />
                    <Typography variant="h5" component="h2">
                        {username}
                    </Typography>
                    <Typography color="textSecondary">
                        ID：{id}
                    </Typography>
                    <Typography color="textSecondary">
                        E-mail：{email}
                    </Typography>
                </>
            </Card>
        </div>
        
    );
}

export default UserInfo;