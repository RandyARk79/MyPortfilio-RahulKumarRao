import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

// const ProjectsDemo =[{
//   title: 'Project1',
//   description: 'This is a really long description about this project '
// },{
//   title: 'Project2',
//   description: 'This is a really long description about this project '
// },{
//   title: 'Project3',
//   description: 'This is a really long description about this project '
// },{
//   title: 'Project4',
//   description: 'This is a really long description about this project '
// },]

const Projects = () => (
  <Section id="projects">
    <SectionDivider/>
    <SectionTitle main center>
      Projects
    </SectionTitle>
    <GridContainer>
      {projects.map(({id, title, description, tags, image, source, visit}) => (
        <BlogCard key={id}>
          <Img src= {image}/>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Slack</TitleContent>
            <TagList>{tags.map((tag, i) => (
              <Tag key = {i}>{tag}</Tag>
            ))}</TagList>
            <UtilityList>
              <ExternalLinks href={visit}>visit</ExternalLinks>
              <ExternalLinks href={source}>source</ExternalLinks>
            </UtilityList>
          </div>
        </BlogCard>

      ))}
    </GridContainer>
  </Section>
);

export default Projects;