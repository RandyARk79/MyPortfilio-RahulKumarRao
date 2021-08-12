import React from 'react';
import { DiCloud9, DiFirebase, DiReact, DiUikit, DiWordpress, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      <List>

        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              React.js, Next.js and Fultter
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              Django, DRF, Express and Node.js
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <DiCloud9 size="3rem" />
          <ListContainer>
            <ListTitle>Cloud Platform</ListTitle>
            <ListParagraph>
              Experience with <br />
              AWS, Azure, GCP and DigitalOcean
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <DiWordpress size="3rem" />
          <ListContainer>
            <ListTitle>Hosting Sites</ListTitle>
            <ListParagraph>
              Experience with <br />
              Heroku, Hoster, Wix and WordPress
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <DiUikit size="3rem" />
          <ListContainer>
            <ListTitle>UX/UI</ListTitle>
            <ListParagraph>
              Experience with <br />
              Tools like Figma, Apptool and Abode XD
            </ListParagraph>
          </ListContainer>
        </ListItem>


      </List>
    </SectionText>
  </Section>
);

export default Technologies;
