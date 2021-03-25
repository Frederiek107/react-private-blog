import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function TopMenu() {
    const [isAuthenticated, toggleIsAuthenticated] = useState(true);

    return (
        <nav>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                {isAuthenticated &&
                <Link to='/'>
                    <li onClick={() =>{toggleIsAuthenticated(false)}}>Log uit</li>
                </Link>
                }
                {!isAuthenticated &&
                    <Link to='/login'>
                        <li>Log in</li>
                    </Link>
                }
                {isAuthenticated &&
                <Link to='/blogposts'>
                    <li>Blogposts</li>
                </Link>
                }
                <Link to='/blog'>
                    <li>Blog</li>
                </Link>
            </ul>
        </nav>
    )
}

export default TopMenu;
