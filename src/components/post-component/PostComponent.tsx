import {PostModel} from "../../models/PostModel.ts";
import {FC} from "react";

import styles from'./Post.module.css'

type PostProps ={
    post:PostModel
}

export const PostComponent:FC<PostProps> = ({post:{title,body}}) => {
    return (
        <div className={styles.holder}>
            <h3>
                {title}
            </h3>
            <p>{body}</p>
        </div>
    );
};