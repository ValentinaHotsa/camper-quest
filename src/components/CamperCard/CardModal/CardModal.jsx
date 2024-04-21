import {
  ModalCard,
  TitleCard,
  RevLocWraper,
  Rating,
  Price,
  Location,
  Img,
  Description,
  ImgContainer,
  ImgList,
} from "./CardModalStyles";

export const CardModal = ({ onClose, data }) => {
  const {
    name,
    gallery,
    price,
    location,
    reviews,
    rating,
    description,
    adults,
    details,
    engine,
    transmission,
  } = data;
  return (
    <>
      <ModalCard>
        <TitleCard>{name} </TitleCard>
        <RevLocWraper>
          <Rating>{rating}</Rating>
          <Location>{location}</Location>
        </RevLocWraper>
        <Price>{price}</Price>
        <ImgList>
          <ImgContainer>
            <Img src={gallery[0]}></Img>
          </ImgContainer>
        </ImgList>
        <Description>{description}</Description>

        {/* <DetailsContainer>
          <DetailsList>
            <li>{adults} adults</li>

            <li>{transmission}</li>
            <li>{engine}</li>
            <li>{details.beds} beds</li>
            <li>Kitchen</li>
            <li>AC</li>
          </DetailsList>
        </DetailsContainer> */}
      </ModalCard>
    </>
  );
};
