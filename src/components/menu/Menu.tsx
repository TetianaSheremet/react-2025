
import {Link} from "react-router-dom";
import styles from "./menu.module.css"

export const Menu = () => {
    return (
        <>


                <ul className={styles.wrapper}>


                    <li>
                        <Link className={styles.link} to={'users/jsonplaceholder'}> Users Json </Link>

                    </li>

                    <li>
                        <Link className={styles.link} to={'users/dummyjson'}> Users Dummy </Link>

                    </li>


                    <li>
                        <Link className={styles.link} to={'posts/jsonplaceholder'}> Posts Json </Link>

                    </li>

                    <li>
                        <Link className={styles.link} to={'posts/dummyjson'}> Posts Dummy </Link>

                    </li>
                    <li>
                        <Link  className={styles.link} to={'comments/jsonplaceholder'}> Comments Json </Link>

                    </li>
                    <li>
                        <Link className={styles.link} to={'comments/dummyjson'}> Comments Dummy </Link>

                    </li>

                </ul>

        </>
    );
};