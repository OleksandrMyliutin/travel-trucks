import React, { useEffect } from 'react'
import Location from '../../components/Location/Location'
import Container from '../../components/Container/Container'
import Filters from '../../components/Filters/Filters'
import Button from '../../components/Button/Button'
import s from './Catalog.module.css'
import CatalogCards from '../../components/CatalogCards/CatalogCards'


import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { loadProducts } from '../../redux/products/operations';
import { selectAllProducts, selectIsLoading } from '../../redux/products/selectors'

import { selectHasNextPage } from '../../redux/products/selectors';
import { applyFilters, clearProducts, incrementPage } from '../../redux/products/slice';
import LoadMore from '../../components/LoadMore/LoadMore'
import { Loader } from '../../components/Loader/Loader'


const Catalog = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const products = useAppSelector(selectAllProducts);
  const version = useAppSelector(s => s.products.filterVersion);
  useEffect(() => {
    dispatch(clearProducts());
    dispatch(loadProducts());
  }, [dispatch, version]);
  const handleSearch = () => {
    dispatch(applyFilters());
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
              {isLoading && products.length === 0 ? (
              <Loader/>
            ) : (
              (<>
                <CatalogCards />
                {isLoading && products.length > 0 && (
                  <div className={s.loadMoreWrapper}>
                    <Loader size="30" />
                  </div>
                )}
                {hasNextPage && !isLoading && (<LoadMore onClick={handleLoadMore}/>)}
              </>)
            )}
          </main>
        </div>
      </Container>
    </>
  )
}

export default Catalog
