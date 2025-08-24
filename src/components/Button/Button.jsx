import s from './Button.module.css'
import { Link} from 'react-router-dom'

const Button = ({link, blank, to='/catalog', submit, children, onClick}) => {
    return (
        <>
            {link && !blank && <Link to={to} className={s.btnLink}><span className={s.btnValue}>{children}</span></Link>}
            {link && blank && <Link to={to} className={s.btnLink} target="_blank" rel="noopener noreferrer"><span className={s.btnValue}>{children}</span></Link>}
            {!link && !submit && <button className={s.btnContainer} type='button' onClick={onClick}>
                <span className={s.btnValue}>{children}</span>
            </button>}
            {!link && submit && <button className={s.btnContainer} type='submit' onClick={onClick}>
                <span className={s.btnValue}>{children}</span>
            </button>}
        </>
    )
}

export default Button
