import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  selectAdverts,
  selectError,
  selectFilteredAdverts,
  selectIsLoading,
} from "../../redux/adverts/selectors";
import { CamperCard } from "../CamperCard/CamperCard";
import { fetchAllAdverts } from "../../redux/adverts/advertsOperations";
import { List, CatalogWrap } from "./CamperListStyled";
import LoadMoreBtn from "../LoadMore/LoadMore";
import Loader from "../Loader/Loader";

const CamperList = () => {
  const adverts = useSelector(selectFilteredAdverts) || [];

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const [visibleAdverts, setVisibleAdverts] = useState(4);

  useEffect(() => {
    dispatch(fetchAllAdverts());
  }, [dispatch]);

  const handleLoadMore = () => {
    setVisibleAdverts((prev) => prev + 4);
  };

  if (isLoading) {
    return <Loader />;
  } else if (error) {
    return <div>Error: {error}</div>;
  } else {
    return (
      <CatalogWrap>
        <List>
          {adverts.length > 0 ? (
            adverts
              .slice(0, visibleAdverts)
              .map((advert) => <CamperCard key={advert._id} data={advert} />)
          ) : (
            <div>No adverts available</div>
          )}
        </List>

        {visibleAdverts < adverts.length && (
          <LoadMoreBtn onLoadMore={handleLoadMore} />
        )}
      </CatalogWrap>
    );
  }
};
export default CamperList;
