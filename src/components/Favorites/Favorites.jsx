import { useSelector } from "react-redux";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { selectFavorites } from "../../redux/adverts/selectors";
import { removeFromFavorite } from "../../redux/adverts/advertsSlice";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorite = useSelector(selectFavorites);

  const removeFavorite = useCallback(
    (advert) => {
      dispatch(removeFromFavorite(advert));
    },
    [dispatch]
  );
  return (
    <>
      <h1>Favorite list</h1>
      {favorite.length === 0 ? (
        <h3>no favorites</h3>
      ) : (
        <ul>
          {favorite.map((camper) => (
            <li key={camper._id}>{camper.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Favorites;
