import NextImage from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';

type HonorItem = {
  title: string;
  imageUrl?: string;
  imageAlt: string;
};

const HONOR_ITEMS: HonorItem[] = [
  {
    title: 'Grand Award at the “Innovative Application with AI” Innovation Competition',
    imageUrl: '/grand.jpeg',
    imageAlt: 'Grand Award illustration',
  },
  {
    title: 'Invited Speaker at Google Cloud Summit 2025 & I/O Connect China 2025',
    imageUrl: '/IO.jpg',
    imageAlt: 'Google Cloud Summit illustration',
  },
  {
    title: 'Presenter at InnoEx to 4,000+ guests',
    imageUrl: '/talk.jpeg',
    imageAlt: 'InnoEx exhibition illustration',
  },
  {
    title: 'Exhibition at the 9th China Digital Summit Hong Kong Pavilion',
    imageUrl: '/digital.jpeg',
    imageAlt: 'Hong Kong Pavilion exhibition illustration',
  },
  // {
  //   title: '2026 Global Supplier Diversity & Inclusion Townhall - Guest Speaker',
  //   imageUrl: '/global.jpeg',
  //   imageAlt: 'Global Supplier Diversity & Inclusion Townhall illustration',
  // },
  {
    title: 'Google | HKSTP Rocketing AI Co-incubation Program (2nd Cohort) - 2025',
    imageUrl: '/rocketing.jpeg',
    imageAlt: 'Google | HKSTP Rocketing AI Co-incubation Program illustration',
  },
  {
    title: 'SC WIN Now & Next Challenge, top 10 finalists - 2025',
    imageUrl: '/global.jpeg',
    imageAlt: 'Google | HKSTP Rocketing AI Co-incubation Program illustration',
  }
];

function getOffset(index: number, activeIndex: number, total: number) {
  const raw = index - activeIndex;
  const half = Math.floor(total / 2);

  if (raw > half) return raw - total;
  if (raw < -half) return raw + total;
  return raw;
}

export default function Honors() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => {
        const nextIndex = currentIndex + 1;
        return nextIndex >= HONOR_ITEMS.length ? 0 : nextIndex;
      });
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, []);

  function changeItem(direction: -1 | 1) {
    setActiveIndex((currentIndex) => {
      const nextIndex = currentIndex + direction;
      if (nextIndex < 0) return HONOR_ITEMS.length - 1;
      if (nextIndex >= HONOR_ITEMS.length) return 0;
      return nextIndex;
    });
  }

  return (
    <HonorsSection>
      <Header>
        <Title>Our Journey</Title>
        {/* <Description>
          A simple carousel showing our recognition, invited talks, and outreach activities. It advances automatically every few seconds, and you can still use the arrows to browse manually.
        </Description> */}
      </Header>

      <CarouselShell>
        <ArrowButton type="button" aria-label="Previous honor" onClick={() => changeItem(-1)}>
          <span>←</span>
        </ArrowButton>

        <CarouselViewport>
          <ActiveCardSlot>
            <CarouselCard $offset={0} $visible $active>
              <Visual>
                {HONOR_ITEMS[activeIndex].imageUrl ? (
                  <NextImage
                    src={HONOR_ITEMS[activeIndex].imageUrl as string}
                    alt={HONOR_ITEMS[activeIndex].imageAlt}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                  />
                ) : (
                  <Placeholder>
                    <PlaceholderLabel>Image</PlaceholderLabel>
                    <PlaceholderText>Replace with photo or logo</PlaceholderText>
                  </Placeholder>
                )}
              </Visual>

              <CardBody>
                <SlideCounter>
                  {activeIndex + 1}/{HONOR_ITEMS.length}
                </SlideCounter>
                <HonorTitle>{HONOR_ITEMS[activeIndex].title}</HonorTitle>
              </CardBody>
            </CarouselCard>
          </ActiveCardSlot>

          <OverlayLayer>
            {HONOR_ITEMS.map((item, index) => {
              const offset = getOffset(index, activeIndex, HONOR_ITEMS.length);
              const visible = Math.abs(offset) <= 1;

              if (offset === 0) {
                return null;
              }

              return (
                <CarouselCard key={item.title} $offset={offset} $visible={visible} $active={false}>
                  <Visual>
                    {item.imageUrl ? (
                      <NextImage
                        src={item.imageUrl}
                        alt={item.imageAlt}
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    ) : (
                      <Placeholder>
                        <PlaceholderLabel>Image</PlaceholderLabel>
                        <PlaceholderText>Replace with photo or logo</PlaceholderText>
                      </Placeholder>
                    )}
                  </Visual>

                  <CardBody>
                    <SlideCounter>
                      {index + 1}/{HONOR_ITEMS.length}
                    </SlideCounter>
                    <HonorTitle>{item.title}</HonorTitle>
                  </CardBody>
                </CarouselCard>
              );
            })}
          </OverlayLayer>
        </CarouselViewport>

        <ArrowButton type="button" aria-label="Next honor" onClick={() => changeItem(1)}>
          <span>→</span>
        </ArrowButton>
      </CarouselShell>
    </HonorsSection>
  );
}

const HonorsSection = styled(Container)`
  padding-top: 2rem;
  padding-bottom: 4rem;
`;

