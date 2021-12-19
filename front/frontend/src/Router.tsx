import {Switch, Route} from "react-router"
import { Home, Items, User, Tech } from "./components/pages";
import { useSelector } from "react-redux";
import { getSignedIn } from "./reducks/users/selectors";
import AddItems from "./components/organisms/AddItems";

const Router = () => {
    const selector = useSelector(state => state);
    const signedIn = getSignedIn(selector)
    
    return (
        <Switch>
            {!signedIn ?
                <>
                    <Route exact path="(/)?" component={Home} />
                    <Route exact path="/tech_info" component={Tech} />
                </>
            :
                <>
                    <Route path="/user/" component={User} />
                    <Route exact path="/items/new" component={AddItems}/>
                    <Route exact path="/items" component={Items} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/tech_info" component={Tech} />
                </>
            }
        </Switch>
    );
}

export default Router;