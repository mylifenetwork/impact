import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Hong Kong Sign Language AI Translation App"
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BasicSection imageUrl="/4.png" title="The Silent Struggle" overTitle="Overcoming Communication Challenges for the Deaf">
            <p>
            There are many communication barriers for the deaf and hard of hearing to obtain information in daily life, 
            ranging from watching TV at home to hearing public announcements and sitting in lectures. A large proportion of them
            have difficulty in reading and writing. They are majorly dependent on lip reading - which is also not always available.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/2.png" title="Bridging the Divide" overTitle="Addressing the Interpreter Shortage in HK for the Deaf" reversed>
            <p>
              There are almost a <strong>quarter million people with hearing disabilities in Hong Kong </strong>, with only roughly 50 registered HKSL interpreters
               for official events, often requiring bookings a month in advance. This limits access to them in cases of emergency, or non-essential usage
               that is essential to foster inclusive environments. Furthermore, there are only a small number of public events, TV programmes and promotional videos 
               with sign language translation.
            </p>
            {/*
            <ul>
              <li>Professional point 1</li>
              <li>Professional remark 2</li>
              <li>Professional feature 3</li>
            </ul> 
            */}
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          {/*
          <Cta />
          <Features />
          <FeaturesGallery />
          <Testimonials />
          <ScrollableBlogPosts posts={posts} />
          */}
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
