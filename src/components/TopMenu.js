import React from 'react';
import {NavLink} from 'react-router-dom';

function TopMenu({isAuthenticated, toggleIsAuthenticated}) {

    function handleClick() {
        toggleIsAuthenticated(false);
    }

    return (
        <nav>
            <ul>
                <NavLink to='/' exact activeClassName="active-link">
                    <li>Home</li>
                </NavLink>
                {isAuthenticated &&
                <NavLink to='/' exact activeClassName="active-link">
                    <li onClick={() => handleClick()}
                    >Log uit</li>
                </NavLink>
                }
                {!isAuthenticated &&
                    <NavLink to='/login' activeClassName="active-link">
                        <li>Log in</li>
                    </NavLink>
                }
                {isAuthenticated &&
                <NavLink to='/blogposts' activeClassName="active-link">
                    <li>Blogposts</li>
                </NavLink>
                }
                <NavLink to='/blog' activeClassName="active-link">
                    <li>Blog</li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default TopMenu;
