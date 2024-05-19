import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import {
  selectAdverts,
  selectPageLimit,
  selectPage,
  selectTotalAdverts,
} from "../../redux/adverts/selectors";
import { fetchAllAdverts } from "../../redux/adverts/advertsOperations";
import { LoadMore } from "./LoadMoreStyles";
import { setPage } from "../../redux/adverts/advertsSlice";

const LoadMoreBtn = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const page = useSelector(selectPage);
  const pageLimit = useSelector(selectPageLimit);
  const totalAdverts = useSelector(selectTotalAdverts);

  const handleLoadMore = (event) => {
    event.preventDefault();

    const nextPage = page + 1;
    const offset = page * pageLimit;

    dispatch(setPage(nextPage));
    dispatch(fetchAllAdverts({ page: nextPage, limit: pageLimit, offset }));
  };
  const allAdvertsLoaded = adverts.length >= totalAdverts;
  return (
    !allAdvertsLoaded && (
      <LoadMore type="button" onClick={handleLoadMore}>
        Load more
      </LoadMore>
    )
  );
};
export default LoadMoreBtn;
