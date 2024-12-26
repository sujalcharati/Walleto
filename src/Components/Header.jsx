import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

export const Header= ()=>{

return (
    <AppBar position="static">
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
                {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
                Home
            </Typography>
            <Button color="inherit">Transactions</Button>
        </Toolbar>
    </AppBar>
);
}