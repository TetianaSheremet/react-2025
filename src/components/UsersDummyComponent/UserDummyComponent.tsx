import {IUserDummy} from "../../models/IUserDummy.ts";
import {FC} from "react";
import styles from './userDummy.module.css'

type UserDummyProps={
    user:IUserDummy
}


export const UserDummyComponent:FC<UserDummyProps> = ({user}) => {



    return (
        <div className={styles.wrapper}>

            <h3 className={styles.header}>{user.id} {user.firstName} {user.lastName}</h3>
            <h4>{user.age} {user.gender}</h4>
            <ul>
                <li>Address: {user.address.address}</li>
                <li>City: {user.address.city}</li>
                <li>State: {user.address.state}</li>
                <li>Postal Code: {user.address.postalCode}</li>
                

                


            </ul>

            <p>Professional Information</p>

            <ul>

                <li>{user.company.department}</li>
                <li>{user.company.title}</li>

            </ul>

        </div>
    );
};


