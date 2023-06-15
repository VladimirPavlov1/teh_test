import styled from '@emotion/styled';

export const Wrapper = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:20px ;

`;

export const Btn = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 200px;
  height: 56px;
  border: 1px solid black;
  padding: 3px;
border-radius: 10px;
  background-color:${({isLoading})=>isLoading ? '#471CA9':'#EBD8FF'};
  color:${({isLoading})=>isLoading ? '#EBD8FF':'#471CA9'};
  
`;