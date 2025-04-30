import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";

import {CommentsLayout} from "../layouts/CommentsLayout.tsx";
import {CommentsJsonPage} from "../pages/CommentsJsonPage.tsx";
import {CommentsDummyPage} from "../pages/CommentsDummyPage.tsx";

import {PostsLayout} from "../layouts/PostsLayout.tsx";
import {PostsJsonPage} from "../pages/PostsJsonPage.tsx";
import {PostsDummyPage} from "../pages/PostsDummyPage.tsx";

import {UsersLayout} from "../layouts/UsersLayout.tsx";
import {UsersDummyPage} from "../pages/UsersDummyPage.tsx";
import {UsersJsonPage} from "../pages/UsersJsonPage.tsx";


export const routes = createBrowserRouter([
    {
              path:"/", element: <MainLayout/>,children:[

            {
                path:"users",element:<UsersLayout/>,children:[

                    {path:"jsonplaceholder",element:<UsersJsonPage/>},
                    {
                        path:"dummyjson",element: <UsersDummyPage/>
                    }
                ]
            },


             {path:"posts",element:<PostsLayout/>,children:[

                     {path:"jsonplaceholder",element:<PostsJsonPage/>},
                     {
                         path:"dummyjson",element: <PostsDummyPage/>
                     }
                 ]},

            {
                path:"comments",element:<CommentsLayout/>,children:[
                    {path:"jsonplaceholder",element:<CommentsJsonPage/>},
                    {path:"dummyjson",element:<CommentsDummyPage/>}
                ]}

        ]

    }
])