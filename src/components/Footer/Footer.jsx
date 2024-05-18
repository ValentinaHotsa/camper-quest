import { ContainerFooter, IconWrap } from "./FooterStyled";
import svg from "../../assets/icons.svg";
const Footer = () => {
  return (
    <ContainerFooter>
      <p>Developed by Valentyna Hotsa</p>
      <IconWrap>
        <a
          href="https://github.com/ValentinaHotsa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg>
            <use href={`${svg}#icon-github`}></use>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/valentynahotsa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg>
            <use href={`${svg}#icon-linkedin`}></use>
          </svg>
        </a>
      </IconWrap>
    </ContainerFooter>
  );
};

export default Footer;
