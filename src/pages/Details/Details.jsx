import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../utils/api";
import { FaStar } from "react-icons/fa";
import { SlMap } from "react-icons/sl";

import s from "./Details.module.css";
import { CATEGORIES } from "../../utils/categories";

const ProductDetails = () => {
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
      {/* Назва + загальна інформація */}
      <div className={s.header}>
        <h2 className={s.title}>{product.name}</h2>
        <div className={s.subInfo}>
          <span className={s.rating}>
            <FaStar className={s.star} /> {product.rating} (
            {product.reviews?.length || 0} Reviews)
          </span>
          <span className={s.location}>
            <SlMap size={16} /> {product.location}
          </span>
        </div>
        <div className={s.price}>€{product.price}.00</div>
      </div>

      {/* Галерея */}
      <div className={s.gallery}>
        {product.gallery?.map((img, idx) => (
          <img
            key={idx}
            src={img.thumb}
            alt={`${product.name}-${idx}`}
            className={s.galleryImage}
          />
        ))}
      </div>

      {/* Опис */}
      <p className={s.description}>{product.description}</p>

      {/* Характеристики */}
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

      {/* Відгуки */}
      <div className={s.reviews}>
        <h3>Reviews</h3>
        {product.reviews?.map((review, idx) => (
          <div key={idx} className={s.review}>
            <p>
              <strong>{review.reviewer_name}</strong> ⭐{" "}
              {review.reviewer_rating}
            </p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
