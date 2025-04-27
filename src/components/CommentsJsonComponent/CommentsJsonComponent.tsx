import {useEffect, useState} from "react";
import { getAll } from "../../services/general.api.service";
import {ICommentJson} from "../../models/ICommentJson.ts";
import {CommentJsonComponent} from "./CommentJsonComponent.tsx";




export const CommentsJsonComponent = () => {

const[comments,setComments]=useState<ICommentJson[]>([])
    useEffect((

    )=>{
        getAll<ICommentJson[]>('json','comments').then(value =>setComments(value) )
    },[])
    return (
        <div>
            {comments.map((comment) => (
                <CommentJsonComponent key={comment.id} comment={comment}/>

            ))}
        </div>
    );
};