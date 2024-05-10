import { useState } from "react";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../redux/adverts/advertsSlice";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/adverts/selectors";
import svg from "../../assets/icons.svg";
import {
  ContainerCard,
  TitleCard,
  RevLocWraper,
  Rating,
  Location,
  Price,
  ContainerInfo,
  Description,
  ImgContainer,
  ImgPrewiev,
  Button,
  DetailsContainer,
  DetailsList,
  TopWrap,
  FavoriteButton,
} from "./CamperCardStyled";

export const CamperCard = ({ data }) => {
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
    _id,
  } = data;

  const [isOpen, setIsOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(data)); // data - данные текущего объявления
    } else {
      dispatch(addToFavorite(data)); // data - данные текущего объявления
    }
    setIsFavorite(!isFavorite);
  };
  return (
    <>
      <ContainerCard>
        <ImgContainer>
          <ImgPrewiev
            src={gallery[0]}
            alt={`${name} camper image`}
          ></ImgPrewiev>
        </ImgContainer>
        <ContainerInfo>
          <TopWrap>
            <TitleCard>{name} </TitleCard>
            <Price>€{price}</Price>
            <FavoriteButton onClick={handleFavoriteToggle}>
              <svg
                style={{
                  fill: isFavorite ? "#E44848" : "",
                  stroke: isFavorite ? "#E44848" : "#101828",
                }}
              >
                <use href={`${svg}#icon-heart`}></use>
              </svg>
            </FavoriteButton>
          </TopWrap>
          <RevLocWraper>
            <Rating>
              <svg>
                <use href={`${svg}#icon-star`}></use>
              </svg>
              {rating}({reviews.length} Reviews)
            </Rating>
            <Location>
              <svg>
                <use href={`${svg}#icon-map-pin`}></use>
              </svg>
              {location}
            </Location>
          </RevLocWraper>

          <Description>{description}</Description>
          <DetailsContainer>
            <DetailsList>
              <li>
                <svg>
                  <use href={`${svg}#icon-users`}></use>
                </svg>
                {adults} adults
              </li>

              <li>
                <svg>
                  <use href={`${svg}#icon-engine`}></use>
                </svg>
                {transmission}
              </li>
              <li>
                <svg>
                  <use href={`${svg}#icon-transm`}></use>
                </svg>
                {engine}
              </li>
              <li>
                <svg>
                  <use href={`${svg}#icon-beds`}></use>
                </svg>
                {details.beds} beds
              </li>
              <li>
                <svg>
                  <use href={`${svg}#icon-kitchen`}></use>
                </svg>
                Kitchen
              </li>
              <li>
                <svg>
                  <use href={`${svg}#icon-ac`}></use>
                </svg>
                AC
              </li>
            </DetailsList>
          </DetailsContainer>

          <Button type="button" onClick={toggleModal}>
            Show more
          </Button>
        </ContainerInfo>

        {isOpen && (
          <Modal isOpen={isOpen} onClose={toggleModal} data={data}></Modal>
        )}
      </ContainerCard>
    </>
  );
};
