import s from './CatalogCardDetails.module.css'
import BookingForm from '../BookingForm/BookingForm'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import { selectProduct } from '../../redux/products/selectors'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchProductById } from '../../utils/api'

const CatalogCardDetails = () => {
    const { id } = useParams();
    const reduxProduct = useSelector(state => selectProduct(state, id));
    const [fallback, setFallback] = useState(null);
    useEffect(() => {
        if (!reduxProduct && id) {
        fetchProductById(id)
            .then(data => setFallback(data));
        }
    }, [id, reduxProduct]);

    const product = reduxProduct || fallback;
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
