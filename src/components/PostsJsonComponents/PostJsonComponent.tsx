import {FC} from "react";
import {IPostJson} from "../../models/IPostJson.ts";

import styles from './postjson.module.css'

type PostJsonProps ={
    post: IPostJson
}
export const PostJsonComponent:FC<PostJsonProps> = ({post}) => {
    return (
        <div className={styles.wrapper}>
           <h5 className={styles.heading}>{post.id}:  {post.title}</h5>
            <br/>

            <p className={styles.body}> {post.body}</p>

        </div>
    );
};