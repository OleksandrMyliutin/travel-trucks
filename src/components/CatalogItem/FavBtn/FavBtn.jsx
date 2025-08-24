import React from 'react'
import { FaRegHeart } from 'react-icons/fa'


import s from './FavBtn.module.css';
import { toggleFavoriteProduct } from '../../../redux/products/slice';
import { useDispatch, useSelector } from 'react-redux';

const FavBtn = ({ productId }) => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.products.favoriteProducts);
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
