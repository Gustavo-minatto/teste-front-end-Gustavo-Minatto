import styled from "styled-components";
import banner from "../../assets/banner.png";

export const BannerContainer = styled.section`
  background: url(${banner}) no-repeat center/cover;
  height: 400px;
  color: ${({ theme }) => theme.COLORS.WHITE};  
  padding: 40px;
  @media (max-width: 800px) { 
   height: auto;
  }
`;

export const BannerContent = styled.div`
p{
    font-size: 32px;
    span{
      font-weight: 700;
    }
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
`;

export const Highlight = styled.span`
    color: ${({ theme }) => theme.COLORS.YELLOW};  
`;

export const Button = styled.button`
  margin-top: 40px;
  background-color: ${({ theme }) => theme.COLORS.YELLOW};  
  padding: 10px 52px;  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color:rgb(150, 123, 17);
  }
`;
