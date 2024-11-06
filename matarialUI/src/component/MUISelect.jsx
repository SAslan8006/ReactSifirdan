import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';

function MUISelect() {
    const [age, setAge] = React.useState('');
    const [ages, setAges] = React.useState([]);

    const handleChange = (event) => {
        setAge(event.target.value);
        setAges(event.target.value);
    };
    return (
        <div>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Para Birimi</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value="USD">Dolar</MenuItem>
                        <MenuItem value="EUR">EURO</MenuItem>
                        <MenuItem value="TRY">Türk Lirası</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <TextField sx={{ minWidth: 120, marginTop: '20px' }} label="Para Birimi" select value={age} onChange={handleChange} color="success" >
                <MenuItem value="USD">Dolar</MenuItem>
                <MenuItem value="EUR">EURO</MenuItem>
                <MenuItem value="TRY">Türk Lirası</MenuItem>
            </TextField>

            <TextField
                sx={{ minWidth: 120, marginTop: '20px' }}
                label="Para Birimi"
                SelectProps={{ multiple: true }}
                value={ages}
                onChange={handleChange}
                color="success" >
                <MenuItem value="USD">Dolar</MenuItem>
                <MenuItem value="EUR">EURO</MenuItem>
                <MenuItem value="TRY">Türk Lirası</MenuItem>
            </TextField>

        </div>
    )
}

export default MUISelect