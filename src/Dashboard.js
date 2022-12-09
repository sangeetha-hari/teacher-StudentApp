import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { AddStudent } from './AddStudent';
import { DisplayStudent } from './DisplayStudent';

import { DisplayTeachers } from './DisplayTeachers';
import AddTeacher from './AddTeacher';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ApprovalIcon from '@mui/icons-material/Approval';

import {Navigate, Routes, Route,useNavigate} from 'react-router-dom';

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
// To keep track of choice selected by user
  const [choice, setChoice]=React.useState(0);
  useEffect(() => {
    console.log("This is:", choice);
  }, [choice]);
 const navigate= useNavigate();

 function setAddstudent(index)
 {
  setChoice(0) ; navigate("/student/add",+index);
 }
 function setDisplaystudent(index)
 {
  setChoice(1) ; navigate("/student/display",+index);
 }
 function setAddTeacher(index)
 {
  setChoice(2) ; navigate("/teacher/add",+index);
 }
 function setDisplaysTeachers(index)
 {
  setChoice(3) ; navigate("/teacher/display",+index);

 }

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Add Student', 'Display Student', 'Add Teacher', 'Display Teacher'].map((text, index) => (
          <ListItem key={text} disablePadding  onClick={()=> { 
            index===0? setAddstudent(index):
            index===1? setDisplaystudent(index):
            index===2? setAddTeacher(index):
            setDisplaysTeachers(index)
          }}>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <AssignmentIndIcon /> : <ApprovalIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
           Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
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
      {/* <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar /> */}
        {/* <Typography paragraph>
         {}
        </Typography> */}
        {/* <Typography paragraph>
            {choice === 0? <AddStudent/>: 
      choice === 1 ? <DisplayStudent/> :

    //  choice === 2 ? <AddTeachers/>
     choice === 2 ? <Trial/>
     : <DisplayTeachers/>
}
          
        </Typography> */}
      {/* </Box> */}
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;



