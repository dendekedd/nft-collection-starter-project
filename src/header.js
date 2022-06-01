import icon_a from "./public/icon-account.png"
import icon_w from "./public/icon-wallet.png"
import logo from "./public/logo.png"
import ham from "./public/icon-ham.png"
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import React from 'react';
import './styles/App.css';
import { Link } from 'react-router-dom';



const Header = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const handleDrawerToggle = () => {
      setDrawerOpen(!drawerOpen); // Drawer の開閉状態を反転
    };

    return (
    <div className="header">
        <div className="header-above">
            <Drawer variant="temporary" open={drawerOpen} onClose={handleDrawerToggle}>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary="About" secondary="hogehoge" />
                    </ListItem>
                </List>
            </Drawer>
            <div className="header-Ticketme">
                <p className="Title"><Link to="/"><img className="Logo" src={logo} alt="logo"/></Link></p>
                <div className="header-Icon">
                    <p><Link to="/account"><img className="icon-account" src={icon_a} alt="icon_account"/></Link></p>
                    <p><Link to="/wallet"><img className="icon-wallet" src={icon_w} alt="icon_wallet"/></Link></p>
                    <p><img className="icon-ham" src={ham} alt="icon_ham" onClick={handleDrawerToggle} /></p>
                </div>
            </div>
        </div>

        <a href="#buyticket" class="btn btn--circle btn--circle-c btn--shadow"><a>▼</a></a>
     </div>
    );
}

export default Header;