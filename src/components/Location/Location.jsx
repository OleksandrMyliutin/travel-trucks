import React from 'react';
import { SlMap } from "react-icons/sl";
import s from './Location.module.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setFilter } from '../../redux/products/slice';

const Location = () => {
    const dispatch = useAppDispatch();
    const location = useAppSelector(state => state.products.filter.location || '');

    const handleChange = (e) => {
        dispatch(setFilter({ location: e.target.value }));
    };

    return (
        <div className={s.containerContent}>
        <span className={s.spanTitle}>Location</span>
        <div className={s.inputContainer}>
            <input
            type="text"
            placeholder="City"
            value={location}
            onChange={handleChange}
            className={s.inputStyle}
            />
            <span className={s.InputImg}><SlMap className={s.SvgStyle} size="20"/></span>
        </div>
        </div>
    );
};

export default Location;
