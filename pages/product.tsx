import Head from 'next/head';
import NextImage from 'next/image';
import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import Container from 'components/Container';
import { DEMO_OPTIONS } from 'views/HomePage/DemoShowcase';

export default function ProductPage() {
  return (
    <>
      <Head>
        <title>Product — Demos</title>
      </Head>
      <Page>
        <Container>
          <TopRow>
            <NextLink href="/" passHref>
              <BackAnchor>
                <Button transparent>
                  Back <span>&larr;</span>
                </Button>
              </BackAnchor>
            </NextLink>
            <Title>Product Demos</Title>
          </TopRow>
          <Intro>We currently provide services to major financial institutions in Hong Kong, such as HSBC and Standard Chartered. Our model can be applied across a range of areas, such as web pages, videos and documents.</Intro>

          <Grid>
            {DEMO_OPTIONS.map((d) => (
              <NextLink key={d.slug} href={`/demo/${d.slug}`} passHref>
                <Card as="a">
                  <Thumb>
                    <NextImage src={d.poster} alt={d.title} layout="fill" objectFit="cover" />
                  </Thumb>
                  <CardTitle>{d.title}</CardTitle>
                  <CardDesc>{d.description}</CardDesc>
                </Card>
              </NextLink>
            ))}
          </Grid>
        </Container>
      </Page>
    </>
  );
}

const Page = styled.div`
  padding: 6rem 0;
`;

const TopRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
  margin-bottom: 2rem;
`;

const BackAnchor = styled.a`
  display: inline-block;
`;

const Title = styled.h1`
  font-size: 4.2rem;
  margin: 0;
`;

const Intro = styled.p`
  font-size: 1.6rem;
  margin: 0 0 2.4rem;
  opacity: 0.9;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  display: block;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.98));
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 1.4rem;
  padding: 1.2rem;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 1rem 2.8rem rgba(15, 23, 42, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 1.6rem 3.8rem rgba(15, 23, 42, 0.16);
  }
`;

const Thumb = styled.div`
  position: relative;
  width: 100%;
  height: 14rem;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: inset 0 -8rem 8rem rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h3`
  margin: 1rem 0 0.45rem;
`;

const CardDesc = styled.p`
  margin: 0;
  opacity: 0.82;
  line-height: 1.6;
`;
