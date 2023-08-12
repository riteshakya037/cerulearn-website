import React from 'react';
import Link from 'next/link';
import NextImage from 'common/components/NextImage';
import Logo from 'common/components/UIElements/Logo';
import Container from 'common/components/UI/Container';
import FooterArea, {
  Left,
  Menu,
  CopyText,
  Social,
  SocialText,
} from './footer.style';
import data from 'common/data/App/Footer';

const Footer = () => {
  const { menu, logo, social } = data;
  const date = new Date();
  const year = date.getFullYear();

  return (
    <FooterArea>
      <Container className="Container">
        <Left>
          <Logo
            className="logo"
            href="/"
            logoSrc={logo}
            logoStyle={{
              height: 50,
            }}
            title="App Classic"
          />
          <CopyText>
            Copyright © {year}
            <Link href="/">
              <a>Cerulearn Inc.</a>
            </Link>
          </CopyText>
        </Left>
        <Menu>
          {menu.map(({ link, label }, index) => (
            <Link href={link} key={`footer-link-key-${index}`}>
              <a>{label}</a>
            </Link>
          ))}
        </Menu>
        <Social>
          <SocialText>Social:</SocialText>
          {social.map(({ link, icon }, index) => (
            <Link href={link} key={`footer-social-key-${index}`}>
              <a>
                <NextImage src={icon} alt="social image" />
              </a>
            </Link>
          ))}
        </Social>
      </Container>
    </FooterArea>
  );
};

export default Footer;
