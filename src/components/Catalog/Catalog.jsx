import CamperList from "../CamperList/CamperList";
import AsideFilter from "../AsideFilter/AsideFilter";
import { CatalogContainer } from "./CatalogStyles";
const Catalog = () => {
  return (
    <CatalogContainer>
      <AsideFilter />
      <CamperList />
    </CatalogContainer>
  );
};
export default Catalog;
