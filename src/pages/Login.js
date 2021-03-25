import React, {useState} from 'react';

function Login() {
    const [isAuthenticated, toggleIsAuthenticated] = useState(true);

    return (
        <>
            <p>Dit is de inlogpagina. Klik op onderstaande knop om in te loggen.</p>
            <button onClick={() => {
                toggleIsAuthenticated(true)
            }}>Log in
            </button>
        </>
    )
}

export default Login;