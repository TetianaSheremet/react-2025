import {IComment} from "../models/IComment.ts";


type CommentProps ={
    comment: IComment
}

export const CommentComponent = ({comment}:CommentProps) => {
    return (
        <div>
            {comment.id} {comment.name}

            <div>{comment.body}</div>


            <hr/>
        </div>

    );
};
