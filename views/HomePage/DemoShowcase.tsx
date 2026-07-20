import NextLink from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import Container from 'components/Container';
import { media } from 'utils/media';

export type DemoSlug =
  | 'pdf-translation'
  | 'video-translation'
  | 'website-translation';

type MediaType = 'video' | 'iframe';

type DemoOption = {
  slug: DemoSlug;
  title: string;
  description: string;
  detailDescription: string;
  detailHref: string;
  videoSrc: string;
  poster: string;
  mediaType: MediaType;
};

export const DEMO_OPTIONS: DemoOption[] = [
  {
    slug: 'website-translation',
    title: 'Website Translation',
    description:
      'See how a live website can be translated into an accessible experience while keeping the UI structure and user flow intact.',
    detailDescription: `We developed this demonstration programme for Standard Chartered Bank to make cybersecurity content more accessible to Deaf and hard-of-hearing visitors. Each section of text includes a small play button. When users click it, the corresponding sign language video appears in the video window at the bottom-right corner of the screen.

Users can adjust the video size and playback speed based on their needs. The feature runs directly in the browser, so there is no need to download an app or complete any extra setup.

With just one click, users can access online banking security tips in sign language. This simple and practical design helps remove information barriers and supports a more inclusive digital banking experience.`,
    detailHref: '/demo/website-translation',
    videoSrc: 'https://drive.google.com/file/d/1mUaEYme0oSk82W5AAjRveEdz-kuf1FrJ/preview',
    poster: '/website.png',
    mediaType: 'iframe',
  },
  {
    slug: 'video-translation',
    title: 'Video Translation',
    description:
      'Turn spoken video content into translated sign-language output with an interactive playback experience tailored for accessibility.',
    detailDescription: `We have integrated AI-powered sign language interpretation into our HSBC promotional video. When the video plays, a virtual sign language interpreter appears automatically in the bottom-right corner. The interpreter’s movements are precisely synchronised with the on-screen footage, narration, and sound effects.

This allows Deaf and hard-of-hearing viewers to watch the original video while receiving the full message through sign language. They can enjoy a complete and accessible viewing experience without any extra setup. The feature is ready to use as soon as the video starts.

This thoughtful design uses technology to break down communication barriers. It reflects the brand’s commitment to inclusive services and ensures that every brand story can reach a wider audience.`,
    detailHref: '/demo/video-translation',
    videoSrc: 'https://drive.google.com/file/d/1sFs2iEN4qCn62BTLZ7kB9U5bA_e2RPit/preview',
    poster: '/video.jpg',
    mediaType: 'iframe',
  },
  {
    slug: 'pdf-translation',
    title: 'PDF Translation',
    description:
      'Upload a PDF and preview how the system extracts, translates, and preserves the original document structure for accessible reading.',
    detailDescription: `Our PDF Sign Language Translation System is an intelligent solution designed to improve accessible information access. It can automatically extract and analyze text from PDF files. It then converts the content into Hong Kong Sign Language expressions.

The system brings text recognition, PDF preview, translation management, and digital-human sign language video playback into one interface. Users can review each sentence, check the translation, and generate the corresponding video with ease.

Powered by AI text understanding, sign language grammar conversion, and digital-human video generation, the system helps organizations turn financial service information, public announcements, educational materials, and corporate documents into sign language content. This makes information easier for Deaf and hard-of-hearing users to understand. It also reduces communication barriers, improves accessibility, and supports a more inclusive digital service experience.
`,
    detailHref: '/demo/pdf-translation',
    videoSrc: 'https://drive.google.com/file/d/1RIoKFDmr-iwg0X25BVd1Mnex2brKF5G8/preview',
    poster: '/pdf.jpg',
    mediaType: 'iframe',
  },
];

export default function DemoShowcase() {
  const [activeDemo, setActiveDemo] = useState<DemoOption>(
    DEMO_OPTIONS[0],
  );

  // 控制 Google Drive 视频是否已经开始加载
  const [driveVideoStarted, setDriveVideoStarted] = useState(false);

  const handleDemoChange = (demo: DemoOption) => {
    setActiveDemo(demo);

    // 每次切换 Demo 时，重新显示封面
    setDriveVideoStarted(false);
  };

  const getDriveAutoplayUrl = (url: string) => {
    return `${url}${url.includes('?') ? '&' : '?'}autoplay=1`;
  };

  return (
    <DemoSection id="product-demo">
      <SectionTitle>Solutions Demo</SectionTitle>

      <DemoCard>
        <TabsBar role="tablist" aria-label="Demo selector">
          {DEMO_OPTIONS.map((demo) => {
            const isActive = demo.slug === activeDemo.slug;

            return (
              <TabButton
                key={demo.slug}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="active-demo-video"
                $active={isActive}
                onClick={() => handleDemoChange(demo)}
              >
                {demo.title}
              </TabButton>
            );
          })}
        </TabsBar>

        <VideoPanel id="active-demo-video">
          <VideoFrame>
            {activeDemo.mediaType === 'iframe' ? (
              driveVideoStarted ? (
                <DriveVideo
                  key={activeDemo.slug}
                  src={getDriveAutoplayUrl(activeDemo.videoSrc)}
                  title={`${activeDemo.title} demo video`}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <DrivePosterButton
                  type="button"
                  aria-label={`Play ${activeDemo.title} demo video`}
                  onClick={() => setDriveVideoStarted(true)}
                >
                  <DrivePoster
                    src={activeDemo.poster}
                    alt={`${activeDemo.title} video cover`}
                  />

                  <PosterOverlay />

                  <PlayButton aria-hidden="true">
                    <PlayTriangle />
                  </PlayButton>
                </DrivePosterButton>
              )
            ) : (
              <Video
                key={activeDemo.slug}
                controls
                playsInline
                preload="metadata"
                poster={activeDemo.poster}
              >
                <source
                  src={activeDemo.videoSrc}
                  type="video/mp4"
                />

                Your browser does not support video playback.
              </Video>
            )}
          </VideoFrame>
        </VideoPanel>

        <SummaryRow>
          <SummaryText>{activeDemo.description}</SummaryText>

          <NextLink href={activeDemo.detailHref} passHref>
            <Button transparent>
              View demo details <span>&rarr;</span>
            </Button>
          </NextLink>
        </SummaryRow>
      </DemoCard>
    </DemoSection>
  );
}

