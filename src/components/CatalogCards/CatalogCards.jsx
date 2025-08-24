import CatalogItem from '../CatalogItem/CatalogItem';
import s from './CatalogCards.module.css';
import { selectAllProducts } from '../../redux/products/selectors';
import { useSelector } from 'react-redux';

const CatalogCards = () => {
    const products = useSelector(selectAllProducts);
    return (
        <>
            <ul className={s.cardsFlex}>
                {products.map((product) => (
                    <CatalogItem key={product.id} product={product} />
                ))}
            </ul>
        </>
    );
};

export default CatalogCards;
