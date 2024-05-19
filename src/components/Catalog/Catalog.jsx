import CamperList from "../CamperList/CamperList";
import AsideFilter from "../AsideFilter/AsideFilter";
import { CatalogContainer } from "./CatalogStyles";
const Catalog = () => {
  return (
    <CatalogContainer>
      <AsideFilter></AsideFilter>
      <CamperList></CamperList>
    </CatalogContainer>
  );
};
export default Catalog;
