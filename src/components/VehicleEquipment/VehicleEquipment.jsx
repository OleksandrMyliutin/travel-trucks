import React from "react";
import AC from '../../assets/icons/AC.svg'
import Automatic from '../../assets/icons/Automatic.svg'
import Kitchen from '../../assets/icons/Kitchen.svg'
import TV from '../../assets/icons/TV.svg'
import Bathroom from '../../assets/icons/Bathroom.svg'
import s from './VehicleEquipment.module.css'

const FilterOption = () => {
    const options = [
        {label: "AC", icon:AC}, 
        {label: "Automatic", icon:Automatic},
        {label: "Kitchen", icon:Kitchen},
        {label: "TV", icon:TV},
        {label: "Bathroom", icon:Bathroom}
    ];

    return (
        <div className={s.filters}>
        {options.map((opt) => (
            <label key={opt.label} className={s.filterOption}>
                <input type="checkbox" />
                <img src={opt.icon} alt={opt.label} />
                <span className={s.label}>{opt.label}</span>
            </label>
        ))}
        </div>
    );
};

export default FilterOption;
