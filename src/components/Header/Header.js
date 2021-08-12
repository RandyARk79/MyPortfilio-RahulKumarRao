import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, span } from './HeaderStyles';

const Header = () =>  (
<Container>
  <Div1>
    <Link href='/' target="_blank">
      <a style={{ display: 'flex', alignItems: 'center', color:'white', marginBottom: '10px'}}>
          <DiCssdeck size='4rem'/> <span>Rahul Kumar R</span>  
      </a>
    </Link>
  </Div1>
  <Div2>
    <li>
      <Link href='#projects'>
        <NavLink>Projects</NavLink>
      </Link>
    </li>

    <li>
      <Link href='#tech'>
        <NavLink>Technologies</NavLink>
      </Link>
    </li>

    <li>
      <Link href='#aboutme'>
        <NavLink>About</NavLink>
      </Link>
    </li>
  </Div2>
  <Div3>
    <SocialIcons href='https://github.com/' target = '_blank'>
    <AiFillGithub size='3rem'/>
    </SocialIcons>
    <SocialIcons href='https://Linkedin.com/' target = '_blank'>
    <AiFillLinkedin size='3rem'/>
    </SocialIcons>
    <SocialIcons href='https://instagram.com/' target = '_blank'>
    <AiFillInstagram size='3rem'/>
    </SocialIcons>
    <SocialIcons href='https://youtube.com/' target = '_blank'>
    <AiFillYoutube size='3rem'/>
    </SocialIcons>

    
  </Div3>

</Container>
);

export default Header;
