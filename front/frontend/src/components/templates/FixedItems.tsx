import {Card} from "../molecules";
import { AccountBalanceWallet } from "@mui/icons-material";
import { AddCircle } from "@mui/icons-material";
import { Modal } from "../molecules";
import IndexFixedItems from "../organisms/IndexFixedItems";
import { IconButton } from "@material-ui/core";
import { initialState } from "../../reducks/store/initialState";
import FixedCostForm from "../organisms/FixedCostForm";

const FixedItems = () => {
    return (
        <Card
            color="purple"
            title="固定収支一覧"
        >
            <AccountBalanceWallet/>
            <div style={{margin: "0 auto"}}>
                <IndexFixedItems/>
                <Modal>
                    <div style={{display: "flex", justifyContent: "right", marginTop: "15px"}}> 
                        <IconButton>
                            <AddCircle color="error" style={{fontSize: 80}} />
                        </IconButton>
                    </div>
                    <FixedCostForm
                        formType="create"
                        item={initialState.fixed_costs}
                    />
                </Modal>
            </div>
        </Card>
        
    );
}

export default FixedItems;