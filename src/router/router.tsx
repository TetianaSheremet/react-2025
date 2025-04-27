import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {UsersJsonPage} from "../pages/UsersJsonPage.tsx";
import {UsersDummyPage} from "../pages/UsersDummyPage.tsx";
import {PostsJsonPage} from "../pages/PostsJsonPage.tsx";
import {PostsDummyPage} from "../pages/PostsDummyPage.tsx";
import {CommentsJsonPage} from "../pages/CommentsJsonPage.tsx";
import {CommentsDummyPage} from "../pages/CommentsDummyPage.tsx";

export const routes = createBrowserRouter([
    {
              path:"/", element: <MainLayout/>,children:[
            {
                path:"users/jsonplaceholder", element:<UsersJsonPage/>
            },
            { path:"users/dummyjson", element:<UsersDummyPage/>},
            {path:"posts/jsonplaceholder", element: <PostsJsonPage/>},
            {path:"posts/dummyjson",element:<PostsDummyPage/>},
            {path:"comments/jsonplaceholder",element:<CommentsJsonPage/>},
            {path:"comments/dummyjson", element:<CommentsDummyPage/>},



        ]

    }
])