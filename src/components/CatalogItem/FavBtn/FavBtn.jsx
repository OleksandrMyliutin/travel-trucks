import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { toggleFavoriteProduct } from '../../../redux/products/slice';

import s from './FavBtn.module.css';

const FavBtn = ({ productId }) => {
    const dispatch = useAppDispatch();
    const favorites = useAppSelector(state => state.products.favoriteProducts);
    const isFavorite = favorites.includes(productId);

    const handleToggleFavorite = () => {
        dispatch(toggleFavoriteProduct(productId));
    };

    return (
        <button 
        onClick={handleToggleFavorite} 
        className={`${s.favBtn} ${isFavorite ? s.active : ''}`}
        >
        <FaRegHeart size={20} />
        </button>
    );
};

export default FavBtn;
