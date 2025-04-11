import {TodoModel} from "../../models/TodoModel.ts";
import {FC} from "react";


type PropType ={
    todo:TodoModel
}
export const TodoComponent: FC<PropType>= ({todo:{title,id,userId,completed}}) => {
    return (
        <div>
            {userId} {id}{title}{completed}
        </div>
    )
}