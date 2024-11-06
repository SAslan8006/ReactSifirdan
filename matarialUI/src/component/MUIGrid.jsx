import React from 'react'
import Grid from '@mui/material/Grid2';

function MUIGrid() {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid xs={12} sm={6} md={8} lg={9}>İtem1</Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>İtem2</Grid>
            </Grid>
        </div >
    )
}

export default MUIGrid