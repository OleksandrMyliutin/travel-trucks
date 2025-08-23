import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setFilter } from '../../redux/products/slice';

import Van from '../../assets/icons/van.svg';
import FullyIntegrated from '../../assets/icons/fully-integrated.svg';
import Alcove from '../../assets/icons/Alcove.svg';
import s from './VehicleType.module.css';

const VehicleType = () => {
    const dispatch = useAppDispatch();
    const selected = useAppSelector(state => state.products.filter.type || "");

    const options = [
        { label: "Van", icon: Van },
        { label: "Fully Integrated", icon: FullyIntegrated },
        { label: "Alcove", icon: Alcove }
    ];

    const handleSelect = (label) => {
        dispatch(setFilter({ type: label }));
    };

    return (
        <div className={s.filters}>
        {options.map((opt) => (
            <label key={opt.label} className={s.filterOption}>
            <input
                type="radio"
                name="vehicleType"
                checked={selected === opt.label}
                onChange={() => handleSelect(opt.label)}
            />
            <img src={opt.icon} alt={opt.label} />
            <span className={s.label}>{opt.label}</span>
            </label>
        ))}
        </div>
    );
};

export default VehicleType;
