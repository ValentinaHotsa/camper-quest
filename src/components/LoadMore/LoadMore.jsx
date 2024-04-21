import { useDispatch, useSelector } from "react-redux";
import {
  selectAdverts,
  selectPageLimit,
  selectPage,
} from "../../redux/adverts/selectors";
import { fetchAllAdverts } from "../../redux/adverts/advertsOperations";
import { LoadMore } from "./LoadMoreStyles";
import { setPage } from "../../redux/adverts/advertsSlice";

const LoadMoreBtn = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const page = useSelector(selectPage);
  const pageLimit = useSelector(selectPageLimit);

  const handleLoadMore = () => {
    const nextPage = page + 1;

    dispatch(setPage(nextPage));
    dispatch(fetchAllAdverts({ page: nextPage, limit: pageLimit }));
  };
  return (
    <>
      <LoadMore type="button" onClick={handleLoadMore}>
        Load more
      </LoadMore>
    </>
  );
};
export default LoadMoreBtn;
