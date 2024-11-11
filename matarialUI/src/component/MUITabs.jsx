import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

function MUITabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Kişisel Bilgiler" value="1" />
                        <Tab label="Eğitim Bilgisi" value="2" />
                        <Tab label="İletişim" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">Kişisel Bilgiler</TabPanel>
                <TabPanel value="2">Eğitim Bilgisi</TabPanel>
                <TabPanel value="3">İletişim</TabPanel>
            </TabContext>
            <customTabPane value={value} index={"1"}>Kişisel Bilgiler</customTabPane>
            <customTabPane value={value} index={"2"}>Kişisel Bilgiler</customTabPane>
            <customTabPane value={value} index={"3"}>Kişisel Bilgiler</customTabPane>
        </Box>
    );
}
export default MUITabs