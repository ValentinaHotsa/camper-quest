import { useState } from "react";
import Modal from "../Modal/Modal";
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

  const toggleModal = () => {
    setIsOpen(!isOpen);
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
            <Price>
              €{price + " "}
              <span>
                <svg>
                  <use href={`${svg}#icon-heart`}></use>
                </svg>
              </span>
            </Price>
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
