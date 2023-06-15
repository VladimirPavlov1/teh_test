import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  width: 380px;
  height: 226px;
  padding-top: 62px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const Text = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
  &:first-of-type {
    margin-bottom: 16px;
  }
  &:last-of-type {
    margin-bottom: 26px;
  }
`;

export const Btn = styled.button`
  width: 196px;
  height: 50px;
  padding: 14px 28px;
  background:${({active})=>active? '#5CD3A8':'#ebd8ff'}  ;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  color: #373737;
  text-transform: uppercase;
`;
