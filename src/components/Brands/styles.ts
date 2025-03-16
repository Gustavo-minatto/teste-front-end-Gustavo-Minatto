import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 42px;
  margin-top: 32px;
`;

export const Title = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.BLUE_100};
  font-weight: 700;
  font-size: 30px;
`;

export const ItemBrand = styled.div`
  width: 211px;
  height: 211px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 7px 20px 0px rgba(0, 0, 0, 0.13);
`;

export const ImageBrand = styled.img`
  max-width: 117px;
  max-height: 34px;
`;