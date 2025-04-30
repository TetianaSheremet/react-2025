import {Link, Outlet} from "react-router-dom";
import styles from "./childlayouts.module.css"
export const UsersLayout = () => {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.unorderedList}>
                <li>
                    <Link to={"jsonplaceholder"}>Users Json</Link>
                </li>
                <li>
                    <Link to={"dummyjson"}>Users Dummy</Link>
                </li>
            </ul>

            <Outlet/>
        </div>
    );
};