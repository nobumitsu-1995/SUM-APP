import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Avatar, IconButton, ListItemIcon, Menu, MenuItem } from '@material-ui/core';
import { Logout, Settings } from '@mui/icons-material';
import { useDispatch, useSelector } from "react-redux";
import { getUserName, getUserIcon } from "../../reducks/users/selectors";
import { push } from 'connected-react-router';

const HeaderUserMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const { logout } = useAuth0();
    const selector = useSelector(state => state);
    const username = getUserName(selector);
    const icon = getUserIcon(selector);
    const dispatch = useDispatch();

    return (
        <>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <Avatar alt={username}　src={icon}/>
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => {
                    handleClose()
                    dispatch(push('/user'))
                    
                }}>
                    <ListItemIcon>
                        <Avatar alt={username}　src={icon}/>
                    </ListItemIcon>
                    {username}
                </MenuItem>
                <MenuItem divider={true} onClick={() => {
                    handleClose()
                    dispatch(push('/user/edit'))
                }}>
                    <ListItemIcon>
                        <Settings fontSize="small"/>
                    </ListItemIcon>
                    ユーザー情報設定
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        logout({ returnTo: window.location.origin });
                    }}
                >
                    <ListItemIcon>
                        <Logout fontSize="small"/>
                    </ListItemIcon>
                    ログアウト
                </MenuItem>
            </Menu>
        </>
    );
}

export default HeaderUserMenu;