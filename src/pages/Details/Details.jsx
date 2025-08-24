import React from "react";
import Container from "../../components/Container/Container";
import CatalogCard from "../../components/CatalogCard/CatalogCard";
import CatalogCardDetails from "../../components/CatalogCardDetails/CatalogCardDetails";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
      const { id } = useParams();
  return (
    <>
      <Container>
        <CatalogCard/>
        <CatalogCardDetails id={id}/>
      </Container>
    </>
  );
};

export default ProductDetails;
