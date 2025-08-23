import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setFilter } from "../../redux/products/slice";

import AC from '../../assets/icons/AC.svg'
import Automatic from '../../assets/icons/Automatic.svg'
import Kitchen from '../../assets/icons/Kitchen.svg'
import TV from '../../assets/icons/TV.svg'
import Bathroom from '../../assets/icons/Bathroom.svg'
import s from './VehicleEquipment.module.css'

const VehicleEquipment = () => {
    const dispatch = useAppDispatch();
    const selected = useAppSelector(state => state.products.filter.equipment || []);

    const options = [
        { label: "AC", icon: AC },
        { label: "Automatic", icon: Automatic },
        { label: "Kitchen", icon: Kitchen },
        { label: "TV", icon: TV },
        { label: "Bathroom", icon: Bathroom }
    ];

    const handleToggle = (label) => {
        let updated;
        if (selected.includes(label)) {
        updated = selected.filter(item => item !== label);
        } else {
        updated = [...selected, label];
        }
        dispatch(setFilter({ equipment: updated }));
    };

    return (
    <div className={s.filters}>
        {options.map((opt) => (
        <label key={opt.label} className={s.filterOption}>
            <input
            type="checkbox"
            checked={selected.includes(opt.label)}
            onChange={() => handleToggle(opt.label)}
            />
            <img src={opt.icon} alt={opt.label} />
            <span className={s.label}>{opt.label}</span>
        </label>
        ))}
    </div>
    );
};

export default VehicleEquipment;
