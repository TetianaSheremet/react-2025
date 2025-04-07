import React from 'react';
import {coursesArray} from "../data/data.ts";
import CourseComponent from "../course-component/CourseComponent.tsx";

const CoursesComponent = () => {
    return (
        <div>
            {
                coursesArray.map((value,index) =><CourseComponent key = {index} item={value}/>)
            }
        </div>
    );
};

export default CoursesComponent;