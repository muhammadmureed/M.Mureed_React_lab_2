import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'Features', href: '#features' },
    { title: 'Contact', href: '#contact' },
  ]

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <AppBar component="header" position="sticky" color="default" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <RocketLaunchIcon color="primary" />
            <Typography variant="h6" fontWeight="bold" color="text.primary">
              DevLaunch
            </Typography>
          </Stack>

          <Box component="nav" aria-label="Main Navigation" sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {navLinks.map((item) => (
              <Button key={item.title} color="inherit" href={item.href}>
                {item.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button variant="contained" color="primary" href="#contact">
              Get Started
            </Button>
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', pt: 2 }}>
          <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold' }}>
            DevLaunch
          </Typography>
          <List>
            {navLinks.map((item) => (
              <ListItem key={item.title} disablePadding>
                <ListItemButton component="a" href={item.href} sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  )
}
