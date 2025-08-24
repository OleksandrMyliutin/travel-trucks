import { SlMap } from "react-icons/sl";
import s from './Location.module.css';
import { setFilter } from '../../redux/products/slice';
import { useDispatch, useSelector } from 'react-redux';

const Location = () => {
    const dispatch = useDispatch();
    const location = useSelector(state => state.products.filter.location || '');

    const handleChange = (e) => {
        dispatch(setFilter({ location: e.target.value }));
    };

    return (
        <div className={s.containerContent}>
        <span className={s.spanTitle}>Location</span>
        <div className={s.inputContainer}>
            <input
            type="text"
            placeholder="City"
            value={location}
            onChange={handleChange}
            className={s.inputStyle}
            />
            <span className={s.InputImg}><SlMap className={s.SvgStyle} size="20"/></span>
        </div>
        </div>
    );
};

export default Location;
