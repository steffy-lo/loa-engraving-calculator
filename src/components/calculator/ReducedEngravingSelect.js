import React from 'react';
import { MenuItem, FormControl, Select } from '@mui/material';
import { styles } from './styles';

export default function ReducedEngravingSelect() {
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <FormControl sx={styles.formControl}>
            <Select
                value={value}
                onChange={handleChange}

            >
                <MenuItem value={"AP +1"}>Attack Power Reduction +1</MenuItem>
                <MenuItem value={"AP +2"}>Attack Power Reduction +2</MenuItem>
                <MenuItem value={"AP +3"}>Attack Power Reduction +3</MenuItem>
                <MenuItem value={"AS +1"}>Attack Speed Reduction +1</MenuItem>
                <MenuItem value={"AS +2"}>Attack Speed Reduction +2</MenuItem>
                <MenuItem value={"AS +3"}>Attack Speed Reduction +3</MenuItem>
                <MenuItem value={"DR +1"}>Defense Reduction +1</MenuItem>
                <MenuItem value={"DR +2"}>Defense Reduction +2</MenuItem>
                <MenuItem value={"DR +3"}>Defense Reduction +3</MenuItem>
                <MenuItem value={"MS +1"}>Move Speed Reduction +1</MenuItem>
                <MenuItem value={"MS +2"}>Move Speed Reduction +2</MenuItem>
                <MenuItem value={"MS +3"}>Move Speed Reduction +3</MenuItem>
            </Select>
        </FormControl>
    );
}