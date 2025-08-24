import { setFilter } from "../../redux/products/slice";

import AC from '../../assets/icons/AC.svg'
import Automatic from '../../assets/icons/Automatic.svg'
import Kitchen from '../../assets/icons/Kitchen.svg'
import TV from '../../assets/icons/TV.svg'
import Bathroom from '../../assets/icons/Bathroom.svg'
import s from './VehicleEquipment.module.css'
import { useDispatch, useSelector } from "react-redux";

const VehicleEquipment = () => {
    const dispatch = useDispatch();
    const selected = useSelector(state => state.products.filter.equipment || []);

    const options = [
        { label: "AC", value: "AC", icon: AC },
        { label: "Automatic", value: "transmission=automatic", icon: Automatic },
        { label: "Kitchen", value: "kitchen", icon: Kitchen },
        { label: "TV", value: "TV", icon: TV },
        { label: "Bathroom", value: "bathroom", icon: Bathroom }
    ];

    const handleToggle = (value) => {
        let updated;
        if (selected.includes(value)) {
        updated = selected.filter(item => item !== value);
        } else {
        updated = [...selected, value];
        }
        dispatch(setFilter({ equipment: updated }));
    };

    return (
    <div className={s.filters}>
        {options.map((opt) => (
        <label key={opt.value} className={s.filterOption}>
            <input
            type="checkbox"
            checked={selected.includes(opt.value)}
            onChange={() => handleToggle(opt.value)}
            />
            <img src={opt.icon} alt={opt.label} />
            <span className={s.label}>{opt.label}</span>
        </label>
        ))}
    </div>
    );
};

export default VehicleEquipment;
