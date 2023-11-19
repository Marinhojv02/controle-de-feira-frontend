import React from 'react';
import './Navbar.scss';
import { useUser } from '../../setup/UserContext'; // Import the user context or hook

const NavBar = () => {
    const { user, logout } = useUser();

    const handleLogout = () => {
        logout();
    };

    return (
        <div className='navbar'>
            <div className='page-info'>
                <a className='link' href='/'>Home</a>
                {user && (
                    <>
                        <a className='link' href='/houses/create'>Create House</a>
                        <a className='link' href='/houses/view-houses'>View Houses</a>
                    </>
                )}
            </div>

            <div className='user-info'>
                {user ? (
                    <>
                        <a className='link' href='/'>
                            {user.name}
                        </a>
                        <a className='link' href='/' onClick={handleLogout}>
                            Logout
                        </a>
                    </>
                ) : (
                    <>
                        <a className='link' href='/register'>
                            Register
                        </a>
                        <span className='link'>/</span>
                        <a className='link' href='/login'>
                            Login
                        </a>
                    </>
                )}
            </div>
        </div>
    );
};

export default NavBar;
