import React, {useState} from 'react';
import {Redirect, useParams} from 'react-router-dom';
import posts from '../data/posts.json'

function searchData(link) {
    let title = ""
    let content = "";
    for (const post of posts) {
        if (post.id === link.id) {
            title = post.title;
            content = post.content;
        }
    }
    return <><h1>{title}</h1><p>{content}</p></>
}

    function Blog({isAuthenticated}) {
    const url=useParams()

        return (<>
                {!isAuthenticated ? <Redirect to="/home"/> :
                    searchData(url)}
            </>
        )
    }

    export default Blog;