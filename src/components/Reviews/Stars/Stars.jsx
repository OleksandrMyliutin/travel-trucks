import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa"; // або fa6
import { splitStars } from "../../../utils/rating";
import s from "./Stars.module.css";

const Stars = ({ value = 0, outOf = 5, size = 18, className="" }) => {
    const { full, half, empty } = splitStars(value, outOf);
    return (
        <div className={`${s.stars} ${className}`} aria-label={`${value} / ${outOf}`}>
        {Array.from({ length: full }).map((_, i) => <FaStar key={`f${i}`} className={s.full} size={size} />)}
        {half === 1 && <FaStarHalfAlt className={s.full} size={size} />}
        {Array.from({ length: empty }).map((_, i) => <FaRegStar key={`e${i}`} className={s.empty} size={size} />)}
        </div>
    );
}

export default Stars;