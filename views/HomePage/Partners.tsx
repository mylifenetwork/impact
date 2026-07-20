import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';

type PartnerLogo = {
  label: string;
  imageUrl: string;
  href: string;
  size: 'sm' | 'md' | 'lg';
};

const PARTNER_LOGOS: PartnerLogo[] = [
  {
    label: 'HSBC',
    imageUrl: '/partners/hsbc.png',
    href: 'https://www.hsbc.com.hk',
    size: 'lg',
  },
  {
    label: 'Silence',
    imageUrl: '/partners/Silence.jpeg',
    href: 'https://www.silence.org.hk',
    size: 'md',
  },
  {
    label: 'HKU',
    imageUrl: '/partners/HKU.png',
    href: 'https://www.hku.hk/c_index.html',
    size: 'sm',
  },
  {
    label: 'Standard Chartered',
    imageUrl: '/partners/SCB.png',
    href: 'https://av.sc.com/hk/zh/cybersecurity-sign-language/',
    size: 'lg',
  },
  {
    label: 'SLCO',
    imageUrl: '/partners/slco.jpeg',
    href: 'https://slco.org.hk',
    size: 'sm',
  },
  {
    label: 'PolyU',
    imageUrl: '/partners/polyu.png',
    href: 'https://www.polyu.edu.hk',
    size: 'md',
  },
];

export default function Partners() {
  return (
    <PartnersWrapper>
      <Title>Trusted by Leading Organizations</Title>
      <Collage>
        {PARTNER_LOGOS.map((logo, index) => (
          <LogoCard key={logo.label} href={logo.href} target="_blank" rel="noreferrer" $size={logo.size} $index={index}>
            <img src={logo.imageUrl} alt={logo.label} />
          </LogoCard>
        ))}
      </Collage>
    </PartnersWrapper>
  );
}

const Title = styled.h2`
  margin: 0 0 1rem;
  font-size: 4.2rem;
  line-height: 1.1;
  text-align: center;

  ${media('<=tablet')} {
    font-size: 3.2rem;
  }
`;

const Collage = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-auto-rows: 10rem;
  gap: 1.4rem;
  align-items: stretch;

  ${media('<=tablet')} {
    grid-template-columns: repeat(6, minmax(0, 1fr));
    grid-auto-rows: 9rem;
    gap: 1rem;
  }

  ${media('<=phone')} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-auto-rows: 8.5rem;
  }
`;

const LogoCard = styled.a<{ $size: 'sm' | 'md' | 'lg'; $index: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${(p) => (p.$size === 'lg' ? '18rem' : p.$size === 'md' ? '14rem' : '11rem')};
  padding: 1.8rem;
  border-radius: ${(p) => (p.$size === 'lg' ? '2rem' : '1.4rem')};
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.035));
  border: 1px solid rgba(255, 255, 255, 0.08);
  text-decoration: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
  box-shadow: 0 1rem 2.4rem rgba(0, 0, 0, 0.12);
  transform: ${(p) => {
    const rotations = ['-2deg', '1.5deg', '-1deg', '2deg', '-1.6deg', '1deg'];
    return `rotate(${rotations[p.$index % rotations.length]})`;
  }};

  grid-column: ${(p) => {
    if (p.$size === 'lg') return 'span 5';
    if (p.$size === 'md') return 'span 4';
    return 'span 3';
  }};
  grid-row: ${(p) => {
    if (p.$size === 'lg') return 'span 2';
    return 'span 1';
  }};

  &:hover {
    transform: translateY(-4px) rotate(0deg);
    box-shadow: 0 1.4rem 3rem rgba(0, 0, 0, 0.16);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.045));
  }

  &:nth-child(1) {
    grid-column: 1 / span 5;
  }

  &:nth-child(2) {
    grid-column: 6 / span 3;
    grid-row: 1 / span 2;
  }

  &:nth-child(3) {
    grid-column: 9 / span 4;
  }

  &:nth-child(4) {
    grid-column: 1 / span 4;
    grid-row: 3 / span 2;
  }

  &:nth-child(5) {
    grid-column: 5 / span 3;
    grid-row: 3 / span 1;
  }

  &:nth-child(6) {
    grid-column: 8 / span 5;
    grid-row: 3 / span 2;
  }

  ${media('<=tablet')} {
    grid-column: auto !important;
    grid-row: auto !important;
    min-height: ${(p) => (p.$size === 'lg' ? '14rem' : p.$size === 'md' ? '12rem' : '10rem')};
  }

  ${media('<=phone')} {
    min-height: ${(p) => (p.$size === 'lg' ? '12.5rem' : p.$size === 'md' ? '11rem' : '9.5rem')};
    padding: 1.4rem;
  }

  img {
    max-width: 100%;
    max-height: ${(p) => (p.$size === 'lg' ? '9rem' : p.$size === 'md' ? '7.5rem' : '6.5rem')};
    object-fit: contain;
    opacity: 1;
  }
`;

const PartnersWrapper = styled(Container)`
  padding-bottom: 1.5rem;

  ${media('<=tablet')} {
    padding-bottom: 1rem;
  }
`;
