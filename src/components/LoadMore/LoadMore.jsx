import { LoadMore } from "./LoadMoreStyles";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <LoadMore type="button" onClick={onLoadMore}>
      Load more
    </LoadMore>
  );
};
export default LoadMoreBtn;
