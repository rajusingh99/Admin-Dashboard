import React, {  useState } from 'react';
import PropTypes from 'prop-types';
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Constant from '../Constants/Constant';

const SideNavItem = ({ icon, text }) => (
	<ListItemButton sx={{ pl: 4 }}>
	  <ListItemIcon>{icon}</ListItemIcon>
	  <ListItemText primary={text} />
	</ListItemButton>
  );

const SideNav = ({ children }) => {
	const [open, setOpen] = useState(false); 
	const [submenu, setSubmenu] = useState(false); 
  
	const handleClick = () => {
			setOpen(!open);
	};
	const handleSubMenu =()=>{
		setSubmenu(!submenu);
	}
  
	return (
	  <Box sx={{ display: 'flex' }} className="desktop-layout">
		<List
		  sx={{ width: '100%', maxWidth: 250, bgcolor: 'background.paper' }}
		  component="nav"
		  aria-labelledby="nested-list-subheader"
		>
		 {Constant.menuItem["admin"].map((item, key) => (
			<React.Fragment key={key}>
			  <ListItemButton onClick={handleClick} key={key}>
				<ListItemIcon>
				  <InboxIcon />
				</ListItemIcon>
				<ListItemText primary={item.title} />
				{open ? <ExpandLess /> : <ExpandMore />}
			  </ListItemButton>

			  <Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
				  {item.subMenu?.map((subItem, subKey) => {
					return<>
					<ListItemButton onClick={handleSubMenu} key={subKey}>
						<ListItemText primary={subItem.title} sx={{paddingLeft:'50px'}}/>
						{submenu ? <ExpandLess /> : <ExpandMore />}
				  	</ListItemButton>
						{ subItem?.subMenu?.length >0 && subItem?.subMenu.map((sItem,sKey)=>{
							return <SideNavItem key={sKey} text={sItem.title} /> 
						})}
					</>
				  }
				  )}
				</List>
			  </Collapse>
			</React.Fragment>
		  ))}
		</List>
		<Box component="main" sx={{ flexGrow: 1, p: { xs: 1, md: 4 }, mt: 7 }}>
		  {children}
		</Box>
	  </Box>
	);
  };
  

SideNav.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SideNav;
