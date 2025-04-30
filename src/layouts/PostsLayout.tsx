import {Link, Outlet} from "react-router-dom";
import styles from "./childlayouts.module.css"

export const PostsLayout = () => {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.unorderedList}>
                <li>
                    <Link to={"jsonplaceholder"}>Posts Json</Link> </li>

                <li> <Link to={"dummyjson"}>Posts Dummy</Link> </li>
            </ul>

            <Outlet/>
        </div>
    );
};