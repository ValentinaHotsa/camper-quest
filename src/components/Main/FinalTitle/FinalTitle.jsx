import finalblock1 from "../../../assets/hero/finalblock1.jpg";
import finalblock2 from "../../../assets/hero/finalblock2.jpg";
import {
  Section,
  Container,
  Title,
  ImgThumb1,
  ImgThumb2,
  Image,
  ImgContainer,
} from "./FinalTitleStyled";

const FinalTitle = () => {
  return (
    <Section>
      <Container>
        <Title>
          Start your journey today by browsing our fleet and booking your camper
          rental online. Let's make your travel dreams a reality!
        </Title>
        <ImgContainer>
          <ImgThumb1>
            <Image src={finalblock2} alt="camper"></Image>
          </ImgThumb1>
          <ImgThumb2>
            <Image src={finalblock1} alt="father and son"></Image>
          </ImgThumb2>
        </ImgContainer>
      </Container>
    </Section>
  );
};

export default FinalTitle;
