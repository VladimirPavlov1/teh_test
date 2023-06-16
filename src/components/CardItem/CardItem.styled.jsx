import styled from "@emotion/styled";

export const Item = styled.li`
  position: relative;
  display: block;
  width: 380px;
  height: 460px;
  margin: 20px 10px;

  @media (min-width: 768px) {
    margin: 10px 4px;
  }
`;

export const SeparLine = styled.div`
  width: 380px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: #471ca9;
  border: 8.5px solid #d6bdf0;
  border-radius: 86px;
  &::before{
    content: '';
    position: absolute;
    top:-8px;
    left: -8px;
    width: 80px;
    height: 80px;
    border-radius: 80px;
    
    background-color: transparent;
    border:1px solid #aa85d3;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
  }
  
`;
