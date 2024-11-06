import React from 'react'
import Box from '@mui/material/Box';


function MUIBox() {
    return (
        <div>
            <Box sx={{ bgcolor: 'primary.main', height: '100px', width: '100px', color: '# f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h1>Box</h1>
            </Box>

        </div>
    )
}

export default MUIBox