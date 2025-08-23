import React from 'react'
import Location from '../../components/Location/Location'
import Container from '../../components/Container/Container'
import Filters from '../../components/Filters/Filters'
import Button from '../../components/Button/Button'
import s from './Catalog.module.css'
import CatalogCards from '../../components/CatalogCards/CatalogCards'
const Catalog = () => {
  return (
    <>
      <Container>
        <div className={s.bodyMargin}>
          <Location/>
          <Filters/>
          <div className={s.btnContainer}><Button>Search</Button></div>
        </div>
        <div>
          <CatalogCards/>
        </div>
      </Container>
    </>
  )
}

export default Catalog
