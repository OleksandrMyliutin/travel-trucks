import React from 'react'
import { SlMap } from "react-icons/sl";
import s from './Location.module.css'
const Location = () => {
    return (
        <div className={s.containerContent}>
            <span className={s.spanTitle}>Location</span>
            <div className={s.inputContainer}>
                <input type="text" placeholder='City' className={s.inputStyle}/>
                <span className={s.InputImg}><SlMap className={s.SvgStyle} size="20"/></span>
            </div>
        </div>
    )
}

export default Location
