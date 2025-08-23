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

import { selectHasNextPage } from '../../redux/products/selectors';
import { incrementPage } from '../../redux/products/slice';
import LoadMore from '../../components/LoadMore/LoadMore'


const Catalog = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);
  const handleSearch = () => {
    dispatch(loadProducts());
  };
    const hasNextPage = useAppSelector(selectHasNextPage);

    const handleLoadMore = () => {
        dispatch(incrementPage());
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
            <div className={s.container}>
              {isLoading ? (
              <p>Loading...</p>
            ) : (
              <CatalogCards />
            )}
              {hasNextPage && (
                <div className={s.loadMoreWrapper}>
                    <LoadMore onClick={handleLoadMore}/>
                </div>
              )}
            </div>
          </main>
        </div>
      </Container>
    </>
  )
}

export default Catalog
