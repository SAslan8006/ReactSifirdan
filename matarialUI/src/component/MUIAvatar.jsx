import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { green, pink, deepOrange, deepPurple } from '@mui/material/colors';
function MUIAvatar() {
    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Avatar>
                    <FolderIcon />
                </Avatar>
                <Avatar sx={{ bgcolor: pink[500] }}>
                    <PageviewIcon />
                </Avatar>
                <Avatar sx={{ bgcolor: green[500] }}>
                    <AssignmentIcon />
                </Avatar>
            </Stack>
            <Stack direction="row" spacing={5}>
                <Avatar sx={{ bgcolor: green[500], width: 100, height: 100 }} src="https://randomuser.me/api/portraits/women/5.jpg" />

                <Avatar>H</Avatar>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
            </Stack>
        </div>
    )
}

export default MUIAvatar