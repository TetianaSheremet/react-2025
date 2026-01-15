import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../redux/store.ts";

import {IPost} from "../models/IPost.ts";
import {postActions} from "../slices/PostSlice.ts";
import {PostComponent} from "./PostComponent.tsx";



export const PostsComponent = () => {


    const dispatch = useAppDispatch();

    const posts = useAppSelector((state)=>state.postStoreSlice.posts)

    useEffect(() => {
        dispatch(postActions.loadPosts())
    }, []);


    return (
        <>
            {posts.map((post: IPost) => (<PostComponent key = {post.id} post = {post}/>))}
        </>

    );
};
