import React from "react";
import s from './post.module.css'

const Post = () => {
    return (
        <div>
            <div className={s.card}>
                <img  className={s.img} src="//venezuelaworkers.com/media/pic_folder/none/no-img.jpg" alt=""/>
                    <span>Fen</span>
                    <span className={s.cardTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis quis rem. Corporis dignissimos doloremque esse, eveniet expedita fugit, molestias odio odit pariatur sed ut voluptas. Iste nobis odio odit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, cumque ducimus excepturi facilis in ipsa ipsam sapiente. Adipisci debitis deleniti dolor eligendi voluptatibus? Aspernatur assumenda at dignissimos laboriosam minus nesciunt.</span>
                       <span className={s.likes}>1 likes</span>
                       <button className={s.likeButton}>Like</button>
            </div>
        </div>
    )


};

export default Post