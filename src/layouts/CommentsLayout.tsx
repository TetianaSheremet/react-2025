import {Link, Outlet} from "react-router-dom";
import styles from "./childlayouts.module.css"

export const CommentsLayout = () => {
    return (
        <div >
<div className={styles.wrapper}>
                 <ul className={styles.unorderedList}>
                     <li>
                         <Link to={"jsonplaceholder"}>Comments Json</Link> </li>

                     <li> <Link to={"dummyjson"}>Comments Dummy</Link> </li>
                 </ul>
</div>
            <Outlet/>



        </div>
    );
};