import NextLink from 'next/link';
import styled from 'styled-components';
import Container from 'components/Container';
import Logo from 'components/Logo';
import { media } from 'utils/media';

type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
  {
    title: 'Useful Links',
    items: [
      { title: 'Home', href: '/' },
      { title: 'Solutions', href: '/product' },
      { title: 'Contact', href: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <FooterTop>
          <BrandSection>
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
            <BrandDescription>
              Making the Digital World Accessible to Everyone.
            </BrandDescription>
          </BrandSection>

          <LinksSection>
            {footerItems.map((singleItem) => (
              <FooterList key={singleItem.title} {...singleItem} />
            ))}
          </LinksSection>
        </FooterTop>

        <BottomBar>
          <Copyright>&copy; {new Date().getFullYear()} Impact AI. All rights reserved.</Copyright>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

function FooterList({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <ListHeader>{title}</ListHeader>
      {items.map((singleItem) => (
        <ListItem key={singleItem.href} {...singleItem} />
      ))}
    </ListWrapper>
  );
}

function ListItem({ title, href }: SingleFooterListItem) {
  return (
    <ListItemWrapper>
      <NextLink href={href} passHref>
        <a>{title}</a>
      </NextLink>
    </ListItemWrapper>
  );
}

const FooterWrapper = styled.div`
  padding-top: 6rem;
  padding-bottom: 4rem;
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4rem;

  ${media('<=tablet')} {
    flex-direction: column;
    gap: 2rem;
  }
`;

const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 40rem;
`;

const LogoWrapper = styled.div`
  width: 12rem;
  height: auto;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const BrandDescription = styled.p`
  margin: 0;
  font-size: 1.6rem;
  line-height: 1.8;
  color: rgba(var(--textSecondary), 0.8);
`;

const LinksSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 2rem;
  width: min(100%, 60rem);
`;

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  margin-right: 0;
  min-width: 0;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

const ListItemWrapper = styled.p`
  font-size: 1.6rem;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
    transition: color 0.2s ease;

    &:hover {
      color: rgb(var(--textSecondary));
    }
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const BottomBar = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media('<=tablet')} {
    flex-direction: column;
    gap: 1rem;
  }
`;
