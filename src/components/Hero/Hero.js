import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row noPadding>
    <LeftSection>
      <SectionTitle>
        Welcome To<br/> 
        My Profile Page
      </SectionTitle>
      <SectionText>
        I am a UX/Ui Designer with React and Django Frameworks to get Awsome apps
      </SectionText>
      <Button onClick={()=> window.location= "https://Linkedin.com/"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;