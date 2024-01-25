import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Checkbox as MuiCheckbox} from '@material-ui/core';

export const Checkbox = (props) => {
    const {checked, onChange, name, label, ...other} = props

    const convertToDefEventParam = (name, value) => ({
        target: {
          name,
          value
        }
    })

    return (
        <FormControlLabel
            control={
                <MuiCheckbox
                    checked={checked}
                    onChange={e => onChange(convertToDefEventParam(name, e.target.checked))}
                    name={name} />
            }
            label={label}
            {...other}
        />
    )
}