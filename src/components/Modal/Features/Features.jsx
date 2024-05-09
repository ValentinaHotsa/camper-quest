import {
  FeaturesTab,
  FeaturesList,
  TitleDetail,
  DetailsList,
} from "./FeaturesStyled";

import svg from "../../../assets/icons.svg";
import FormComponent from "../FormComponent/FormComponent";
const Features = ({ data }) => {
  const {
    form,
    length,
    height,
    width,
    tank,
    consumption,
    kitchen,
    adults,
    details,
    engine,
    transmission,
    _id,
  } = data;
  return (
    <>
      <FeaturesTab>
        <FeaturesList>
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
          {kitchen > 0 ? (
            <li>
              <svg>
                <use href={`${svg}#icon-kitchen`}></use>
              </svg>
              kitchen
            </li>
          ) : null}

          <li>
            <svg>
              <use href={`${svg}#icon-beds`}></use>
            </svg>
            {details.beds} beds
          </li>

          {details.microwave > 0 ? (
            <li>
              <svg>
                <use href={`${svg}#icon-microwave`}></use>
              </svg>
              Microwave
            </li>
          ) : null}
          {details.airConditioner > 0 ? (
            <li>
              <svg>
                <use href={`${svg}#icon-conditioner`}></use>
              </svg>
              {details.airConditioner} air conditioner
            </li>
          ) : null}
          {details.CD > 0 ? (
            <li>
              <svg>
                <use href={`${svg}#icon-CD`}></use>
              </svg>
              CD
            </li>
          ) : null}

          {details.radio > 0 ? (
            <li>
              <svg>
                <use href={`${svg}#icon-radio`}></use>
              </svg>
              Radio
            </li>
          ) : null}

          {details.hob > 0 ? (
            <li>
              <svg>
                <use href={`${svg}#icon-hob`}></use>
              </svg>
              {details.hob} hob
            </li>
          ) : null}

          {details.toilet > 0 ? (
            <li>
              <svg>
                <use href={`${svg}#icon-toilet`}></use>
              </svg>
              Toilet
            </li>
          ) : null}

          {details.shower > 0 ? (
            <li>
              <svg>
                <use href={`${svg}#icon-shower`}></use>
              </svg>
              Shower
            </li>
          ) : null}
          {details.freezer > 0 ? (
            <li>
              <svg>
                <use href={`${svg}#icon-freezer`}></use>
              </svg>
              Freezer
            </li>
          ) : null}

          {details.gas !== "" ? (
            <li>
              <svg>
                <use href={`${svg}#icon-gas`}></use>
              </svg>
              Gas {details.gas}
            </li>
          ) : null}

          {details.water !== "" ? (
            <li>
              <svg>
                <use href={`${svg}#icon-water`}></use>
              </svg>
              Water {details.water}
            </li>
          ) : null}
        </FeaturesList>

        <TitleDetail>Vehicle details</TitleDetail>
        <DetailsList>
          <li>
            Form<span>{form}</span>
          </li>
          <li>
            Length <span>{length}</span>
          </li>

          <li>
            Width
            <span>{width}</span>
          </li>
          <li>
            Height
            <span>{height}</span>
          </li>
          <li>
            Tank
            <span>{tank}</span>
          </li>
          <li>
            Consumption
            <span>{consumption}</span>
          </li>
        </DetailsList>
      </FeaturesTab>
    </>
  );
};

export default Features;
