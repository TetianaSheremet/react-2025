import {UserJsonComponent} from "./UserJsonComponent.tsx";
import { useEffect, useState} from "react";
import {getAll} from "../../services/general.api.service.ts";
import {IUserJson} from "../../models/IUserJson.ts";
// import {useState} from "react";

export const UsersJsonComponent = () => {

    const[users, setUsers] = useState<IUserJson[]>([])

    useEffect(()=>{
        getAll<IUserJson[]>('json','users').then((value) => setUsers(value));

        }, [])

    // const [users,setUsers] = useState([]);
    return (
        <div>
            {users.map(user=><UserJsonComponent key={user.id} user={user}/>)}
        </div>
    );
};