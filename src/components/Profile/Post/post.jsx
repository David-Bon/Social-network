import React from "react";
import s from './post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={s.card}>
                <img  className={s.img} src="//venezuelaworkers.com/media/pic_folder/none/no-img.jpg" alt=""/>
                    <span>Fen</span>
                    <span className={s.cardTitle}>{props.text}</span>
                       <span className={s.likes}>{props.likes} likes</span>
                       <button className={s.likeButton}>Like</button>
            </div>
        </div>
    )


};

export default Post