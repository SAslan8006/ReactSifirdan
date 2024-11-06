import React, { useState } from 'react'
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
function MUICheckBox() {
    const [checked, setChecked] = useState(false);
    const submit = () => {
        if (!checked) {
            alert('Kullanım Koşullarını kabul etmelisiniz.')
        }
    }
    return (
        <div>
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Eğitim Durumu</FormLabel>
                <FormGroup>
                    <FormControlLabel labelPlacement='end' value="ilkokul" control={<Checkbox defaultChecked />} label="İlkokul" />
                    <FormControlLabel labelPlacement='end' value="ortaokul" control={<Checkbox />} label="Ortaokul" />
                    <FormControlLabel labelPlacement='end' value="lise" control={<Checkbox />} label="Lise" />
                </FormGroup>
            </FormControl>

            <FormControl>
                <FormGroup>
                    <FormControlLabel
                        labelPlacement='end'

                        control={<Checkbox value={checked} onChange={(e) => setChecked(e.target.checked)} defaultChecked />}
                        label="Kullanım Koşullarını kabul ediyorum." />
                </FormGroup>
                <Button onClick={submit} variant='contained'>Kaydet</Button>
            </FormControl>
        </div>
    )
}

export default MUICheckBox