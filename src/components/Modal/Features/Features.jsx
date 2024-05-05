import {
  FeaturesTab,
  FeaturesList,
  LeftWrap,
  TitleDetail,
  DetailsList,
  FormContainer,
} from "./FeaturesStyled";

import FormComponent from "../FormComponent/FormComponent";
const Features = ({ data }) => {
  const {
    form,
    length,
    height,
    width,
    tank,
    consumption,
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
  return (
    <>
      <FeaturesTab>
        <LeftWrap>
          <FeaturesList></FeaturesList>

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
        </LeftWrap>

        <FormContainer>
          <FormComponent />
        </FormContainer>
      </FeaturesTab>
    </>
  );
};

export default Features;
