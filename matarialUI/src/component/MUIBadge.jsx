import React from 'react'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));
function MUIBadge() {
    return (
        <div style={{ width: '80%', gap: '10px', marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="secondary">
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
            <Badge sx={{ color: 'red', marginTop: '40px' }} color="primary"
                badgeContent={15} max={9}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                <ShoppingCartIcon />
            </Badge>
        </div>
    )
}

export default MUIBadge