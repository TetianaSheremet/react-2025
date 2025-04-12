import {useEffect, useState} from "react";
import {CommentModel} from "../../models/CommentModel.ts";
import {loadComments} from "../../service/api.service.ts";
import {CommentComponent} from "../comment-component/CommentComponent.tsx";

export const CommentsComponent = () => {

    const[comments, setComments] = useState<CommentModel[]>([])

    useEffect(() => {
        async function fetchComments(){
            const allComments = await loadComments();
            setComments(allComments)
        }
        fetchComments();
    }, []);

    return (
        <div>

            {comments.map((comment)=>(<CommentComponent key={comment.id} comment = {comment}  />))}
        </div>
    );
};