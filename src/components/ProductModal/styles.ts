import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  width: 768px;
  border-radius: 6px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.div`
  max-width: 327px;

  h2{
    font-size: 20px;
    font-weight: 400;
    color: #041E50;
  }
  .price{
    font-size: 20px;
    font-weight: 600;
    margin: 18px 0 32px;
    color: #3F3F40;
  }
  .description{
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
  a{
    margin-bottom: 32px;
    color: ${({ theme }) => theme.COLORS.BLUE_100};
    font-size: 11px;
    font-weight: 600;
    display: flex;
    align-items: center;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

export const BuyButton = styled.button`
  background-color: #ffcc00;
  color: #000;
  border: none;
  padding: 10px 20px;
  cursor: pointer;  
  font-weight: bold;
  border-radius: 5px;
  width: 188px;
  height: 36px;
  &:hover {
    background-color: #e6b800;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  .add{
    border: 1px solid #D9D9D9;
    height: 36px;
    width: 110px;
    gap: 10px;
    display: flex;
    align-items: center;
  }
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  font-size: 18px;
  font-weight: bold;
  color: #2c2c2c;
  background: #fff;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: #f1f1f1;
  }
`;

export const Quantity = styled.span`
  font-size: 18px;
  font-weight: bold;
  min-width: 30px;
  text-align: center;
`;
