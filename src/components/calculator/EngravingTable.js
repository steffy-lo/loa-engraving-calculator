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

    const [engraving1Total, setEngraving1Total] = React.useState(0);
    const [engraving2Total, setEngraving2Total] = React.useState(0);
    const [engraving3Total, setEngraving3Total] = React.useState(0);
    const [engraving4Total, setEngraving4Total] = React.useState(0);
    const [engraving5Total, setEngraving5Total] = React.useState(0);
    const [engraving6Total, setEngraving6Total] = React.useState(0);

    function initiateRowData(accessory, maxEngravingValue) {
        return {
            accessory,
            engraving1: <EngravingSelect
                maxEngravingValue={maxEngravingValue}
                engravingTotal={engraving1Total}
                setEngravingTotal={setEngraving1Total}
            />,
            engraving2: <EngravingSelect
                maxEngravingValue={maxEngravingValue}
                engravingTotal={engraving2Total}
                setEngravingTotal={setEngraving2Total}
            />,
            engraving3: <EngravingSelect
                maxEngravingValue={maxEngravingValue}
                engravingTotal={engraving3Total}
                setEngravingTotal={setEngraving3Total}
            />,
            engraving4: <EngravingSelect
                maxEngravingValue={maxEngravingValue}
                engravingTotal={engraving4Total}
                setEngravingTotal={setEngraving4Total}
            />,
            engraving5: <EngravingSelect
                maxEngravingValue={maxEngravingValue}
                engravingTotal={engraving5Total}
                setEngravingTotal={setEngraving5Total}
            />,
            engraving6: <EngravingSelect
                maxEngravingValue={maxEngravingValue}
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
        initiateRowData('Necklace', 5),
        initiateRowData('Earring 1', 5),
        initiateRowData('Earring 2', 5),
        initiateRowData('Ring 1', 5),
        initiateRowData('Ring 2', 5),
        initiateRowData('Engraving 1', 12),
        initiateRowData('Engraving 2', 12),
        initiateRowData('Ability Stone', 10)
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