import React, {FC} from 'react';
import {ICourse} from "../models/ICourse.ts";

import styles from "./CourseComponent.module.css";

interface CourseComponentProps{
    item:ICourse}
const CourseComponent : FC<CourseComponentProps> = ({item}) => {
    return (
        <div className={styles.wrapper}>
            <h3>
                {item.title} - {item.monthDuration}, {item.hourDuration}
            </h3>

           <ul>
               {item.modules.map((module,index)=><li key={index}>
                   {module}
               </li>)}
           </ul>
        </div>
    );
};

export default CourseComponent;