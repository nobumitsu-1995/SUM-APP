import { Button as MaterialUiButton } from "@material-ui/core";

type Props = {
    children: React.ReactNode;
    color: "inherit" | 
        "primary" |
        "secondary" |
        "default" |
        undefined;
    size: 'small' |
        'medium' |
        'large' | 
        undefined;
    variant: 'contained' |
        'outlined' |
        'text';
    fullWidth?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
}

const Button: React.FC<Props> = (props) => {
    return (
        <MaterialUiButton
            children={props.children}
            color={props.color}
            size={props.size}
            variant={props.variant}
            onClick={props.onClick}
            fullWidth={props.fullWidth}
            startIcon={props.startIcon}
            endIcon={props.endIcon}
        />
    );
}

export default Button;