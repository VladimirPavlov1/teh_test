import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';



export const HeaderWrapper = styled.header`


 width: 100%;
 display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 8px 10px;
  border-bottom: 1px solid black;

  >nav{
    display: flex;
  }
`;

export const Link = styled(NavLink)`
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    color: black;
    font-family: inherit;
    font-weight: 500;
    &.active{
        color: white;
        background-color: orangered;
    }
`;



