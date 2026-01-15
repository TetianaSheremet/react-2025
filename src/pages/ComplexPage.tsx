import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {userActions} from "../slices/UserSlice.ts";
import {postActions} from "../slices/PostSlice.ts";
import {commentActions} from "../slices/CommentSlice.ts";
import {IUser} from "../models/IUser.ts";
import {IPost} from "../models/IPost.ts";
import {IComment} from "../models/IComment.ts";

export const ComplexPage = () => {


    const dispatch = useAppDispatch();


    const users = useAppSelector(state => state.userStoreSlice.users);
    const posts = useAppSelector(state => state.postStoreSlice.posts);
    const comments = useAppSelector(state => state.commentStoreSlice.comments);
    useEffect(() => {
        if (!users.length) {
            dispatch(userActions.loadUsers())
        }

        if (!posts.length) {
            dispatch(postActions.loadPosts())
        }

        if (!comments.length) {
            dispatch(commentActions.loadComments())
        }
    }, []);



    return (
        <div>
            {users.map((user: IUser) => {
                const userPosts = posts.filter((post: IPost) => post.userId === user.id);

                return (
                    <div key={user.id} style={{border: '1px solid #ccc', margin: 10}}>
                        <h2>{user.name}</h2>

                        {userPosts.map((post: IPost) => {
                            const postComments = comments.filter((comment: IComment) => comment.postId === post.id);

                            return (
                                <div key={post.id} >
                                    <h4>{post.body}</h4>

                                    {postComments.map((comment: IComment) => (
                                        <div key={comment.id} >
                                            {comment.body}
                                        </div>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );




}
