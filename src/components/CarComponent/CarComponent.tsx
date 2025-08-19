
import {ICar} from "../../models/ICar.ts";

import {FC} from "react";

import styles from './carComponent.module.css'

type CarProps ={
    car:ICar
}

export const CarComponent:FC<CarProps> = ({car}) => {
    return (
       <div className={styles.wrapper}>
           <h4>{car.brand} : {car.id}</h4>
           <ul>
               <li>Price : {car.price}</li>
               <li> Year: {car.year}</li>
           </ul>
       </div>
    );
};
