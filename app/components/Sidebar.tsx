import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import AddIcon from '@mui/icons-material/Add'
import MenuIcon from '@mui/icons-material/Menu'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EditIcon from '@mui/icons-material/Edit'
import GroupsIcon from '@mui/icons-material/Groups'
import { useEffect, useState, type ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const handleDrawerClose = () => {
    setIsClosing(true)
    setMobileOpen(false)
  }

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false)
  }

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen)
    }
  }
  const drawerWidth = 100

  const [locationText, setLocationText] = useState('')

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setLocationText(location.pathname.split('/')[1])
  }, [location])

  interface NavListItem {
    key: number
    icon: ReactNode
    text: string
  }

  const listItems: NavListItem[] = [
    {
      key: 0,
      icon: <MenuIcon />,
      text: '',
    },
    {
      key: 1,
      icon: <AddIcon />,
      text: '',
    },
    {
      key: 2,
      icon: <LocationOnIcon />,
      text: 'Trips',
    },
    {
      key: 3,
      icon: <EditIcon />,
      text: 'Diary',
    },
    {
      key: 4,
      icon: <GroupsIcon />,
      text: 'Friends',
    },
  ]

  const drawer = (
    <List component="nav" aria-label="main mailbox folders">
      {listItems.map((item) => (
        <ListItem
          key={item.key}
          disablePadding
          className="flex flex-col h-20 items-center justify-center ..."
        >
          <ListItemButton
            selected={
              item.text !== '' && locationText === item.text.toLowerCase()
            }
            onClick={() => navigate(`/${item.text.toLowerCase()}`)}
            className="flex flex-col h-20 items-center justify-center ..."
          >
            <ListItemIcon className="flex-auto flex-row justify-center items-center ...">
              {item.icon}
            </ListItemIcon>
            {item.text && (
              <ListItemText
                primary={item.text}
                className="flex-auto justify-center items-center ..."
              />
            )}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ ml: 2, mt: 2, display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onOpen={() => {}}
        onClose={handleDrawerClose}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        slotProps={{
          root: {
            keepMounted: true, // Better open performance on mobile.
          },
        }}
      >
        {drawer}
      </SwipeableDrawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  )
}
