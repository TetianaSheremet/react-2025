import {useEffect, useState} from "react";
import {PostModel} from "../../models/PostModel.ts";

import {loadPosts} from "../../service/api.service.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";

export const PostsComponent = () => {

    const [posts, setPosts]= useState<PostModel[]>([])

    useEffect(() => {

        async function fetchPosts (){
            const allPosts= await loadPosts()
            setPosts(allPosts);
        }
        fetchPosts();

    }, []);
    return (
        <div>
            {posts.map((post) =>(<PostComponent post={post} key = {post.id}/>))}
        </div>
    );
};