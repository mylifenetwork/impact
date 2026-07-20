import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import DemoShowcase from 'views/HomePage/DemoShowcase';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Background from 'views/HomePage/background';
import Partners from 'views/HomePage/Partners';
import PotentialUseCases from 'views/HomePage/PotentialUseCases';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';
import Honors from '../views/HomePage/Honors';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    if (router.query.scrollTo === 'product-demo') {
      document.getElementById('product-demo')?.scrollIntoView({ block: 'start' });
      router.replace('/', undefined, { shallow: true, scroll: false });
    }
  }, [router]);

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

          <Background />
          <PotentialUseCases />
          {/* <BasicSection imageUrl="/4.png" title="Accessibility is Still Broken" overTitle="Overcoming Communication Challenges for the Deaf">
            <p>
             Over <strong>430 million</strong> people worldwide need hearing rehabilitation; without intervention, this number <strong>will reach 700 million by 2050</strong>. Yet hearing aid coverage in low-income countries is <strong>below 3%</strong>, a huge gap that underscores the urgency of global action.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/2.png" title="Widespread Challenge of Accessibility Provision" overTitle="Addressing the Interpreter Shortage for the Deaf" reversed>
            <p>
              Organizations face serious difficulties in delivering accessible services — from websites and videos to customer support, healthcare information, government communications, and educational materials. These gaps not only hinder equal access for hundreds of millions but also underscore the urgent need for comprehensive accessibility improvements.
            </p>
            
            <ul>
              <li>Professional point 1</li>
              <li>Professional remark 2</li>
              <li>Professional feature 3</li>
            </ul> 
           
          </BasicSection> */}
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <DemoShowcase />
          <Honors />
          {/* <Cta /> */}
          {/*
          <Cta />
          <Features />
          <FeaturesGallery />
          <Testimonials />
          <ScrollableBlogPosts posts={posts} />
          */}
          <Partners />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 6rem;
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
