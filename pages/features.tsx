import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import YoutubeVideo from 'components/YoutubeVideo';
import { media } from 'utils/media';
import BasicSection from 'components/BasicSection';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';

const FEATURES = [
  /* {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  }, */
  {
    imageUrl: '/grid-icons/real-time.png',
    title: 'Real-time',
    description:
      'Experience seamless communication with instant translation in real-time, allowing for fluid communication in cases when an interpreter is not available.'
  },
  {
    imageUrl: '/grid-icons/accurate.png',
    title: 'Accurate',
    description:
      "Trust in the precision and reliability of our app's translation, ensuring clear and precise communication every time by eliminating human error."
  },
  {
    imageUrl: '/grid-icons/custom.png',
    title: 'Customisable',
    description:
      'Tailor the app to suit your communication needs across various domains, ensuring accurate and personalized translations for every situation.'
  },
];

export default function FeaturesPage() {
  return (
    <Page title="Features" description="Our HKSL Translation App is packed with features that ensure seamless translation and ease of use.">
      <Wrapper>
        {/*
        <SectionTitle>Check out this quick introduction</SectionTitle>
        <YoutubeVideo url="https://www.youtube.com/watch?v=BggrpKfqh1c" />
  */}
        <HeroWrapper>
          <Contents>
            <CustomOverTitle>Enabling social inclusion through technology</CustomOverTitle>
            <Heading>Hong Kong Sign Language translation for all</Heading>
            <Description>
            Our goal is to make communities more accessible for people with hearing disabilities by bridging the communication 
            gap between the deaf community and the public by increasing awareness and education of Hong Kong Sign Language.
            </Description>
          </Contents>
          <ImageContainer>
            <img src='/screenshot.jpeg' width='60%'/>
          </ImageContainer>
        </HeroWrapper>
        <CustomAutofitGrid>
          {FEATURES.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>
    </Page>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;


const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;


const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
