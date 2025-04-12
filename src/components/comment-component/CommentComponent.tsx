
import {CommentModel} from "../../models/CommentModel.ts";
import {FC} from "react";
import styles from './comment.module.css'

type CommentProps ={
    comment:CommentModel;
}



export const CommentComponent: FC<CommentProps>= ({comment:{name,email,body}}) => {

    return (
        <div className={styles.commentHolder}>
            <h2>{name}</h2>
            <h3>{body}</h3>
            <p>{email}</p>

        </div>
    );
};