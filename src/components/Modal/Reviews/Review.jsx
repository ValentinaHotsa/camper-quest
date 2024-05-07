import {
  ReviewTab,
  LoginWraper,
  Avatar,
  NameWraper,
  UserName,
  Rating,
  ReviewText,
  ReviewsContainer,
} from "./ReviewStyled";

const Review = ({ data }) => {
  const { reviews } = data;
  return (
    <ReviewsContainer>
      {reviews.map((review, index) => (
        <ReviewTab key={index}>
          <LoginWraper>
            <Avatar>{review.reviewer_name.charAt(0)}</Avatar>
            <NameWraper>
              <UserName>{review.reviewer_name}</UserName>
              <Rating>{review.reviewer_rating}</Rating>
            </NameWraper>
          </LoginWraper>
          <ReviewText>{review.comment}</ReviewText>
        </ReviewTab>
      ))}
    </ReviewsContainer>
  );
};

export default Review;
