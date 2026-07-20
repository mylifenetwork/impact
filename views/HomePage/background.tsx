import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';

const STATS = [
  {
    value: '250,000+',
    label: 'Hong Kong Deaf & Hard-of-Hearing Community',
  },
  {
    value: '1.5B+',
    label: 'People with Hearing Loss Worldwide',
  },
  {
    value: '50+',
    label: 'Registered HKSL Interpreters in Hong Kong',
  },
  {
    value: '∞',
    label: 'Potential Digital Services Made Accessible',
  },
] as const;

export default function Background() {
  return (
    <Section>
      <Header>
        {/* <OverTitle>Background</OverTitle> */}
        <Title>Background</Title>
        <Lead>AI should empower everyone—not leave millions behind.</Lead>
        <Description>
          Impact AI is building the AI accessibility layer for an inclusive digital future.
          Our flagship solution, HKSL AI, enables organizations to communicate with Deaf and Hard-of-Hearing communities through natural, AI-powered Hong Kong Sign Language translation. As we grow, we aim to expand our accessibility technologies to support more sign languages, communication needs, and inclusive AI experiences worldwide.
        </Description>
      </Header>

      <StatsGrid>
        {STATS.map((item) => (
          <StatCard key={item.label}>
            <StatValue>{item.value}</StatValue>
            <StatLabel>{item.label}</StatLabel>
          </StatCard>
        ))}
      </StatsGrid>
    </Section>
  );
}

const Section = styled(Container)`
  padding: 4rem 0;
`;

const Header = styled.div`
  text-align: center;
  max-width: 86rem;
  margin: 0 auto 3rem;
  padding: 0 1rem;
`;

const OverTitle = styled.p`
  margin: 0;
  font-size: 1.2rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  opacity: 0.72;
`;

const Title = styled.h2`
  margin: 1rem 0 1rem;
  font-size: clamp(3rem, 4vw, 4.5rem);
  line-height: 1.05;
`;

const Lead = styled.p`
  color: #9b04b3;
  margin: 0 auto 1rem;
  max-width: 120rem;
  font-size: clamp(2rem, 2.2vw, 2.7rem);
  font-weight: 700;
  line-height: 1.2;
  opacity: 0.95;
`;

const Description = styled.p`
  margin: 0 auto;
  max-width: 160rem;
  font-size: 1.75rem;
  line-height: 1.9;
  opacity: 0.8;
  white-space: pre-line;

  ${media('<=desktop')} {
    font-size: 1.55rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.4rem;

  ${media('<=phone')} {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  padding: 2.6rem;
  border-radius: 1.8rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 1.4rem 2.8rem rgba(0, 0, 0, 0.06);
`;

const StatValue = styled.div`
  font-size: clamp(3rem, 5vw, 4.2rem);
  font-weight: 800;
  line-height: 1;
  color: rgb(var(--primary));
`;

const StatLabel = styled.p`
  margin: 1rem 0 0;
  font-size: 1.35rem;
  line-height: 1.6;
  opacity: 0.88;
`;
