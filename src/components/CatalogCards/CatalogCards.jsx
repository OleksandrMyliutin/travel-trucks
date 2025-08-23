import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { selectAllProducts } from '../../redux/products/selectors';
import CatalogItem from '../CatalogItem/CatalogItem';

import s from './CatalogCards.module.css';

const CatalogCards = () => {
    const products = useAppSelector(selectAllProducts);

    return (
        <ul className={s.cardsFlex}>
        {products.map((product) => (
            <CatalogItem key={product.id} product={product} />
        ))}
        </ul>
    );
};

export default CatalogCards;
