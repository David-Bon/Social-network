import React from "react";
import './post.css'

const Post = () => {
    return (
        <div>
            <div className="card flex">
                <div className="card-header">
                    Fen
                </div>
                <div className="card-body">
                    <h4 className="card-title">Special title treatment</h4>

                    <div className='d-flex justify-content-end'><div className='likes'><p>1 people likes that</p></div> <button className='btn btn-outline-secondary'>Like</button></div>

                </div>
            </div>
        </div>
    )


};

export default Post