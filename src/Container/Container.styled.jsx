import styled from "styled-components";

export const Wrapper = styled.div`
  width: 380px;
  margin: 0 auto;
  padding: 0;

  @media (min-width: 768px) {
    width: 768px;
    padding: 2px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
    padding: 20px;
  }
`;
