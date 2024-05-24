import svg from "../../../assets/icons.svg";

import {
  BenefitsContainer,
  BenefitsList,
  BenefitsSection,
  ItemContainer,
} from "./BenefitsStyles";

const Benefits = () => {
  return (
    <BenefitsSection>
      <BenefitsContainer>
        <BenefitsList>
          <li>
            <ItemContainer>
              <svg>
                <use href={`${svg}#icon-quality`}></use>
              </svg>
              <p>Quality Assurance</p>
            </ItemContainer>
          </li>
          <li>
            <ItemContainer>
              <svg>
                <use href={`${svg}#icon-variety`}></use>
              </svg>
              <p>Variety of Options</p>
            </ItemContainer>
          </li>
          <li>
            <ItemContainer>
              <svg>
                <use href={`${svg}#icon-support`}></use>
              </svg>
              <p>Customer Support</p>
            </ItemContainer>
          </li>
          <li>
            <ItemContainer>
              <svg>
                <use href={`${svg}#icon-calendarH`}></use>
              </svg>
              <p>Convenience</p>
            </ItemContainer>
          </li>
        </BenefitsList>
      </BenefitsContainer>
    </BenefitsSection>
  );
};

export default Benefits;
