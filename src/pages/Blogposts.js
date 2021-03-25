import React from 'react';
import posts from '../data/posts.json'
import {Route, Switch, Link, useParams} from "react-router-dom";

function Blogposts() {
    return (
        <>
            <p>Het totaal aantal blogposts is: {posts.length}.</p>
            <p>Overzicht van alle blogs:</p>
            <ol>
            {posts.map((post)=> {
                return (
                    <Link to='/blog/:id'>
                    <li key={post.id}> Title: {post.title}</li>
                    </Link>)
            })}
            </ol>
        </>
    )
}

export default Blogposts;