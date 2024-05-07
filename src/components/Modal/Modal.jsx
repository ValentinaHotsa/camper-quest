import { useEffect, useRef, useState } from "react";
import svg from "../../assets/icons.svg";

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
import Features from "./Features/Features";
import Review from "./Reviews/Review";

import FormComponent from "./FormComponent/FormComponent";

const Modal = ({ onClose, isOpen, data }) => {
  const targetElement = document.getElementById("modal-root");
  const backdrop = useRef();

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

  useEffect(() => {
    const eventHandler = (e) => handleKeyDown(e);
    document.addEventListener("keydown", eventHandler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", eventHandler);
    };
  }, []);
  const [activeTab, setActiveTab] = useState("Features");
  const handleTabChange = (name) => {
    setActiveTab(name);
  };

  return (
    <>
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
    </>
  );
};

export default Modal;

//   const [content, setContent] = useState("");
//   console.log("Data in CardModal:", data);
//   return (
//     <>
//       <ModalCard key={_id}>
//         <TitleCard>{name} </TitleCard>
//         <RevLocWraper>
//           <Rating>{rating}</Rating>
//           <Location>{location}</Location>
//         </RevLocWraper>
//         <Price>{price}</Price>
//         <ImgList>
//           <ImgContainer>
//             <Img src={gallery[0]}></Img>
//           </ImgContainer>
//         </ImgList>
//         <Description>{description}</Description>

//         {/* <DetailsContainer>
//           <DetailsList>
//             <li>{adults} adults</li>

//             <li>{transmission}</li>
//             <li>{engine}</li>
//             <li>{details.beds} beds</li>
//             <li>Kitchen</li>
//             <li>AC</li>
//           </DetailsList>
//         </DetailsContainer> */}
//       </ModalCard>
//     </>
//   );
// };
