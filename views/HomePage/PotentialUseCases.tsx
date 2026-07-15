import styled from 'styled-components';
import NextImage from 'next/image';
import Container from 'components/Container';
import { media } from 'utils/media';

const USE_CASES = [
  {
    title: 'Public Transport',
    imageUrl: '/transport.jpeg',
    description:
      'Provide real-time voice announcements and dynamic captioning for MTR, buses, and the airport, so passengers with visual or hearing impairments can access arrival, transfer, and delay information without barriers.',
    icon: 'transport',
  },
  {
    title: 'Education',
    imageUrl: '/education.jpeg',
    description:
      'Launch elective Hong Kong Sign Language courses alongside live classroom captioning to address the shortage of professional interpreters and create a more equal learning environment for deaf and hard-of-hearing students.',
    icon: 'education',
  },
  {
    title: 'Financial Services',
    imageUrl: '/website.png',
    description:
      'Embed intelligent translation tools that turn complex financial jargon into clear, plain language. With sign-language videos or visual guides, deaf clients can independently handle account inquiries, transfers, and investment applications.',
    icon: 'finance',
  },
  {
    title: 'Public Venues & Entertainment',
    imageUrl: '/entertainment.jpg',
    description:
      'Install induction loop systems and accessible guided tours in museums, large-scale events, and stadiums, helping every visitor fully enjoy cultural, sporting, and performance experiences.',
    icon: 'entertainment',
  },
] as const;

export default function PotentialUseCases() {
  return (
    <Section>
      <Header>
        <Title>Potential Use Cases</Title>
        {/* <Description>
          Real-world scenarios where accessible translation can remove communication barriers and support inclusive services.
        </Description> */}
      </Header>

      <Grid>
        {USE_CASES.map((item) => (
          <Card key={item.title}>
            <ImageFrame>
              <NextImage src={item.imageUrl} alt={item.title} layout="fill" objectFit="cover" />
            </ImageFrame>
            <IconWrap>
              <UseCaseIcon kind={item.icon} />
            </IconWrap>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}

function UseCaseIcon({ kind }: { kind: (typeof USE_CASES)[number]['icon'] }) {
  switch (kind) {
    case 'transport':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 3h12a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z" />
          <path d="M8 18v2" />
          <path d="M16 18v2" />
          <path d="M6.5 8h11" />
          <path d="M7 12h2" />
          <path d="M15 12h2" />
        </svg>
      );
    case 'education':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m3 9 9-4 9 4-9 4-9-4Z" />
          <path d="M7 11v4c0 1.7 2.2 3 5 3s5-1.3 5-3v-4" />
          <path d="M21 9v5" />
        </svg>
      );
    case 'finance':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 7h16v10H4z" />
          <path d="M7 7v10" />
          <path d="M17 7v10" />
          <path d="M12 9v6" />
          <path d="M10 10.5h4" />
          <path d="M10 13.5h4" />
        </svg>
      );
    case 'entertainment':
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3l2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7L12 3Z" />
          <path d="M5 20h14" />
        </svg>
      );
  }
}

const Section = styled(Container)`
  padding-top: 2rem;
`;

const Header = styled.div`
  text-align: center;
  max-width: 78rem;
  margin: 0 auto 3rem;
`;

const OverTitle = styled.p`
  margin: 0;
  font-size: 1.2rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.7;
`;

const Title = styled.h2`
  margin: 0.8rem 0 1rem;
  font-size: 4.2rem;
  line-height: 1.1;

  ${media('<=tablet')} {
    font-size: 3.2rem;
  }
`;

const Description = styled.p`
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.65;
  opacity: 0.86;

  ${media('<=tablet')} {
    font-size: 1.5rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;

  ${media('<=tablet')} {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  padding: 2.4rem;
  border-radius: 1.8rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 1.2rem 2.8rem rgba(0, 0, 0, 0.06);

  ${media('<=tablet')} {
    padding: 2rem;
  }
`;

const ImageFrame = styled.div`
  position: relative;
  width: 100%;
  height: 18rem;
  border-radius: 1.2rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.06);
  box-shadow: inset 0 -8rem 8rem rgba(0, 0, 0, 0.08);
`;

const IconWrap = styled.div`
  width: 5.2rem;
  height: 5.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.4rem;
  background: rgba(255, 255, 255, 0.08);
  color: rgb(var(--primary));
  margin-top: 1.4rem;

  svg {
    width: 2.6rem;
    height: 2.6rem;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

const CardTitle = styled.h3`
  margin: 1.4rem 0 0.8rem;
  font-size: 2rem;
  line-height: 1.2;
`;

const CardDescription = styled.p`
  margin: 0;
  font-size: 1.5rem;
  line-height: 1.7;
  opacity: 0.84;
`;