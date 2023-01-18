import Link from 'next/link';

import { Product } from '../../types/Product';
import styles from './styles.module.css';

type Props = {
    data: Product;
    mainColor: string;
    secondColor: string;
}

export const ProductItem = ({data, mainColor, secondColor}: Props) => {
    return(
        <Link href={`/mano/product/${data.id}`}>
            <a className={styles.container}>
                <div className={styles.head} style={{backgroundColor: secondColor}}></div>
                <div className={styles.info}>
                    <img src={data.image} alt={data.name} />
                    <div className={styles.catName}>{data.categoryName}</div>
                    <div className={styles.productName}>{data.name}</div>
                    <div className={styles.price} style={{color: mainColor}}>R$ {data.price}</div>
                </div>
            </a>
        </Link>
    )
}