import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem, Stack } from '@mui/material';
import { useState } from 'react';

function MUIBar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = (e) => {
        setAnchorEl(e.currentTarget)
    }
    const closeMenu = () => {
        setAnchorEl(null);
    }
    return (
        <Box sx={{ flexGrow: 1, width: '100%' }}>
            <AppBar position="static" >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Button color="inherit">Features</Button>
                        <Button color="inherit" onClick={openMenu}>Pricing</Button>
                        <Button color="inherit">About</Button>
                    </Stack>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeMenu}>
                        <MenuItem onClick={closeMenu}>Profile</MenuItem>
                        <MenuItem onClick={closeMenu}>My account</MenuItem>
                        <MenuItem onClick={closeMenu}>Logout</MenuItem>
                    </Menu>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default MUIBar