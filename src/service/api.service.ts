import {TodoModel} from "../models/TodoModel.ts";
import {PostModel} from "../models/PostModel.ts";
import {CommentModel} from "../models/CommentModel.ts";

const endpointTodos= import.meta.env.VITE_API_BASE_URL + '/todos'
const endpointPosts = import.meta.env.VITE_API_BASE_URL + '/posts'
const endpointComments = import.meta.env.VITE_API_BASE_URL + '/comments'

export const loadTodos = async ():Promise<TodoModel[]> =>{

    return await fetch(endpointTodos).then(value => value.json())
}


export const loadPosts = async ():Promise<PostModel[]>=>{
    return await fetch(endpointPosts).then(value=>value.json())
}


export const loadComments = async ():Promise<CommentModel[]>=>{
    return await fetch(endpointComments).then(value=>value.json())
}
