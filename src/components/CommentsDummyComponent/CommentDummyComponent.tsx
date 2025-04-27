import {ICommentDummy} from "../../models/ICommentDummy.ts";
import {FC} from "react";

import styles from './commentDummy.module.css'


type CommentdummyProps ={
    comment:ICommentDummy
}



export const CommentDummyComponent:FC<CommentdummyProps> = ({comment}) => {
    return (
        <div className={styles.wrapper}>
           <h4>{comment.user.fullName}   : {comment.body}</h4>
            
            <ul>
                <li>Post Id: {comment.postId}</li>
                <li>Likes: {comment.likes}</li>
            </ul>
        </div>
    );
};

// {
//     "id": 1,
//     "body": "This is some awesome thinking!",
//     "postId": 242,
//     "likes": 3,
//     "user": {
//     "id": 105,
//         "username": "emmac",
//         "fullName": "Emma Wilson"
// }