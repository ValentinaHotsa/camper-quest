import { useSelector } from "react-redux";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { selectFavorites } from "../../redux/adverts/selectors";
import { removeFromFavorite } from "../../redux/adverts/advertsSlice";
import { CamperCard } from "../CamperCard/CamperCard";
import {
  FavoritesList,
  FavoritesWrapper,
  FavoritesTitle,
} from "./FavoritesStyled";
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
    <FavoritesWrapper>
      <FavoritesTitle>
        Your Saved <span>Camper</span> Choices
      </FavoritesTitle>
      {favorite.length === 0 ? (
        <h3>no favorites</h3>
      ) : (
        <FavoritesList>
          {favorite.map((camper) => (
            <li key={camper._id}>
              <CamperCard data={camper} />
            </li>
          ))}
        </FavoritesList>
      )}
    </FavoritesWrapper>
  );
};

export default Favorites;
