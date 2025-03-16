import styled from "styled-components";

export const Container = styled.div`
  margin-top: 90px;
  
  h1{
    font-size: 30px;
    color: ${({ theme }) => theme.COLORS.BLUE};
    text-align: center;
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
  margin: 0 auto;
`;

export const Tags = styled.div`

  table {
    width: 100%;
    max-width: 1200px;
    border-collapse: collapse;
    margin: 4px auto 24px;
    :first-child { 
    color: ${({ theme }) => theme.COLORS.BLUE};    
    font-weight: 700;
  }
  }

  th {
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY};
    border: 1px solid #BDBDBD; 
    padding: 12px;
    width: 200px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
  }
  tr{
    @media (max-width: 800px) {
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  }
`;

export const ProductListContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow: hidden;
  width: 100%;
  justify-content: center;
`;

export const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  svg{
    width: 100%;
    height: 80%;
  }

  &:first-of-type {
    left: 0;
  }

  &:last-of-type {
    right: 0;
  }
`;

