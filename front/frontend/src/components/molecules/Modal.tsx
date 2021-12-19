import React, { useEffect } from "react";
import { Dialog, DialogContentText, IconButton} from "@material-ui/core";
import CloseIcon from '@mui/icons-material/Close';
import { useLocation } from "react-router";

type Props = {
    children: React.ReactNode[];
}

const Modal: React.FC<Props> = (props) => {

    const [open, setOpen] = React.useState(false);
    const location = useLocation();
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const descriptionElementRef = React.useRef<HTMLElement>(null);
    React.useEffect(() => {
        if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
            descriptionElement.focus();
        }
        }
    }, [open]);

    useEffect(() => {
        setOpen(false);
    }, [location])

    return (
            <div>
                <div style={{display: "inline"}} onClick={handleOpen} >
                    {props.children[0]}
                </div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    scroll="body"
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                >
                    <IconButton onClick={handleClose} style={{position: "absolute", right: -5, top: -5 }} size="small" >
                        <CloseIcon />
                    </IconButton>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        {props.children[1]}
                    </DialogContentText>
                </Dialog>
            </div>
    );
};

export default Modal;