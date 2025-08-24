import s from './CatalogCardDetails.module.css'
import BookingForm from '../BookingForm/BookingForm'
import { NavLink, Outlet } from 'react-router-dom'
import { selectProduct } from '../../redux/products/selectors'
import { useSelector } from 'react-redux'

const CatalogCardDetails = ({id}) => {
    const product = useSelector(state => selectProduct(state, id));

    
    return (
        <>
            <div className={s.containerDetails}>
                <div >
                    <nav className={s.tabs}>
                        <div className={s.container}><NavLink to="features" className={({isActive})=> isActive ? s.active : undefined}>Features</NavLink></div>
                        <div className={s.container}><NavLink to="reviews"  className={({isActive})=> isActive ? s.active : undefined}>Reviews</NavLink></div>
                    </nav>
                    <span><hr className={s.lineStyle}/></span>
                    <div className={s.content}>
                        <Outlet context={{ product }} />
                        <BookingForm camperId={id} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CatalogCardDetails
