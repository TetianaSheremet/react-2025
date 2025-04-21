import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {UsersJsonComponent} from "../components/users-json/UsersJsonComponent.tsx";
import {UsersDummyComponent} from "../components/users-dummy/UsersDummyComponent.tsx";
import {PostsJsonComponent} from "../components/posts-json/PostsJsonComponent.tsx";
import {PostsDummyComponent} from "../components/posts-dummy/PostsDummyComponent.tsx";
import {CommentsDummyComponent} from "../components/comments-dummy/CommentsDummyComponent.tsx";
import {CommentsJsonComponent} from "../components/comments-json/CommentsJsonComponent.tsx";




export const routes = createBrowserRouter([
    {
        path:"/", element:<App/>, children:[
            { path:"users/jsonplaceholder", element:<UsersJsonComponent/>},
            {path:"users/dummyjson", element:<UsersDummyComponent/>},
            {path:"posts/jsonplaceholder", element:<PostsJsonComponent/>},
            {path:"posts/dummyjson", element:<PostsDummyComponent/>},
            {path:"comments/jsonplaceholder", element:<CommentsJsonComponent/>},
            {path:"comments/dummyjson", element:<CommentsDummyComponent/>}]
    }]);