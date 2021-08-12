import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          
          <LinkItem href="mailto: xxxxxxx1@gmail.com">xxxxxxx1@gmail.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email2</LinkTitle>
          <LinkItem href="mailto: xxxxxxx1@gmail.com">xxxxxxx1@gmail.com</LinkItem>
        </LinkColumn> <br/>
      </LinkList>

      

      <SocialContainer>
      <CompanyContainer>
        <Slogan>Let's Build Awesome Project Together</Slogan>
      </CompanyContainer>
          <SocialIcons href="https://github.com/" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://Linkedin.com/" target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://instagram.com/" target="_blank">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>

        

    </FooterWrapper>
  );
};

export default Footer;
