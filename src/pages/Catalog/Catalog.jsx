import React, { useEffect } from 'react'
import Location from '../../components/Location/Location'
import Container from '../../components/Container/Container'
import Filters from '../../components/Filters/Filters'
import Button from '../../components/Button/Button'
import s from './Catalog.module.css'
import CatalogCards from '../../components/CatalogCards/CatalogCards'

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { loadProducts } from '../../redux/products/operations';
import { selectIsLoading } from '../../redux/products/selectors'

const Catalog = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);
  const handleSearch = () => {
    dispatch(loadProducts());
  };
  return (
    <>
      <Container>
        <div className={s.catalogGrid}>
          <aside  className={s.LocationFiltersContainer}>
            <Location/>
            <Filters/>
            <Button onClick={handleSearch}>Search</Button>
          </aside>
          <main className={s.cards}>
            {isLoading ? (
            <p>Loading...</p>
          ) : (
            <CatalogCards />
          )}
          </main>
        </div>
      </Container>
    </>
  )
}

export default Catalog
