import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { useAuth0 } from "@auth0/auth0-react";


function Header() {
    const { logout } = useAuth0();
    return (
        <div className='header_container'>
            <div className='header_left'>
                <img className='header_image' src='https://seeklogo.com/images/M/messages-ios-logo-8204B75A8E-seeklogo.com.png' />

                <div className='search_box'>
                    <SearchIcon className='search_icon' />
                    <input type='text' placeholder="Search User" />
                </div>
            </div>
            <div className='header_right'>
                <Button style={{ border: 'none' }} variant='outlined'>
                    HI, USER NAME
                </Button>
                <Button style={{ border: 'none' }} variant='outlined'>
                    HOME
                </Button>
                <Button style={{ border: 'none' }} variant='outlined'>
                    ABOUT US
                </Button>
                <Button style={{ border: 'none' }} variant='outlined'>
                    PROFILE
                </Button>
                <Button style={{ border: 'none' }} variant='outlined'>
                    DARK MODE
                </Button>
                <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}style={{ backgroundColor: '#2775B1', color: 'white' }} variant='outlined'>
                    LOGOUT
                </Button>
            </div>

        </div>
    )
}

export default Header