import React from 'react';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
import { Header } from '../../components/Header';
import { Menu, MenuPropsLinks } from '../../components/Menu';
import { ToggleTheme } from '../../components/ToggleTheme';
import { SettingsStrapi } from '../../sharedTypes/settings';
import * as Styled from './styles';

export type BaseTemplateProps = {
  settings: SettingsStrapi;
  children: React.ReactNode;
  postMenuLinks?: MenuPropsLinks[];
};

export const BaseTemplate = ({
  settings,
  children,
  postMenuLinks,
}: BaseTemplateProps) => {
  return (
    <Styled.Wrapper>
      <ToggleTheme />

      <Menu
        links={settings.menuLink}
        blogName={settings.blogName}
        logo={settings.logo.url}
        postMenuLinks={postMenuLinks}
      />

      <Styled.HeaderContainer>
        <Header
          blogName={settings.blogName}
          blogDescription={settings.blogDescription}
          logo={settings.logo.url}
        />
      </Styled.HeaderContainer>

      <Styled.ContentContainer>{children}</Styled.ContentContainer>

      <Styled.FooterContainer>
        <Footer footerHtml={settings.footer} />
      </Styled.FooterContainer>

      <GoTop />
    </Styled.Wrapper>
  );
};
