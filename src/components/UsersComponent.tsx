import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../redux/store.ts";

import {IUser} from "../models/IUser.ts";
import {userActions} from "../slices/UserSlice.ts";
import {UserComponent} from "./UserComponent.tsx";

export const UsersComponent = () => {

    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.userStoreSlice.users);
    useEffect(() => {

        dispatch(userActions.loadUsers());
    }, []);

    return (
        <>
            {users.map((user: IUser) => (<UserComponent key = {user.id} user = {user}/>))}
        </>
    );
};
