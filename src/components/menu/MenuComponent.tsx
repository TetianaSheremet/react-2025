import {Link} from "react-router-dom";
import styles from "./menu.module.css"

const MenuComponent = () => {
    return (
        <div>
            <ul className={styles.wrapper}>
                <li>
                    <Link to={"users/jsonplaceholder"}>Users Json</Link> </li>
                <li>
                    <Link to={"posts/jsonplaceholder"}>Posts Json</Link> </li>
                <li>
                    <Link to={"comments/jsonplaceholder"}>Comments Json</Link> </li>
                <li>
                   < Link to={"posts/dummyjson"} >Posts Dummy</Link>
                </li>
                <li>
                    < Link to={"users/dummyjson"} >Users Dummy</Link>
                </li>
                <li>
                    < Link to={"comments/dummyjson"} >Comments Dummy</Link>
                </li>
            </ul>

        </div>
    );
};

export default MenuComponent;