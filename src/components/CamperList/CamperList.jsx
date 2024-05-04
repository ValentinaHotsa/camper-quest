import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  selectAdverts,
  selectPageLimit,
  selectError,
  selectIsLoading,
} from "../../redux/adverts/selectors";
import { CamperCard } from "../CamperCard/CamperCard";
import { fetchAllAdverts } from "../../redux/adverts/advertsOperations";
import { List, CatalogWrap } from "./CamperListStyled";
import LoadMoreBtn from "../LoadMore/LoadMore";
import { setPage } from "../../redux/adverts/advertsSlice";

const CamperList = () => {
  const adverts = useSelector(selectAdverts);
  const pageLimit = useSelector(selectPageLimit);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage(1));
    dispatch(fetchAllAdverts({ page: 1, limit: 4 }));
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error}</div>;
  } else {
    return (
      <CatalogWrap>
        <List>
          {adverts.length > 0 &&
            adverts.map((advert) => (
              <CamperCard key={advert._id} data={advert} />
            ))}
        </List>
        <LoadMoreBtn />
      </CatalogWrap>
    );
  }
};
export default CamperList;
