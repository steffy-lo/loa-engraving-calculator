import React from 'react';
import PropTypes from 'prop-types';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';
import { styles } from './styles';
import EngravingSelect from "./EngravingSelect";
import ReducedEngravingSelect from "./ReducedEngravingSelect";
import EngravingNameSelect from './EngravingNameSelect';

function EngravingTable(props) {
    //======================= STATES ==============================================================
    const [engraving1Total, setEngraving1Total] = React.useState(0);
    const [engraving2Total, setEngraving2Total] = React.useState(0);
    const [engraving3Total, setEngraving3Total] = React.useState(0);
    const [engraving4Total, setEngraving4Total] = React.useState(0);
    const [engraving5Total, setEngraving5Total] = React.useState(0);
    const [engraving6Total, setEngraving6Total] = React.useState(0);

    // Necklace Engraving
    const [necklaceEngraving1, setNecklaceEngraving1] = React.useState(0);
    const [necklaceEngraving2, setNecklaceEngraving2] = React.useState(0);

    // Earring Engraving
    const [earring1Engraving1, setEarring1Engraving1] = React.useState(0);
    const [earring1Engraving2, setEarring1Engraving2] = React.useState(0);
    const [earring2Engraving1, setEarring2Engraving1] = React.useState(0);
    const [earring2Engraving2, setEarring2Engraving2] = React.useState(0);

    // Ring Engraving
    const [ring1Engraving1, setRing1Engraving1] = React.useState(0);
    const [ring1Engraving2, setRing1Engraving2] = React.useState(0);
    const [ring2Engraving1, setRing2Engraving1] = React.useState(0);
    const [ring2Engraving2, setRing2Engraving2] = React.useState(0);

    // Book Engravings
    const [engraving1, setEngraving1] = React.useState(0);
    const [engraving2, setEngraving2] = React.useState(0);

    // Ability Stone Engraving
    const [abilityStone1, setAbilityStone1] = React.useState(0);
    const [abilityStone2, setAbilityStone2] = React.useState(0);

    //===================== ENGRAVING 5x3 EPIC ENGRAVING BOOK CONSTRAINT LOGIC =====================================


    //====================== TO POPULATE TABLE (DO NOT TOUCH!) =====================

    function initiateRowData(accessory, maxEngravingValue, engravingValue, setEngravingValue) {
        const commonProps = {
            accessory,
            maxEngravingValue,
            engravingValue,
            setEngravingValue
        }
        return {
            accessory,
            engraving1: <EngravingSelect
                {...commonProps}
                engravingTotal={engraving1Total}
                setEngravingTotal={setEngraving1Total}
            />,
            engraving2: <EngravingSelect
                {...commonProps}
                engravingTotal={engraving2Total}
                setEngravingTotal={setEngraving2Total}
            />,
            engraving3: <EngravingSelect
                {...commonProps}
                engravingTotal={engraving3Total}
                setEngravingTotal={setEngraving3Total}
            />,
            engraving4: <EngravingSelect
                {...commonProps}
                engravingTotal={engraving4Total}
                setEngravingTotal={setEngraving4Total}
            />,
            engraving5: <EngravingSelect
                {...commonProps}
                engravingTotal={engraving5Total}
                setEngravingTotal={setEngraving5Total}
            />,
            engraving6: <EngravingSelect
                {...commonProps}
                engravingTotal={engraving6Total}
                setEngravingTotal={setEngraving6Total}
            />,
            reducedAbilities: ReducedEngravingSelect()
        };
    }

    function initiateColData(id, value) {
        return {
            id,
            children: value
        }

    }

    const rows = [
        initiateRowData('Necklace', 5, [necklaceEngraving1, necklaceEngraving2], [setNecklaceEngraving1, setNecklaceEngraving2]),
        initiateRowData('Earring 1', 5, [earring1Engraving1, earring1Engraving2], [setEarring1Engraving1, setEarring1Engraving2]),
        initiateRowData('Earring 2', 5, [earring2Engraving1, earring2Engraving2], [setEarring2Engraving1, setEarring2Engraving2]),
        initiateRowData('Ring 1', 5, [ring1Engraving1, ring1Engraving2], [setRing1Engraving1, setRing1Engraving2]),
        initiateRowData('Ring 2', 5, [ring2Engraving1, ring2Engraving2], [setRing2Engraving1, setRing2Engraving2]),
        initiateRowData('Engraving 1', 12, engraving1, setEngraving1),
        initiateRowData('Engraving 2', 12, engraving2, setEngraving2),
        initiateRowData('Ability Stone', 10, [abilityStone1, abilityStone2], [setAbilityStone1, setAbilityStone2])
    ];

    const columns = [
        initiateColData('accessory', 'Accessory'),
        initiateColData('engraving1', EngravingNameSelect({ index: 1 })),
        initiateColData('engraving2', EngravingNameSelect({ index: 2 })),
        initiateColData('engraving3', EngravingNameSelect({ index: 3 })),
        initiateColData('engraving4', EngravingNameSelect({ index: 4 })),
        initiateColData('engraving5', EngravingNameSelect({ index: 5 })),
        initiateColData('engraving6', EngravingNameSelect({ index: 6 })),
        initiateColData('reducedAbilities', 'Reduced Engraving')
    ];

    return (
        <TableContainer>
            <Table>
                <TableHead sx={styles.tableHead}>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                sx={styles.tableCell}
                                key={column.id}
                            >
                                {column.children}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, i) => {
                        return (
                            <TableRow hover tabIndex={-1} key={`${i}-${row.accessory}`}>
                                {columns.map((column, j) => {
                                    const value = row[column.id];
                                    return (
                                        <TableCell key={`${i}-${j}-${column.id}`}>
                                            {column.format && typeof value === 'number'
                                                ? column.format(value)
                                                : value}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        );
                    })}
                    <TableRow hover tabIndex={-1}>
                        <TableCell>Sum</TableCell>
                        {[
                            engraving1Total,
                            engraving2Total,
                            engraving3Total,
                            engraving4Total,
                            engraving5Total,
                            engraving6Total
                        ].map((engravingTotal, i) =>
                            <TableCell key={i} align="center">{engravingTotal}</TableCell>)
                        }
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    );
}

EngravingTable.propTypes = {
    type: PropTypes.number
};

export default EngravingTable;