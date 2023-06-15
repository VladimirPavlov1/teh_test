import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  @media (min-width: 768px){
    flex-wrap: wrap;
    flex-direction: row;
    margin: -8px;
  }
`;
