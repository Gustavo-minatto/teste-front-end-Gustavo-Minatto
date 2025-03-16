import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 90px 0;
  padding: 20px;
  gap: 13px;
  color: white;
`;

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  background: url("/public/partners.png") no-repeat center/cover;  
  width: 635px;
  height: 350px;
`;

export const TitleArea = styled.div`
  padding: 20px;
  margin: 114px 0 0 44px;
`;

export const Titulo = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Texto = styled.p`
  margin-bottom: 32px;
`;

export const Botao = styled.button`
  background-color: ${({ theme }) => theme.COLORS.YELLOW}; 
  width: 144px;
  color: ${({ theme }) => theme.COLORS.PURPLE}; 
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  &:hover{
    background-color:rgb(145, 117, 9);
    transition: all 0.5s ease;
  }
`;
