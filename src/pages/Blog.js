import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

function Blog() {
    const [isAuthenticated, toggleIsAuthenticated] = useState(true);

    return (
        <>
            {!isAuthenticated ? <Redirect to="/home" /> :
            <p>Hier komt de juiste blogpost te staan
            </p>}
        </>
    )
}

export default Blog;