import Container from "../../components/Container/Container";
import CatalogCard from "../../components/CatalogCard/CatalogCard";
import CatalogCardDetails from "../../components/CatalogCardDetails/CatalogCardDetails";


const ProductDetails = () => {
  return (
    <>
      <Container>
        <CatalogCard/>
        <CatalogCardDetails/>
      </Container>
    </>
  );
};

export default ProductDetails;
