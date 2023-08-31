import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';


//const pages = ['Home', 'About', 'Website', 'Contact'];

export default function App() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className="App">
      <AppBar position="static" color='inherit'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Rubik Mono One',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#000',
                textDecoration: 'none',
              }}
            >
              R
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex'}}}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                //edge="start"
                color="inherit"
                onClick={handleOpenNavMenu}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Typography 
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'Rubik Mono One',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              R
            </Typography>

            <Box sx={{ flexGrow: 0}}>
            <Typography
              variant="h6"
              noWrap
              //component="a"
              //href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                //fontFamily: 'Rubik Mono One',
                //fontWeight: 700,
                //letterSpacing: '.3rem',
                color: '#000',
                textDecoration: 'none',
              }}
            >
              Portfolio
            </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      main
    </div>
  );
}