
import { IPost } from "../models/IPost.ts";

type PostProps = {
    post: IPost;
};

export const PostComponent= ({post}:PostProps) => {
    return (
        <div>
            {post.id} {post.title}


            <div>{post.body}</div>

            <hr/>
        </div>
    );
};
