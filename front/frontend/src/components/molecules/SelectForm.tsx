import React, { FC } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {InputLabel, MenuItem, FormControl, Select} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
        marginTop: 16,
        marginBottom: 8,
        minWidth: 120
        },
    })
    );

type Props = {
    label: string;
    name: string;
    value?: number | string | boolean;
    datas: {value: number | string | boolean, name: string}[];
    disabled: "disabled" | null;
    onChange?: any
};

const SelectForm: FC<Props> = (props) => {
    const classes = useStyles();
    
    return (
        <FormControl className={classes.formControl} size="medium" fullWidth {...props.disabled} >
            <InputLabel>{props.label}</InputLabel>
            <Select　value={props.value} name={props.name} onChange={props.onChange}>
            {props.datas.map((data: {value: number | string | boolean, name: string}) => (
                <MenuItem value={`${data.value}`}>
                {data.name}
                </MenuItem>
            ))}
            </Select>
        </FormControl>
    );
};

export default SelectForm;