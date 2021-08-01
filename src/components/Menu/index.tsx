import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { useState } from 'react';
import { LogoLink } from '../LogoLink';
import { MenuLink } from '../MenuLink';
import * as Styled from './styles';

export type MenuPropsLinks = {
  id: string;
  link: string;
  newTab?: boolean;
  text: string;
};

export type MenuProps = {
  links: MenuPropsLinks[];
  blogName: string;
  logo: string;
  postMenuLinks?: MenuPropsLinks[];
};

export const Menu = ({
  links = [],
  blogName,
  logo,
  postMenuLinks = [],
}: MenuProps) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleToggleMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <Styled.OpenClose
        menuVisible={menuVisible}
        href="#"
        aria-label="Open or close menu"
        title="Open or close menu"
        onClick={handleToggleMenu}
      >
        {menuVisible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </Styled.OpenClose>
      <Styled.Wrapper menuVisible={menuVisible} aria-hidden={!menuVisible}>
        <Styled.Nav>
          <Styled.Logo>
            <LogoLink link="/" text={blogName} srcImg={logo} />
          </Styled.Logo>

          {links.map((link) => (
            <MenuLink key={link.id} link={link.link} newTab={link.newTab}>
              {link.text}
            </MenuLink>
          ))}

          {postMenuLinks.length > 0 && (
            <>
              <hr />
              {postMenuLinks.map((link) => (
                <MenuLink key={link.id} link={link.link} newTab={link.newTab}>
                  {link.text}
                </MenuLink>
              ))}
            </>
          )}
        </Styled.Nav>
      </Styled.Wrapper>
    </>
  );
};
