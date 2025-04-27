import {ICommentJson} from "../../models/ICommentJson.ts";
import {FC} from "react";
import styles from './commentJson.module.css'
type CommentJsonProps ={
    comment:ICommentJson
}

export const CommentJsonComponent:FC<CommentJsonProps> = ({comment}) => {
    return (
        <div className={styles.wrapper}>
            <h4 className={styles.header}>{comment.id}---{comment.name}</h4>
            <p>{comment.body}</p>

          <p>{comment.email}</p>

        </div>
    );
};