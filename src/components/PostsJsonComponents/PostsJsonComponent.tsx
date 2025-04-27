import {IPostJson} from "../../models/IPostJson.ts";
import {useEffect, useState} from "react";
import {getAll} from "../../services/general.api.service.ts";
import {PostJsonComponent} from "./PostJsonComponent.tsx";


export const PostsJsonComponent= () => {


    const[posts,  setPosts]=useState<IPostJson[]>([])

    useEffect(()=>{
        getAll<IPostJson[]>('json','posts').then((value) => setPosts(value));

    }, [])
    return (
        <div>
            {posts.map((post) => (
                <PostJsonComponent key={post.id} post={post}/>
            ))}
        </div>
    );
};