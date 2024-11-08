import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


function MUIDialog() {
    const [open, setOpen] = React.useState(false);
    const [cevap, setCevap] = React.useState('Hayır');
    const handleClose = () => {
        setOpen(false);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const type = {
        YES: "YES",
        NO: "NO",
    }
    const result = (typePara) => {
        console.log("typePara:", typePara)
        if (typePara === type.YES) {
            console.log(typePara)

        }
        setOpen(false);
    }
    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Open dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle id="alert-dialog-title">Soru</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Merhaba Merhaba Merhaba
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => result(type.NO)}>İptal</Button>
                    <Button onClick={() => result(type.YES)} color="primary">Evet</Button>
                </DialogActions>
            </Dialog>
        </div >
    )
}

export default MUIDialog