const Header = styled.div`
  text-align: center;
  max-width: 82rem;
  margin: 0 auto 2.8rem;
`;

const Title = styled.h2`
  margin: 0.8rem 0 1rem;
  font-size: 4.2rem;
  line-height: 1.1;
  color: rgb(var(--text));

  ${media('<=tablet')} {
    font-size: 3.2rem;
  }
`;

const Description = styled.p`
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.72);

  ${media('<=tablet')} {
    font-size: 1.5rem;
  }
`;

const CarouselShell = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  justify-content: center;
  min-height: 0;
  gap: 1rem;
  width: min(100%,220rem);
  margin: 0 auto;
  padding-top: 2rem;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  box-sizing: border-box;

  ${media('<=tablet')} {
    gap: 0.8rem;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
  }
`;

const CarouselViewport = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  min-width: 0;
`;

const ActiveCardSlot = styled.div`
  position: relative;
  width: 100%;
  z-index: 2;
`;

const OverlayLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  overflow: hidden;
`;

const ArrowButton = styled.button`
  position: relative;
  z-index: 3;
  width: 4.6rem;
  height: 4.6rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  color: rgb(var(--text));
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.12);

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.1);
  }

  span {
    font-size: 1.8rem;
    line-height: 1;
  }

  ${media('<=tablet')} {
    width: 4.2rem;
    height: 4.2rem;
  }
`;

const CarouselCard = styled.article<{ $offset: number; $visible: boolean; $active?: boolean }>`
  position: ${(p) => (p.$active ? 'relative' : 'absolute')};
  top: ${(p) => (p.$active ? 'auto' : '50%')};
  left: ${(p) => (p.$active ? 'auto' : '50%')};
  display: grid;
  grid-template-rows: auto auto;
  overflow: hidden;
  border-radius: 2.4rem;
  background: ${(p) =>
    p.$offset === 0
      ? 'rgba(18, 23, 34, 1)'
      : 'linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.03))'};
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: ${(p) => (p.$offset === 0 ? '0 1.4rem 3rem rgba(0, 0, 0, 0.18)' : '0 1.2rem 2.8rem rgba(0, 0, 0, 0.14)')};
  width: min(72rem, 82vw);
  max-width: 68rem;
  margin: ${(p) => (p.$active ? '0 auto' : '0')};
  opacity: ${(p) => (p.$visible ? (p.$offset === 0 ? 1 : 0.48) : 0)};
  filter: ${(p) => (p.$offset === 0 ? 'none' : 'saturate(0.88) brightness(0.84)')};
  pointer-events: ${(p) => (p.$offset === 0 ? 'auto' : 'none')};
  will-change: transform, opacity;
  transition: transform 0.45s ease, opacity 0.45s ease, filter 0.45s ease;
  z-index: ${(p) => (p.$offset === 0 ? 2 : 1)};

  transform: ${(p) => {
    if (p.$active) return 'none';
    if (p.$offset === 0) return 'translate(-50%, 0) scale(1)';
    if (p.$offset === -1) return 'translate(calc(-50% - 37vw), -50%) scale(0.84)';
    if (p.$offset === 1) return 'translate(calc(-50% + 37vw), -50%) scale(0.84)';
    if (p.$offset < 0) return 'translate(calc(-50% - 64vw), -50%) scale(0.78)';
    return 'translate(calc(-50% + 64vw), -50%) scale(0.78)';
  }};

  ${media('<=tablet')} {
    width: min(34rem, 82vw);
    top: ${(p) => (p.$active ? 'auto' : '50%')};
    transform: ${(p) => {
      if (p.$active) return 'none';
      if (p.$offset === 0) return 'translate(-50%, 0) scale(1)';
      if (p.$offset === -1) return 'translate(calc(-50% - 46vw), -50%) scale(0.78)';
      if (p.$offset === 1) return 'translate(calc(-50% + 46vw), -50%) scale(0.78)';
      if (p.$offset < 0) return 'translate(calc(-50% - 78vw), -50%) scale(0.72)';
      return 'translate(calc(-50% + 78vw), -50%) scale(0.72)';
    }};
  }
`;

const Visual = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: radial-gradient(circle at top, rgba(96, 165, 250, 0.16), rgba(255, 255, 255, 0.04));
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-align: center;
  padding: 1rem;
`;

const PlaceholderLabel = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.45rem 0.8rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  color: rgb(var(--primary));
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const PlaceholderText = styled.p`
  margin: 0;
  font-size: 1.2rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.6);
`;

const CardBody = styled.div`
  min-width: 0;
  min-height: 16rem;
  padding: 2.2rem 2.4rem 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ${media('<=tablet')} {
    min-height: 14rem;
    padding: 1.8rem 1.4rem 2.4rem;
  }
`;

const SlideCounter = styled.p`
  margin: 0 0 0.9rem;
  font-size: 1.2rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.82);
  font-weight: 700;
`;

const HonorTitle = styled.h4`
  margin: 0;
  font-size: 2.2rem;
  line-height: 1.25;
  color: rgb(255, 255, 255);

  ${media('<=tablet')} {
    font-size: 1.9rem;
  }
`;
