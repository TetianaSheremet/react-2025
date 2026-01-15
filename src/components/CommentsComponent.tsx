import {commentActions} from "../slices/CommentSlice.ts";
import {IComment} from "../models/IComment.ts";
import {useAppSelector} from "../redux/store.ts";
import {useAppDispatch} from "../redux/store.ts";
import {CommentComponent} from "./CommentComponent.tsx";
import {useEffect} from "react";






export const CommentsComponent = () => {

    const dispatch = useAppDispatch();
    const comments = useAppSelector((state)=>state.commentStoreSlice.comments)
    useEffect(() => {
        dispatch(commentActions.loadComments())
    }, []);
    return (
        <>{comments.map((comment: IComment) => (<CommentComponent key = {comment.id} comment = {comment}/>))}</>
    );
};
