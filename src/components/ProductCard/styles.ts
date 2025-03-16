import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 3px 19px 0px rgba(0, 0, 0, 0.22);
  font-weight: 300;
  font-size: 15px;
  color: #3F3F40;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 304px;

`;
export const Title = styled.div`
  font-weight: 300;
  font-size: 15px;
`;

export const PriceOld = styled.span`
  text-decoration: line-through;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const PriceCurrent = styled.strong`
  font-size: 20px;
  font-weight: 700;
  display: block;
  margin: 2px 0;
`;

export const Installments = styled.p`
  font-size: 12px;
`;

export const FreeShipping = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.BLUE_100};
  margin-top: 7px;
`;

export const BuyButton = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BLUE_100};
  color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 4px;
  margin-top: 12px auto 16px;
  
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background: #2c3e9f;
  }
`;