const DemoSection = styled(Container)`
  padding-top: 2rem;
`;

const SectionTitle = styled.h2`
  margin: 0 0 1rem;
  font-size: 4.2rem;
  line-height: 1.1;
  text-align: center;

  ${media('<=tablet')} {
    font-size: 3.2rem;
  }
`;

const SectionIntro = styled.p`
  max-width: 72rem;
  margin: 1.4rem auto 0;
  text-align: center;
  font-size: 1.8rem;
  line-height: 1.6;
  opacity: 0.85;

  ${media('<=tablet')} {
    font-size: 1.5rem;
  }
`;

const DemoCard = styled.section`
  margin-top: 1.8rem;
  padding: 1.6rem;
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);

  ${media('<=tablet')} {
    padding: 1.2rem;
  }
`;

const TabsBar = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.8rem;
  padding: 0.9rem;
  border-radius: 1.6rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.06));
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 1.2rem 2.4rem rgba(0, 0, 0, 0.14);

  ${media('<=tablet')} {
    grid-template-columns: 1fr;
  }
`;

const TabButton = styled.button<{ $active: boolean }>`
  width: 100%;
  border: 1px solid ${(p) => (p.$active ? 'rgb(var(--primary))' : 'rgba(255, 255, 255, 0.12)')};
  background: ${(p) => (p.$active ? 'rgb(var(--primary))' : 'rgba(255, 255, 255, 0.03)')};
  color: ${(p) => (p.$active ? 'rgb(var(--textSecondary))' : 'rgb(var(--text))')};
  border-radius: 999px;
  padding: 0.8rem 1.2rem;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

const VideoPanel = styled.div`
  margin-top: 1.4rem;
`;

const VideoFrame = styled.div`
  position: relative;
  width: min(100%, 90rem);
  aspect-ratio: 16 / 9;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 1.4rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.08));
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const DriveVideo = styled.iframe`
  width: 100%;
  height: 100%;
  display: block;
  border: 0;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const DrivePosterButton = styled.button`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  overflow: hidden;
  border: 0;
  background: transparent;
  cursor: pointer;

  &:focus-visible {
    outline: 3px solid rgb(var(--primary));
    outline-offset: -3px;
  }

  &:hover img {
    transform: scale(1.02);
  }

  &:hover > span:last-child {
    transform: translate(-50%, -50%) scale(1.08);
  }
`;

const DrivePoster = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
`;

const PosterOverlay = styled.span`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.18);
  transition: background 0.25s ease;

  ${DrivePosterButton}:hover & {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const PlayButton = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7.2rem;
  height: 7.2rem;
  border: 1px solid rgba(255, 255, 255, 0.75);
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.58);
  backdrop-filter: blur(8px);
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.3);
  transform: translate(-50%, -50%);
  transition:
    transform 0.25s ease,
    background 0.25s ease;

  ${media('<=tablet')} {
    width: 5.8rem;
    height: 5.8rem;
  }
`;

const PlayTriangle = styled.span`
  width: 0;
  height: 0;
  margin-left: 0.5rem;
  border-top: 1.2rem solid transparent;
  border-bottom: 1.2rem solid transparent;
  border-left: 1.9rem solid white;

  ${media('<=tablet')} {
    border-top-width: 1rem;
    border-bottom-width: 1rem;
    border-left-width: 1.6rem;
  }
`;

const SummaryRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.4rem;
  margin-top: 1.4rem;

  ${media('<=tablet')} {
    flex-direction: column;
    align-items: stretch;
  }
`;

const SummaryText = styled.p`
  flex: 1;
  margin: 0;
  font-size: 1.5rem;
  line-height: 1.55;
  text-align: center;
  opacity: 0.9;

  ${media('<=tablet')} {
    font-size: 1.4rem;
  }
`;