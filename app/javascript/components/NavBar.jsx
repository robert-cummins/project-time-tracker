import React from "react";
import Logout from "./auth/Logout";
import { useSelector} from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';


const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const loggedIn = useSelector(state => state.auth.loggedIn);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor: '#131222'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Mobile Menu (Burger Icon) */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="mobile-menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="mobile-menu-appbar"
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
            >
              {loggedIn ? (
                <Logout />
              ) : (
                [
                  <MenuItem key="login">
                    <Button
                      href={"/"}
                      variant="contained"
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      Login
                    </Button>
                  </MenuItem>,
                  <MenuItem key="signup">
                    <Button
                      href={"/signup_page"}
                      variant="contained"
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      SignUp
                    </Button>
                  </MenuItem>
                ]
              )}
            </Menu>
          </Box>
  
          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {loggedIn ? <Logout /> : (
              <>
                <Button
                  key={"Login"}
                  href={"/"}
                  color="inherit"
                >
                  Login
                </Button>
                <Button
                  key={"Signup"}
                  href={"/signup_page"}
                  color="inherit"
                >
                  Signup
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;