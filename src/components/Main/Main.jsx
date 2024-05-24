import {
  HomeSection,
  Title,
  SubTitle,
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
    </HomeSection>
  );
};

export default Main;
