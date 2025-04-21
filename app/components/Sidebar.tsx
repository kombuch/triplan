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
import type { ReactNode } from 'react'

const drawerWidth = 100

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

export default function Sidebar() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          borderWidth: 0,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        {listItems.map((item) => (
          <ListItem
            key={item.key}
            disablePadding
            className="flex flex-col h-20 items-center justify-center ..."
          >
            <ListItemButton className="flex flex-col h-20 items-center justify-center ...">
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
    </Drawer>
  )
}
