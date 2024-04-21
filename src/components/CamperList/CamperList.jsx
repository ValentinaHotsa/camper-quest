import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectAdverts, selectPageLimit } from "../../redux/adverts/selectors";
import { CamperCard } from "../CamperCard/CamperCard";
import { fetchAllAdverts } from "../../redux/adverts/advertsOperations";
import { List, CatalogWrap } from "./CamperListStyled";
import LoadMoreBtn from "../LoadMore/LoadMore";
import { setPage } from "../../redux/adverts/advertsSlice";

const CamperList = () => {
  const adverts = useSelector(selectAdverts);
  const pageLimit = useSelector(selectPageLimit);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage(1));
    dispatch(fetchAllAdverts({ page: 1, limit: pageLimit }));
  }, [dispatch, pageLimit]);

  return (
    <CatalogWrap>
      <List>
        {adverts.map((advert) => (
          <CamperCard key={advert._id} data={advert} />
        ))}
      </List>
      <LoadMoreBtn />
    </CatalogWrap>
  );
};
export default CamperList;
