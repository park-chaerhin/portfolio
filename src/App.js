import React from 'react';

import { AppBar, Box, Toolbar, IconButton, Typography, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

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
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            {/* desktop */}
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
            <Box sx={{ flexGrow: 0}}>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  color: '#000',
                  textDecoration: 'none',
                }}
              >
                Portfolio
              </Typography>
            </Box>

            {/* mobile */}
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
          </Toolbar>
        </Container>
      </AppBar>
      main
    </div>
  );
}