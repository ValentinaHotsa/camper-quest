import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectFavorites } from "../../redux/adverts/selectors";
import { CamperCard } from "../CamperCard/CamperCard";
import {
  FavoritesList,
  FavoritesWrapper,
  FavoritesTitle,
} from "./FavoritesStyled";

const Favorites = () => {
  const favorite = useSelector(selectFavorites);

  return (
    <FavoritesWrapper>
      <FavoritesTitle>
        Your Saved <span>Camper</span> Choices
      </FavoritesTitle>
      {favorite.length === 0 ? (
        <h3>
          No favorites. Go to the <NavLink to="/catalog">Catalog</NavLink> and
          add the camper to your favorites.
        </h3>
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
