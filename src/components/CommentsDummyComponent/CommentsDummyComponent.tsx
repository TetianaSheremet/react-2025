import {useEffect, useState} from "react";
import {ICommentDummy} from "../../models/ICommentDummy.ts";
import {BaseDummyModel} from "../../models/BaseDummyModel.ts";
import {getAll} from "../../services/general.api.service.ts";
import {CommentDummyComponent} from "./CommentDummyComponent.tsx";


type CommentsDummyResponse ={
    comments:ICommentDummy[]
} & BaseDummyModel

export const CommentsDummyComponent = () => {

    const[comments, setComments]= useState<ICommentDummy[]>([])

    useEffect(()=>{
        getAll<CommentsDummyResponse>("dummy","comments").then(({comments})=>setComments(comments))
    },[])

    return (
        <div>

            {comments.map((comment) => (
                <CommentDummyComponent key={comment.id} comment={comment}/>
            ))}
        </div>
    );
};