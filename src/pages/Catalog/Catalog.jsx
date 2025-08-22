import React from 'react'
import Location from '../../components/Location/Location'
import Container from '../../components/Container/Container'
import Filters from '../../components/Filters/Filters'
import s from './Catalog.module.css'
const Catalog = () => {
  return (
    <>
      <Container>
        <div className={s.bodyMargin}>
          <Location/>
          <Filters/>
        </div>
      </Container>
    </>
  )
}

export default Catalog
