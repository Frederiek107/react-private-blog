import React from 'react';
import {Redirect} from "react-router-dom";
import {useForm} from "react-hook-form";
import users from '../data/users.json'

function Login({isAuthenticated, toggleIsAuthenticated}) {
    const {handleSubmit, register}=useForm();

    function onSubmit(data) {
        console.log(data);
    }

    function handleClick() {
        toggleIsAuthenticated(true);
    }

    return (
        <>
            <p>Dit is de inlogpagina. Klik op onderstaande knop om in te loggen.</p>
            {!isAuthenticated &&
            <>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name" id="name">
                        Naam:
                        <input ref={register} id="name"/>
                    </label>
                </form>
                <button
                    onClick={() => handleClick()}
                >Log in
                </button>
            </>}
            {isAuthenticated && <Redirect to="/blogposts"/>}
        </>
    )
}

export default Login;