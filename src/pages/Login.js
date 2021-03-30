import React from 'react';
import {Redirect} from "react-router-dom";
import {useForm} from "react-hook-form";
import users from '../data/users.json'

function Login({isAuthenticated, toggleIsAuthenticated}) {
    const {handleSubmit, register} = useForm();

    function onSubmit(data) {
        for (const user of users) {
            if (data.name === user.name) {
                toggleIsAuthenticated(true);
            }
                }
    }

    return (
        <>
            <p>Dit is de inlogpagina. Klik op onderstaande knop om in te loggen.</p>
            <p>Tip: bekijk het users.json-bestand om te zien met welke naam je kunt inloggen.</p>
            {!isAuthenticated &&
            <>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name" id="name">
                        Naam:
                        <input ref={register} type="text" id="name" name="name"/>
                    </label>
                </form>
                <button
                    onClick={handleSubmit(onSubmit)}
                >Log in
                </button>
            </>}
            {isAuthenticated && <Redirect to="/blogposts"/>}
        </>
    )
}

export default Login;