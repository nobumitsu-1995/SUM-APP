import { TextField } from "@material-ui/core";

type Props = {
    name: string;
    label: string;
    placeholder?: string;
    type: string;
    value?: string | number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = (props) => {
    return (
        <TextField
            name={props.name}
            label={props.label}
            placeholder={props.placeholder}
            fullWidth
            type={props.type}
            margin="normal"
            value={props.value}
            InputLabelProps={{
                shrink: true,
            }}
            onChange={props.onChange}
        />
    );
}

export default Input;