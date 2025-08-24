import s from './CatalogItem.module.css';
import { FaStar } from 'react-icons/fa';
import { SlMap } from "react-icons/sl";
import Button from '../Button/Button';
import { CATEGORIES } from '../../utils/categories';
import FavBtn from './FavBtn/FavBtn';

const CatalogItem = ({ product }) => {
    return (
            <li className={s.card}>
                <div className={s.imageWrapper}>
                    <img src={product.gallery?.[0]?.thumb} alt={product.name} className={s.image} />
                </div>

                <div className={s.content}>
                    <div className={s.headerContainer}>
                        <div className={s.header}>
                            <h3 className={s.title}>{product.name}</h3>
                            <div className={s.priceBlock}>
                                <span className={s.price}>€{product.price}.00</span>
                                <FavBtn productId={product.id} />
                            </div>
                        </div>
    
                        <div className={s.subInfo}>
                            <span className={s.rating}>
                                <FaStar className={s.star} /> {product.rating} ({product.reviews?.length || 0} Reviews)
                            </span>
                            <span className={s.location}>
                                <SlMap size={16} className={s.SvgStyle}/> {product.location}
                            </span>
                        </div>
                    </div>

                    <p className={s.description}>{product.description}</p>

                    <div className={s.tags}>
                        {Object.entries(CATEGORIES).map(([key, { label, icon }]) => {
                            if (product[key]) {
                            return (
                                <span key={key} className={s.tag}>
                                <img src={icon} alt={label} />
                                {label}
                                </span>
                            );
                            }
                            return null;
                        })}
                    </div>
                    <Button link to={`${'/catalog/'}${product.id}`}>Show more</Button>
                </div>
        </li>
    );
    };

export default CatalogItem;
