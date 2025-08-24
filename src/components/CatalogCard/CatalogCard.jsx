import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../utils/api";
import { FaStar } from "react-icons/fa";
import { SlMap } from "react-icons/sl";
import s from "./CatalogCard.module.css";
import { formatPrice } from '../../utils/formatPrice';


const CatalogCard = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const loadProduct = async () => {
        const data = await fetchProductById(id);
        setProduct(data);
        };
        loadProduct();
    }, [id]);

    if (!product) return <p>Loading...</p>;
    return (
        <div className={s.card}>
            <div className={s.header}>
            <h2 className={s.title}>{product.name}</h2>
            <div className={s.subInfo}>
                <span className={s.rating}>
                <FaStar className={s.star} /> {product.rating} (
                {product.reviews?.length || 0} Reviews)
                </span>
                <span className={s.location}>
                <SlMap size={16} className={s.SvgStyle}/> {product.location}
                </span>
            </div>
            <div className={s.price}>€{formatPrice(product.price)}</div>
            </div>
    
            <ul className={s.galleryContainer}>
                {product.gallery?.map((img, idx) => (
                    <li key={idx} className={s.gallery}>
                        <img
                        src={img.thumb}
                        alt={`${product.name}-${idx}`}
                        className={s.galleryImage}
                        />
                    </li>
                ))}
            </ul>

            <p className={s.description}>{product.description}</p>
        </div>
    )
}

export default CatalogCard;
