import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Button from 'components/Button';
import Container from 'components/Container';
import { DEMO_OPTIONS, DemoSlug } from 'views/HomePage/DemoShowcase';
import { media } from 'utils/media';

type DemoPageProps = {
  demo: (typeof DEMO_OPTIONS)[number];
};

export default function DemoPage({ demo }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  if (router.isFallback) return null;

  const related = DEMO_OPTIONS.filter((d) => d.slug !== demo.slug);

  return (
    <>
      <Head>
        <title>{demo.title} — Product Demo</title>
      </Head>

      <PageShell>
        <Container>
          <TopRow>
            <NextLink href="/?scrollTo=product-demo" passHref>
              <BackAnchor>
                <Button transparent>
                  Back <span>&larr;</span>
                </Button>
              </BackAnchor>
            </NextLink>
            <Title>{demo.title}</Title>
          </TopRow>

          <HeroGrid>
            <VideoColumn>
              <VideoPlayer controls poster={demo.poster}>
                <source src={demo.videoSrc} type="video/mp4" />
              </VideoPlayer>
              <Caption>Preview demo — {demo.title}</Caption>
            </VideoColumn>

            <InfoColumn>
              {/* <Description>{demo.description}</Description> */}

              <DetailDescription>
                {demo.detailDescription &&
                  demo.detailDescription.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
              </DetailDescription>

              {/* <FeaturesGrid>
                <FeatureCard>
                  <strong>Key Feature</strong>
                  <p>High-accuracy translation with structure-preserving outputs.</p>
                </FeatureCard>
                <FeatureCard>
                  <strong>How it works</strong>
                  <p>Automated detection → translation → sign-video generation.</p>
                </FeatureCard>
                <FeatureCard>
                  <strong>Benefits</strong>
                  <p>Faster accessibility, lower cost, improved reach.</p>
                </FeatureCard>
              </FeaturesGrid> */}

              {demo.slug === 'website-translation' ? (
                <ButtonRow>
                  <Button as="a" href="https://av.sc.com/hk/zh/cybersecurity-sign-language/">
                    Try this demo <span>&rarr;</span>
                  </Button>
                </ButtonRow>
              ) : null}
            </InfoColumn>
          </HeroGrid>

          <Separator />

          <RelatedTitle>Other demos</RelatedTitle>
          <RelatedGrid>
            {related.map((r) => (
              <RelatedCard key={r.slug} href={`/demo/${r.slug}`}>
                <CardThumb>
                  <NextImage src={r.poster} alt={r.title} layout="fill" objectFit="cover" />
                </CardThumb>
                <div>
                  <h4>{r.title}</h4>
                  <p>{r.description}</p>
                </div>
              </RelatedCard>
            ))}
          </RelatedGrid>
        </Container>
      </PageShell>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: DEMO_OPTIONS.map((demo) => ({ params: { slug: demo.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<DemoPageProps> = async ({ params }) => {
  const slug = params?.slug as DemoSlug | undefined;
  const demo = DEMO_OPTIONS.find((item) => item.slug === slug);
  if (!demo) return { notFound: true };
  return { props: { demo } };
};

const PageShell = styled.div`
  padding: 6rem 0;
`;

const TopRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

const BackAnchor = styled.a`
  display: inline-block;
  align-self: flex-start;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 4.2rem;
  line-height: 1.1;
  text-align: center;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 44rem;
  gap: 3rem;
  margin-top: 2.4rem;

  ${media('<=desktop')} {
    grid-template-columns: 1fr;
  }
`;

const VideoColumn = styled.div``;

const VideoPlayer = styled.video`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 1.2rem;
  background: #000;
`;

const Caption = styled.p`
  margin: 0.8rem 0 0;
  color: rgba(255,255,255,0.7);
`;

const InfoColumn = styled.div``;

const Description = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  opacity: 0.9;
`;

const DetailDescription = styled.div`
  margin-top: 1.2rem;
  font-size: 1.5rem;
  line-height: 1.65;
  opacity: 0.92;

  p {
    margin: 0 0 1rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1.6rem;

  ${media('<=tablet')} {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  padding: 1.2rem;
  border-radius: 0.8rem;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
`;

const ButtonRow = styled.div`
  margin-top: 1.6rem;
`;

const Separator = styled.hr`
  border: none;
  height: 1px;
  background: rgba(255,255,255,0.04);
  margin: 3rem 0;
`;

const RelatedTitle = styled.h3`
  margin: 0 0 1.4rem;
  font-size: 2.8rem;
  line-height: 1.15;
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;

  ${media('<=tablet')} {
    grid-template-columns: 1fr;
  }
`;

const RelatedCard = styled.a`
  display: flex;
  gap: 1.4rem;
  padding: 1.4rem;
  border-radius: 1.2rem;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.04);
  text-decoration: none;
  color: inherit;
  align-items: center;
  min-height: 12rem;

  h4 {
    margin: 0 0 0.8rem;
    font-size: 1.9rem;
    line-height: 1.2;
  }

  p {
    margin: 0;
    opacity: 0.85;
    font-size: 1.4rem;
    line-height: 1.65;
  }
`;

const CardThumb = styled.div`
  position: relative;
  width: 12rem;
  height: 7rem;
  overflow: hidden;
  border-radius: 0.9rem;
`;
