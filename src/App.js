import React, {useState} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
} from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Blogposts from "./pages/Blogposts";
import Blog from "./pages/Blog";
import posts from './data/posts.json';
import TopMenu from "./components/TopMenu";
import {Link} from 'react-router-dom';


function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(true);
    console.log(posts);

    return (

        <>
            <TopMenu/>

            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/login'>
                    <Login/>
                </Route>
                <Route path='/blogposts'>
                    <Blogposts/>
                </Route>
                <Route path='/blog/:id'>
                    <Blog/>
                </Route>
            </Switch>
        </>
    );
}

export default App;
