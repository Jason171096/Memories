import React from 'react'
import Post from './Post/Post'
import useStyles from './PostsStyle'
import { useSelector } from 'react-redux'

const Posts = () => {
    const posts = useSelector((state) => state.posts)
    const classes = useStyles()
    console.log(posts)
    return (
        <> 
            <h1 className="">Posts</h1>
            <Post />
            <Post />
        </>
    )
}

export default Posts
