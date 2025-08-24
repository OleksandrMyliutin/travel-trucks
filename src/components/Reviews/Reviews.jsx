
import { useOutletContext } from "react-router-dom";
import s from "./Reviews.module.css";
import Stars from "./Stars/Stars";

const Reviews = () => {
    const { product } = useOutletContext();
  const reviews = product?.reviews ?? [];
  if (!reviews.length) return <p className={s.empty}>No reviews yet.</p>;

  return (
    <ul className={s.list}>
      {reviews.map((r, i) => (
        <li key={`${r.reviewer_name}-${i}`} className={s.item}>
          <div className={s.avatarHeaderContainer}>
            <div className={s.avatar}>{r.reviewer_name?.[0]?.toUpperCase() || "?"}</div>
            <div className={s.header}>
              <span className={s.name}>{r.reviewer_name}</span> 
              <Stars value={r.reviewer_rating} />
            </div>
          </div>
          <p className={s.text}>{r.comment}</p>
        </li>
      ))}
    </ul>
  )
}

export default Reviews
