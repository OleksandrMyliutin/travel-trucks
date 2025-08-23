import React from 'react'
import s from './Filters.module.css'
import VehicleEquipment from '../VehicleEquipment/VehicleEquipment'
import VehicleType from '../VehicleType/VehicleType'


const Filters = () => {
    return (
        <div className={s.containerContent}>
            <span className={s.spanTitle}>Filters</span>
            <div className={s.containerVehicle}>
                <h3>Vehicle equipment</h3>
                <span><hr className={s.lineStyle}/></span>
                <VehicleEquipment/>
            </div>
            <div className={s.containerVehicle}>
                <h3>Vehicle type</h3>
                <span><hr className={s.lineStyle}/></span>
                <VehicleType/>
            </div>
        </div>
    )
}

export default Filters
