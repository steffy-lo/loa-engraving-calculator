import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, FormControl, Select } from '@mui/material';
import { styles } from './styles';

function EngravingSelect(props) {
    const {
        accessory,
        maxEngravingValue,
        engravingTotal,
        setEngravingTotal,
        engravingValue,
        setEngravingValue
    } = props;

    const [value, setValue] = React.useState(0);
    const [disableEngravingSelect, setDisableEngravingSelect] = React.useState(false);

    // Set the state of selected engraving value accordingly
    const populateSelectedEngravingValue = (value) => {
        if (Array.isArray(setEngravingValue)) {
            const emptyEngravingIndex = engravingValue.findIndex(val => val === 0);
            const setEngravingValueIndex = emptyEngravingIndex !== -1 ? emptyEngravingIndex : 0;
            setEngravingValue[setEngravingValueIndex](value);
        } else {
            setEngravingValue(value);
        }
    }

    React.useEffect(() => {
        // If more than max number of engraving value is present, disable engraving select
        const disableEngravingSelectAccordingly = () => {
            if (Array.isArray(engravingValue)) {
                const emptyEngravingExist = engravingValue.filter(val => val === 0);
                setDisableEngravingSelect(emptyEngravingExist.length === 0 && value === 0);
            } else {
                setDisableEngravingSelect(engravingValue !== 0 && value === 0);
            }
        }
        disableEngravingSelectAccordingly();
    }, [engravingValue, value])

    const handleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        const newValueDiff = newValue - value;
        setEngravingTotal(engravingTotal + newValueDiff);
        populateSelectedEngravingValue(newValue);
    };

    const getSelectSxProps = () => {
        const emptyEngravingExist = Array.isArray(engravingValue) ?
            engravingValue.filter(val => val === 0).length > 0 : engravingValue === 0;
        const sx = emptyEngravingExist ? styles.engravingSelect.selected : styles.engravingSelect.selectedMax;
        return !disableEngravingSelect && value !== 0 && { sx }
    }

    return (
        <FormControl sx={styles.formControl}>
            <Select
                value={value}
                onChange={handleChange}
                disabled={disableEngravingSelect}
                {...getSelectSxProps()}
            >   {
                    !accessory.toLowerCase().includes('engraving') ?
                        Array.from({ length: maxEngravingValue + 1 }, (_, i) =>
                            <MenuItem key={i} value={i}>+{i}</MenuItem>) :
                        Array.from({ length: (maxEngravingValue / 3) + 1 }, (_, i) =>
                            <MenuItem key={i * 3} value={i * 3}>+{i * 3}</MenuItem>)
                }
            </Select>
        </FormControl>
    );
}

EngravingSelect.propTypes = {
    accessory: PropTypes.string.isRequired,
    maxEngravingValue: PropTypes.number.isRequired,
    engravingTotal: PropTypes.number.isRequired,
    setEngravingTotal: PropTypes.func.isRequired,
    engravingValue: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.number)
    ]),
    setEngravingValue: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.arrayOf(PropTypes.func)
    ])
};

export default EngravingSelect;