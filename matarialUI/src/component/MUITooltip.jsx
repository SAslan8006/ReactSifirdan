import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function MUITooltip() {
    return (
        <div>
            <Tooltip placement="left-start" title="Silmek istediğinizden emin misiniz?">
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        </div>
    )
}

export default MUITooltip