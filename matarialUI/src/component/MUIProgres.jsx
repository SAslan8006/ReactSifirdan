import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

function MUIProgres() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress >= 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return oldProgress + diff
            });
        }, 500);
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
            <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                <CircularProgress color="secondary" />
                <CircularProgress color="success" />
                <CircularProgress color="inherit" />
            </Stack>
            <Box sx={{ width: '100%', marginTop: '20px' }}>
                <LinearProgress />
            </Box>
            <Stack sx={{ width: '100%', marginTop: '20px', color: 'grey.500' }} spacing={2}>
                <LinearProgress color="secondary" />
                <LinearProgress color="success" />
                <LinearProgress color="inherit" />
            </Stack>
            <Box sx={{ width: '100%', marginTop: '20px' }}>
                <LinearProgress variant="determinate" value={progress} />
            </Box>
        </div>
    )
}

export default MUIProgres