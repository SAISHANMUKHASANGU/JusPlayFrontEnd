import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Styled Components
const FooterWrapper = styled.footer`
  background-color: #0f172a;
  color: #ffffff;
  padding: 40px 20px;
  text-align: center;
  position: relative;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
`;

const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterBranding = styled.div`
  flex: 2;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const FooterLogo = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
`;

const FooterTitle = styled.h2`
  font-size: 1.8rem;
  margin: 10px 0;
  font-weight: bold;
  color: #ffcc00;
`;

const FooterDesc = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 10px;
  color: #d1d5db;
`;

const FooterLinks = styled.div`
  flex: 1;
  min-width: 250px;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: right;
  }
`;

const FooterLinksTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #ffcc00;
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LinkItem = styled.li`
  margin: 5px 0;
`;

const FooterLink = styled.a`
  color: #d1d5db;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ffcc00;
  }
`;

const FooterSocials = styled.div`
  flex: 1;
  min-width: 250px;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: right;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SocialIconLink = styled.a`
  color: #d1d5db;
  font-size: 1.5rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #ffcc00;
    transform: scale(1.2);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #334155;
  padding-top: 20px;
  margin-top: 20px;
  font-size: 0.9rem;
  color: #9ca3af;
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        {/* Branding Section */}
        <FooterBranding>
          <FooterLogo src="./images/logo.jpg" alt="JusPlay Logo" />
          <FooterTitle>JusPlay</FooterTitle>
          <FooterDesc>
            Booking sports facilities and services. Play more, stress less!
          </FooterDesc>
        </FooterBranding>

        {/* Links Section */}
        <FooterLinks>
          <FooterLinksTitle>Quick Links</FooterLinksTitle>
          <LinksList>
            <LinkItem>
              <FooterLink href="/">Home</FooterLink>
            </LinkItem>
            <LinkItem>
              <FooterLink href="/Products">Products</FooterLink>
            </LinkItem>
            <LinkItem>
              <FooterLink href="/features">Features</FooterLink>
            </LinkItem>
            
          </LinksList>
        </FooterLinks>

        {/* Social Media Section */}
        <FooterSocials>
          <FooterLinksTitle>Follow Us</FooterLinksTitle>
          <SocialIcons>
            <SocialIconLink
              href="https://www.facebook.com/ramaraju.pinnamaraju.16"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </SocialIconLink>
            {/* <SocialIconLink
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </SocialIconLink> */}
          </SocialIcons>
        </FooterSocials>
      </FooterContainer>

      <FooterBottom>&copy; 2024 JusPlay. All Rights Reserved.</FooterBottom>
    </FooterWrapper>
  );
}

export default Footer;
