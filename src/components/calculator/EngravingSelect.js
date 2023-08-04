import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, FormControl, Select } from '@mui/material';
import { styles } from './styles';

function EngravingSelect(props) {
    const {
        maxEngravingValue,
        engravingTotal,
        setEngravingTotal
    } = props;
    const [value, setValue] = React.useState(0);
    const handleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        const newValueDiff = newValue - value;
        setEngravingTotal(engravingTotal + newValueDiff);
    };

    return (
        <FormControl sx={styles.formControl}>
            <Select
                value={value}
                onChange={handleChange}
            >   {
                    Array.from({ length: maxEngravingValue + 1 }, (_, i) => <MenuItem key={i} value={i}>+{i}</MenuItem>)
                }
            </Select>
        </FormControl>
    );
}

EngravingSelect.propTypes = {
    maxEngravingValue: PropTypes.number.isRequired,
    engravingTotal: PropTypes.number.isRequired,
    setEngravingTotal: PropTypes.func.isRequired
};

export default EngravingSelect;