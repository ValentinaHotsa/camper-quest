import { useEffect, useRef, useState } from "react";
import svg from "../../assets/icons.svg";
import FormComponent from "./FormComponent/FormComponent";
import Features from "./Features/Features";
import Review from "./Reviews/Review";
import {
  ModalContent,
  ModalWrapper,
  Popup,
  CloseButton,
  TitleCard,
  RevLocWraper,
  Rating,
  Location,
  Price,
  ImgList,
  Description,
  TopWrap,
  TabWraper,
  Button,
  TabContent,
  LeftWrap,
  RightWrap,
  ImgThumb,
} from "./ModalStyled";

const Modal = ({ onClose, isOpen, data }) => {
  const backdrop = useRef();
  const { name, gallery, price, location, reviews, rating, description } = data;
  const [activeTab, setActiveTab] = useState("Features");

  const handleClickOutside = (event) => {
    if (event.target === backdrop.current) {
      onClose();
    }
    document.body.style.overflow = "";
    document.body.style.position = "";
    event.stopPropagation();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      document.body.style.overflow = "";
      document.body.style.position = "";
      onClose();
    }
  };

  const handleTabChange = (name) => {
    setActiveTab(name);
  };

  useEffect(() => {
    const eventHandler = (e) => handleKeyDown(e);
    document.addEventListener("keydown", eventHandler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", eventHandler);
    };
  }, []);

  return (
    <Popup onClick={handleClickOutside} ref={backdrop}>
      <ModalWrapper>
        <ModalContent>
          <TopWrap>
            <TitleCard>{name}</TitleCard>
            <CloseButton onClick={onClose}>
              <svg>
                <use href={`${svg}#icon-close`}></use>
              </svg>
            </CloseButton>
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
          <Price>€{price + " "}</Price>
          <ImgList>
            <ImgThumb>
              <img src={gallery[0]} alt={name} />
            </ImgThumb>
            <ImgThumb>
              <img src={gallery[1]} alt={name} />
            </ImgThumb>
            <ImgThumb>
              <img src={gallery[2]} alt={name} />
            </ImgThumb>
          </ImgList>
          <Description>{description}</Description>
          <TabWraper>
            <Button
              type="button"
              onClick={() => handleTabChange("Features")}
              active={activeTab === "Features"}
            >
              Features
            </Button>
            <Button
              type="button"
              onClick={() => handleTabChange("Reviews")}
              active={activeTab === "Reviews"}
            >
              Reviews
            </Button>
          </TabWraper>

          <TabContent>
            <LeftWrap>
              {activeTab === "Features" ? (
                <Features data={data} />
              ) : (
                <Review data={data} />
              )}
            </LeftWrap>
            <RightWrap>
              <FormComponent />
            </RightWrap>
          </TabContent>
        </ModalContent>
      </ModalWrapper>
    </Popup>
  );
};

export default Modal;
