import { StarContainer, StarIcon } from "./ReviewStyled";
import svg from "../../../assets/icons.svg";

const Rating = ({ rating }) => {
  // Округляем рейтинг до ближайшего полузвездного значения
  const roundedRating = Math.round(rating * 2) / 2;

  // Генерируем массив звездочек для рейтинга
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < roundedRating) {
      // Закрашенная звезда для оценок выше или равных текущему значению
      stars.push(
        <StarIcon key={i} filled>
          <use href={`${svg}#icon-star`}></use>
        </StarIcon>
      );
    } else {
      // Пустая звезда для оценок ниже текущего значения
      stars.push(
        <StarIcon key={i}>
          <use href={`${svg}#icon-star`}></use>
        </StarIcon>
      );
    }
  }

  return <StarContainer>{stars}</StarContainer>;
};

export default Rating;
