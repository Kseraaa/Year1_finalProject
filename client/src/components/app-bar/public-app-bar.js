import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import './hover-underline.css';

import Stack from '@mui/material/Stack';

document.body.className = "AnErrorHasOccured";

const PublicAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const navigate = useNavigate();
        
return (
            <AppBar position="static" color='grey'>
                <Container maxWidth="x1">
                    <Toolbar disableGutters>

                            {/* FANCIER button */}
                            <Button 
                                onClick={() => {navigate("/public");}}
                            >
                                <Avatar
                                    sx={{ width: 70, height: 65 }}
                                    variant="square"
                                    src="/img/fancierlogo1.png"
                                />
                                <Avatar
                                    sx={{ width: 130, height: 65 }}
                                    variant=""
                                    src="/img/fancierlogo2.png"
                                />
                            </Button> 

                        {/* Box for menu (when minimized window) */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            
                            {/* menuicon */}
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>

                            {/* menu */}
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Box onClick={() => {navigate("/public");}}>
                                        <Typography textAlign="center" color="black">กิจกรรม</Typography>
                                    </Box>
                                </MenuItem>

                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Box onClick={() => {navigate("/publiccontact");}}>
                                        <Typography textAlign="center" color="black">ติดต่อ</Typography>
                                    </Box>
                                </MenuItem>

                            </Menu>
                        </Box>

                        {/* FANCIER button (minimized window) */}
                        <Button onClick={() => {navigate("/public");}}>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                                color="black"
                            >
                                Fancier
                            </Typography>
                        </Button>

                        {/* box for app bar buttons */}
                            <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }} className="hover-underline">
                                <nav>
                                    <a href='/public'>Activities</a>
                                    <a href='/publiccontact'>Contact</a>
                                </nav>

                                    {/* <Button
                                        onClick= {() => {navigate("/public");}}
                                        sx={{ fontSize: 23, fontWeight: 500, mx: 2 ,my: 2, color: 'black', display: 'block' }}
                                    >   
                                        กิจกรรม
                                    </Button>


                                    <Button
                                        onClick= {() => {navigate("/publiccontact");}}
                                        sx={{ fontSize: 23, fontWeight: 500, mx: 2 ,my: 2, color: 'black', display: 'block' }}
                                    >   
                                        ติดต่อ
                                    </Button> */}

                                    
                                </Box>
                        {/* ปุ่มสมัครสมาชิก */}                        
                        <Box sx={{ flexGrow: 0 }} position="right">
                            <Stack spacing={2} direction="row">
                                <Box onClick={() => {navigate("/login");}}>
                                <Button variant="contained">LOGIN</Button>
                                </Box>
                            </Stack>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
    );
};
export default PublicAppBar;