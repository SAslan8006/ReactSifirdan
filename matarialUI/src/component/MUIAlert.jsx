import Alert from '@mui/material/Alert'
import React from 'react'
import { AlertTitle } from '@mui/material'

export default function MUIAlert() {
    return (
        <div style={{ padding: '20px' }}>
            <Alert sx={{ width: '400px' }} severity='success'>Bilgilendirme Mesajı</Alert>
            <Alert sx={{ width: '400px' }} severity='error'>Bilgilendirme Mesajı</Alert>
            <Alert sx={{ width: '400px' }} severity='success' variant='filled'>Bilgilendirme Mesajı</Alert>
            <Alert sx={{ width: '400px' }} severity='error' variant='outlined'>Bilgilendirme Mesajı</Alert>
            <Alert
                sx={{ width: '400px' }}
                severity='error'
                variant='outlined'><AlertTitle>Bilgilendirme Mesajı</AlertTitle></Alert>

        </div>
    )
}
