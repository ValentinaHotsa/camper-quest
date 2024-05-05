import { useEffect, useRef } from "react";
import svg from "../../../src/logo.svg";
import ReactDOM from "react-dom";
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
} from "./ModalStyled";
import Features from "./Features/Features";
import Review from "./Reviews/Review";

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
            <Price>
              €{price + " "}
              <span>
                <svg>
                  <use href={`${svg}#icon-heart`}></use>
                </svg>
              </span>
            </Price>
            <ImgList>
              {gallery.map((img) => (
                <img src={img} key={img} alt={name}></img>
              ))}
            </ImgList>
            <Description>{description}</Description>
            <TabWraper>
              <Button type="button">Features</Button>
              <Button type="button">Reviews</Button>
            </TabWraper>
            <Features data={data} />
            <Review />
          </ModalContent>
        </ModalWrapper>
      </Popup>
      ,
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
