import styled from "styled-components";

export const Container = styled.div`
  margin: 40px 140px 90px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CategoryArea = styled.div`
  display: flex;
  gap: 40px;  
  display: flex;
  flex-wrap: wrap;
  gap: 40px;  
  cursor: pointer;

  :first-child { 
    color: ${({ theme }) => theme.COLORS.BLUE};    
  }
  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 20px; 
  }
`;

export const CategoryIcon = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 14px;
`;

export const Icons = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 10px;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
  background-color: #F4F4F4;

`;