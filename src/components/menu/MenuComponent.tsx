import {Link} from "react-router-dom";
import styles from "./menu.module.css"

const MenuComponent = () => {
    return (
        <div>
            <ul className={styles.wrapper}>
                <li>
                    <Link to={"users"}>Users </Link> </li>
                <li>
                    <Link to={"posts"}>Posts </Link> </li>
                <li>
                    <Link to={"comments"}>Comments</Link> </li>


            </ul>

        </div>
    );
};

export default MenuComponent;