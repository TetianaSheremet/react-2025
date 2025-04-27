import {UserDummyComponent} from "./UserDummyComponent.tsx";
import {IUserDummy} from "../../models/IUserDummy.ts";
import {useEffect, useState} from "react";
import {BaseDummyModel} from "../../models/BaseDummyModel.ts";
import { getAll } from "../../services/general.api.service.ts";



type UsersDummyResponse ={
  users:IUserDummy[]
} & BaseDummyModel
export const UsersDummyComponent = () => {

const[users,setUsers] = useState<IUserDummy[]>([]);

useEffect(()=>{
    getAll<UsersDummyResponse>("dummy","users").then(({users})=>setUsers(users))
},[])


    return (
        <div>
            {users.map(user=><UserDummyComponent key={user.id} user={user}/>)}
        </div>
    );
};