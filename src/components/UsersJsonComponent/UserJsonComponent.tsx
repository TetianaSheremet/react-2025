import {IUserJson} from "../../models/IUserJson.ts";
import {FC} from "react";
import styles from "./userjson.module.css"

interface UserJsonProps{
    user:IUserJson
}

export const UserJsonComponent:FC<UserJsonProps> = ({user}) => {
    return (
        <div className={styles.wrapper}>
            <h4>{user.id} {user.name}</h4>
            <p>{user.username}: {user.email} </p>
            <ul className={styles.unorderedlist}>
               <li>Street: {user.address.street}</li>
                <li>City: {user.address.city}</li>
                <li>Phone number: {user.phone}</li>

            </ul>

        </div>
    );
};