import Button from "../atoms/Button"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
    edit?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    delete?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const ItemMenu: React.FC<Props> = (props) => {

    return (
        <>
            {props.edit &&
                <Button
                    children={"edit"}
                    color="inherit"
                    size="small"
                    variant="text"
                    onClick={props.edit}
                    startIcon={<EditIcon color="info"/>}
                />
            }
            {props.delete &&
                <Button
                    children={"delete"}
                    color="inherit"
                    size="small"
                    variant="text"
                    onClick={props.delete}
                    startIcon={<DeleteIcon color="error"/>}
                />
            }
            
        </>
    );
}

export default ItemMenu;