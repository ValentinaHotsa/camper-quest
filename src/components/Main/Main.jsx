import {
  HomeSection,
  Title,
  SubTitle,
  AboutContainer,
  AboutTitle,
  BenefitsList,
  HeroContainer,
  DescriptionContainer,
  DescriptionSection,
  ImgThumb,
  Image,
} from "./MainStyles";
import subtitle from "../../assets/hero/subtitle.jpg";

import Benefits from "./Benefits/Benefits";
import FinalTitle from "./FinalTitle/FinalTitle";

const Main = () => {
  return (
    <HomeSection>
      <HeroContainer>
        <Title>
          Welcome to CamperQuest, where adventure meets comfort on the open
          road!
        </Title>
      </HeroContainer>
      <Benefits />
      <DescriptionSection>
        <DescriptionContainer>
          <ImgThumb>
            <Image src={subtitle} alt="family in the camper"></Image>
          </ImgThumb>
          <SubTitle>
            At <span>Camper</span>Quest, we're passionate about providing you
            with the ultimate road-tripping experience. Whether you're planning
            a family vacation, a weekend getaway with friends, or a solo
            adventure, our fleet of top-quality campers is ready to accompany
            you on your journey.
          </SubTitle>
        </DescriptionContainer>
      </DescriptionSection>
      <FinalTitle />

      {/* <AboutContainer> */}
      {/* <AboutTitle>Why choose us?</AboutTitle> */}
      {/* <BenefitsList>
          <li>
            We pride ourselves on offering more than just a vehicle rental
            service; we deliver an unforgettable travel experience.
          </li>
          <li>
            Our campers are meticulously maintained and equipped with all the
            amenities you need for a comfortable and convenient trip.{" "}
          </li>
          <li>
            With CamperRental, you have the freedom to explore at your own pace,
            discovering hidden gems and scenic landscapes along the way.
          </li>
          <li>
            We understand that every traveler is unique, which is why we offer
            flexible rental options and personalized customer service to ensure
            your trip exceeds expectations.
          </li>
          <li>
            Our team is here to assist you every step of the way, from selecting
            the perfect camper for your needs to providing tips and
            recommendations for your itinerary.
          </li>
        </BenefitsList> */}
      {/* </AboutContainer> */}
    </HomeSection>
  );
};

export default Main;
