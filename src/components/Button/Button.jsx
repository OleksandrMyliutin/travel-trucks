import React from 'react'
import s from './Button.module.css'
import { Link} from 'react-router-dom'

const Button = ({link, to='/catalog', children}) => {
    return (
        <>
            {link && <Link to={to} className={s.btnLink}><span className={s.btnValue}>{children}</span></Link>}
            {!link && <button className={s.btnContainer} type='button'>
                <span className={s.btnValue}>{children}</span>
            </button>}
        </>
    )
}

export default Button
