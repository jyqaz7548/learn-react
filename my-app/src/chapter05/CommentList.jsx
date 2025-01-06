import React, { useState, useEffect } from 'react';
import Comment from './Comment';


const comments = [
    {
        name:"유준영",
        comment:"앙 기모딱따구리",
    },
    {
        name:"크크루삥뽕",
        comment:"이이이이잉 기뮤링",
    },
    {
        name:"으하하",
        comment:"으하하하하하하하하",
    },
]




function CommentList(props){
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    );
}

export default CommentList;