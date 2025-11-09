import {UserComponent} from "./UserComponent.tsx";
import {useCallback, useEffect, useMemo, useState} from "react";

export const UsersComponent = () => {

const arr:number [] = useMemo(()=>{
    return [1,2,3]
},[])
    const foo = useCallback(() =>{
        console.log('test');}, [])

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(value=>setUsers(value))

        return () =>{console.log('unsubscribe')}
    }, []);

    console.log('users')
    return (
        <div>Users Component

        <UserComponent  foo={foo} arr={arr}/>
        </div>
    );
};
