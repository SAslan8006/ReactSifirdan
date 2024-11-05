import { InputAdornment, TextField } from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';
function MUITextFiedl() {
    const currencies = [
        {
            value: 'USD',
            label: '$',
        },
        {
            value: 'EUR',
            label: '€',
        },
        {
            value: 'BTC',
            label: '฿',
        },
        {
            value: 'JPY',
            label: '¥',
        },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px', marginBottom: '10px' }}>
            <div>
                <TextField label="Name" variant="outlined" />
            </div>
            <div>
                <TextField label="Name" variant="standard" color="success" />
            </div>
            <div>
                <TextField label="Name" variant="standard" color="success" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
                <TextField slotProps={{
                    input: {
                        startAdornment: (<InputAdornment position="start"> <PersonIcon /> </InputAdornment>
                        ),
                    },
                }} label="Şifre" variant="standard" color="success" helperText="This is a helper text" />
            </div>
            <TextField
                disabled  //İsmi kilitlemek için disabled kullanılır
                id="outlined-disabled"
                label="Disabled"
                defaultValue="Hello World"
            />
            <TextField
                id="input-with-icon-textfield"
                label="TextField"
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <PersonIcon />
                            </InputAdornment>
                        )
                    },
                }}
                variant="standard"
            />
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
            />
            <TextField
                id="outlined-read-only-input"
                label="Read Only"
                defaultValue="Hello World"
                slotProps={{
                    input: {
                        readOnly: true, //Yanlızca okunabilir yapmak için readOnly kullanılır
                    },
                }}
            />
            <div>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    defaultValue="EUR"
                    helperText="Please select your currency"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="outlined-select-currency-native"
                    select
                    label="Native select"
                    defaultValue="EUR"
                    slotProps={{
                        select: {
                            native: true,
                        },
                    }}
                    helperText="Please select your currency"
                >
                    {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
            </div>
        </div>
    )
}

export default MUITextFiedl