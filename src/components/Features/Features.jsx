import React from 'react'
import s from './Features.module.css'
import { useOutletContext } from 'react-router-dom';
import { buildFeatureChips } from '../../utils/buildFeatureChips';
import { buildVehicleDetails } from '../../utils/buildVehicleDetails';
const Features = () => {
  const { product } = useOutletContext();
  const rows = buildVehicleDetails(product);
  if (!product) return null;
  
  const chips = buildFeatureChips(product);
  return (
    <div className={s.containerFeatures}>
      <ul className={s.chips}>
        {chips.map((c, i) => (
          <li key={i} className={s.chip}>
            <img src={c.icon} alt="" className={s.icon} />
            <span>{c.label}</span>
          </li>
        ))}
      </ul>
      <div className={s.detailsBlock}>
        <h3 className={s.title}>Vehicle details</h3>
        <span><hr className={s.lineStyle}/></span>
        <dl className={s.specs}>
          {rows.map(([k, v]) => (
            <div key={k} className={s.row}>
              <dt className={s.term}>{k}</dt>
              <dd className={s.value}>{v}</dd>
            </div>
          ))}
        </dl>
    </div>
    </div>
  )
}

export default Features
