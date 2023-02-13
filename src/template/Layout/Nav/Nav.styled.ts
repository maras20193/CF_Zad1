import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  display: flex;
  flex-direction: row;
  gap: 20px;

  font-size: 22px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  padding: 10px 4px;
  overflow: hidden;

  ::after {
    content: "";
    display: block;
    width: 100%;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    bottom: 0;
    left: -100%;
    transition: 0.3s;
  }

  :hover {
    ::after {
      left: 0;
    }
  }

  &.active {
    ::after {
      left: 0;
    }
  }
`;
