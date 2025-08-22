import React from 'react'
import Van from '../../assets/icons/van.svg'
import FullyIntegrated from '../../assets/icons/fully-integrated.svg'
import Alcove from '../../assets/icons/Alcove.svg'
import s from './VehicleType.module.css'

const VehicleType = () => {
    const options = [
            {label: "Van", icon:Van}, 
            {label: "Fully Integrated", icon:FullyIntegrated},
            {label: "Alcove", icon:Alcove}
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
}

export default VehicleType
