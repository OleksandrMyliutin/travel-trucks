import React from 'react';
import s from './CatalogItem.module.css';
import { FaStar } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa6';
import { SlMap } from "react-icons/sl";
import Button from '../Button/Button';

const CatalogItem = ({ product }) => {
    return (
            <li className={s.card}>
                {/* Фото */}
                <div className={s.imageWrapper}>
                    <img src={product.gallery?.[0]?.thumb} alt={product.name} className={s.image} />
                </div>

                {/* Контент */}
                <div className={s.content}>
                    <div className={s.headerContainer}>
                        <div className={s.header}>
                            <h3 className={s.title}>{product.name}</h3>
                            <div className={s.priceBlock}>
                                <span className={s.price}>€{product.price}.00</span>
                                <button className={s.favBtn}>
                                    <FaRegHeart size={20} />
                                </button>
                            </div>
                        </div>
    
                        <div className={s.subInfo}>
                            <span className={s.rating}>
                                <FaStar className={s.star} /> {product.rating} ({product.reviews?.length || 0} Reviews)
                            </span>
                            <span className={s.location}>
                                <SlMap size={16}/> {product.location}
                            </span>
                        </div>
                    </div>


                    {/* Опис */}
                    <p className={s.description}>{product.description}</p>

                    {/* Характеристики */}
                    <div className={s.tags}>
                        {product.transmission && <span className={s.tag}>{product.transmission}</span>}
                        {product.engine && <span className={s.tag}>{product.engine}</span>}
                        {product.form && <span className={s.tag}>{product.form}</span>}
                        {product.AC && <span className={s.tag}>AC</span>}
                        {product.bathroom && <span className={s.tag}>Bathroom</span>}
                        {product.kitchen && <span className={s.tag}>Kitchen</span>}
                        {product.microwave && <span className={s.tag}>Microwave</span>}
                    </div>

                    {/* Кнопка */}
                    <Button link to={`${'/catalog/'}${product.id}`}>Show more</Button>
                </div>
        </li>
    );
    };

export default CatalogItem;
