import {FC} from "react";
import {ProductModel} from "../../models/ProductModel.ts";


type PropType ={
    product:ProductModel
}

import styles from './product.module.css'


export const ProductComponent: FC<PropType> = ({product:{id,title,description,category,price,tags=[],reviews=[],thumbnail}}) => {
    return (
        <div className={styles.wrapper}>

           <h1>Product {id} :  {title}</h1>

            <p>Description: {description}</p>
            <p>Category: {category}</p>
            <p>Price: {price}</p>
            {tags.map((tag,index)=><p key={index}>Tag: {tag}</p>)}

            <p>Reviews:</p>

            <ul>
                {reviews.map((review,index)=> <li key={index}>

                    <b>{review.reviewerName}</b> ({review.reviewerEmail})
                    <br/>
                    Rating: {review.rating}
                    <br/>

                    Comment: "{review.comment}"


                </li>)}
            </ul>

            <img src={thumbnail} alt={title}/>


        </div>
    );
};