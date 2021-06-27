import React from 'react';
import SidebarOption from './SidebarOption';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from "@material-ui/core";

import './Sidebar.css';


const Sidebar = () => {
  return (
    <div className = "sidebar">
      {/* Twitter icon */}
      <TwitterIcon className="sidebar__twitterIcon"/>
      {/* SidebarOption */}
      <SidebarOption active Icon={ HomeIcon } text="Home"/>
      {/* SidebarOption */}
      <SidebarOption Icon={ SearchIcon } text="Explore"/>
      {/* SidebarOption */}
      <SidebarOption Icon={ NotificationsNoneIcon } text="Notifications"/>
      {/* SidebarOption */}
      <SidebarOption Icon={ MailOutlineIcon } text="Messages"/>
      {/* SidebarOption */}
      <SidebarOption Icon={ BookmarkBorderIcon } text="Bookmarks"/>
      {/* SidebarOption */}
      <SidebarOption Icon={ ListAltIcon } text="Lists"/>
      {/* SidebarOption */}
      <SidebarOption Icon={ PermIdentityIcon } text="Profile"/>
      {/* SidebarOption */}
      <SidebarOption Icon={ MoreHorizIcon } text="More"/>
      {/* SidebarOption */}

      {/* Button -> Tweet */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
    </div>
  );
}

export default Sidebar;
