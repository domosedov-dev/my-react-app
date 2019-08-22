import React from 'react';
import style from './Post.module.css';

const Post = (props) => {

    console.dir(props);
    return (
        <article className={style.article}>
            <p className={style.title}>{props.title}</p>
            <p className={style.content}>{props.content}</p>
        </article>
    );
};

export default Post;