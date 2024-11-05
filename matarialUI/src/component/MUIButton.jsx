import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton } from '@mui/material';

function MUIButton() {
    return (
        <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
            <Button variant="contained" color="success" startIcon={<DeleteIcon />}>Delete</Button>
            <IconButton onClick={() => alert('clicked')} size="small" aria-label="delete" color="error">
                <DeleteIcon />
            </IconButton>
        </div>
    )
}

export default MUIButton