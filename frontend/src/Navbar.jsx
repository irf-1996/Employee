import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            {/* Your icon button content */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Button component={Link} to="/empform" style={{ color: 'white', textDecoration: 'none' }}>
            Add
          </Button>
          <Button component={Link} to="/view" style={{ color: 'white', textDecoration: 'none' }}>
            View
          </Button>
          <Button color="inherit" component={Link} to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
