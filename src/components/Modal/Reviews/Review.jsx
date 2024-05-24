import {
  ReviewTab,
  LoginWraper,
  Avatar,
  UserName,
  ReviewText,
  ReviewsContainer,
} from "./ReviewStyled";
import Rating from "./Rating";

const Review = ({ data }) => {
  const { reviews } = data;

  return (
    <ReviewsContainer>
      {reviews.map((review, index) => (
        <ReviewTab key={index}>
          <LoginWraper>
            <Avatar>{review.reviewer_name.charAt(0)}</Avatar>
            <div>
              <UserName>{review.reviewer_name}</UserName>
              <Rating rating={review.reviewer_rating}>
                {review.reviewer_rating}
              </Rating>
            </div>
          </LoginWraper>
          <ReviewText>{review.comment}</ReviewText>
        </ReviewTab>
      ))}
    </ReviewsContainer>
  );
};

export default Review;
