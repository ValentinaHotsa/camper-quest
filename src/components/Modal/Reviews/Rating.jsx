import { StarIcon } from "./ReviewStyled";
import svg from "../../../assets/icons.svg";

const Rating = ({ rating }) => {
  const roundedRating = Math.round(rating * 2) / 2;
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < roundedRating) {
      stars.push(
        <StarIcon key={i} filled>
          <use href={`${svg}#icon-star`}></use>
        </StarIcon>
      );
    } else {
      stars.push(
        <StarIcon key={i}>
          <use href={`${svg}#icon-star`}></use>
        </StarIcon>
      );
    }
  }
  return <div>{stars}</div>;
};

export default Rating;
