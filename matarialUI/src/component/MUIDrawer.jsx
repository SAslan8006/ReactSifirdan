import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

function MUIDrawer() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    return (
        <div>
            <Button onClick={toggleDrawer(true)}>Open</Button>
            <Drawer
                anchor="right"
                open={open}
                onClose={toggleDrawer(false)}
            >
                <Box sx={{ width: "300px", textAlign: "center" }}>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid beatae dolores praesentium modi possimus ipsum ab eaque porro vero eligendi necessitatibus animi, quae illum nihil consectetur! Aliquam quae suscipit eveniet?</p>
                </Box>
            </Drawer>
        </div>
    )
}

export default MUIDrawer