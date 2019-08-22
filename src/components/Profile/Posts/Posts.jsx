import React from 'react';
import style from './Posts.module.css';
import Post from "./Post/Post";

const Posts = () => {
    return (
        <section className={style.posts}>
            <Post title={'Hello'} content={'Some text'}/>
            <Post title={'Title 3'} content={'Another content text'}/>
        </section>
    );
};

export default Posts;