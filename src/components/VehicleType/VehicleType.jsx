import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setFilter } from '../../redux/products/slice';

import Van from '../../assets/icons/van.svg';
import FullyIntegrated from '../../assets/icons/fully-integrated.svg';
import Alcove from '../../assets/icons/Alcove.svg';
import s from './VehicleType.module.css';

const VehicleType = () => {
    const dispatch = useAppDispatch();
    const selected = useAppSelector(state => state.products.filter.form || "");

    const options = [
        { label: "Van", value: "panelTruck", icon: Van },
        { label: "Fully Integrated", value: "fullyIntegrated", icon: FullyIntegrated },
        { label: "Alcove", value: "alcove", icon: Alcove }
    ];

    const handleSelect = (value) => {
        dispatch(setFilter({ form: value }));
    };

    return (
    <div className={s.filters}>
        {options.map((opt) => (
        <label key={opt.value} className={s.filterOption}>
            <input
            type="radio"
            name="vehicleType"
            checked={selected === opt.value}
            onChange={() => handleSelect(opt.value)}
            />
            <img src={opt.icon} alt={opt.label} />
            <span className={s.label}>{opt.label}</span>
        </label>
        ))}
    </div>
    );
};


export default VehicleType;
