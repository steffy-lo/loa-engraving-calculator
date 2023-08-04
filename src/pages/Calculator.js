import React from 'react';
import { Container, Grid, Tabs, Tab, Typography } from '@mui/material';
import { layout } from '../styles';
import { TabPanel } from '../components';
import EngravingTable from '../components/calculator/EngravingTable';


function Calculator() {
    const [tabValue, setTabValue] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };
    return (
        <Container sx={layout['padding-2']}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h4">Engraving Calculator</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Tabs value={tabValue} onChange={handleTabChange}>
                        <Tab label="5 x 3" />
                        <Tab label="5 x 3 + 1" disabled />
                        <Tab label="5 x 3 + 2" disabled />
                    </Tabs>
                    <TabPanel value={tabValue} index={0}>
                        <EngravingTable type={tabValue} />
                    </TabPanel>
                    <TabPanel value={tabValue} index={1}>
                        <EngravingTable type={tabValue} />
                    </TabPanel>
                    <TabPanel value={tabValue} index={2}>
                        <EngravingTable type={tabValue} />
                    </TabPanel>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Calculator;