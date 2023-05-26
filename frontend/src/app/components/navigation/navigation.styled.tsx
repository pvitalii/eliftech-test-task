import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BREAKPOINTS } from '../../../common/consts/breakpoints.conts';

export const Header = styled.header`
  height: 100px;
  background-color: ${(props) => props.theme.COLORS.black};
  padding-inline: ${(props) => props.theme.SPACES.xl};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Nav = styled.nav`
  display: flex;
  column-gap: ${(props) => props.theme.SPACES.m};
  @media (max-width: ${BREAKPOINTS.sm}) {
    column-gap: ${(props) => props.theme.SPACES.xs};
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.COLORS.white};
  &:after {
    content: '|';
    margin-left: ${(props) => props.theme.SPACES.m};
    font-size: ${(props) => props.theme.FONTS.SIZES.l};

    @media (max-width: ${BREAKPOINTS.sm}) {
      margin-left: ${(props) => props.theme.SPACES.xs};
    }
  }
  &:last-child:after {
    opacity: 0;
  }
`;
