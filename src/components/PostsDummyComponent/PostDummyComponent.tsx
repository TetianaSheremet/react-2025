import {FC} from "react";
import {IPostDummy} from "../../models/IPostDummy.ts";
import styles from './postDummy.module.css'


type PostDummyProps ={
    post:IPostDummy
}

export const PostDummyComponent:FC<PostDummyProps> = ({post}) => {
    return (
        <div className={styles.wrapper}>
                <h4>
                    {post.id} {post.title}
                </h4>
           <p>{post.body}</p>

            <ul> {post.tags.map(tag=><li>{tag}</li>)}</ul>

           </div>
    );
};