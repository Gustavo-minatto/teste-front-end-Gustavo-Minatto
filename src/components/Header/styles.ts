import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 120px;
  padding: 8px;
  @media (max-width: 800px) { 
    gap: 10px;
  }

  font-size: 12px;
  font-weight: 600;

  div {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    svg{
      margin-right: 10px;
    }

    span{
      color: ${({ theme }) => theme.COLORS.BLUE};
      font-weight: 500;
    }
  }
`;

export const MainHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 24px;
  border-top: 1px solid #F0F0F0;
  border-bottom: 1px solid #F0F0F0;
  @media (max-width: 800px) { 
    flex-direction: column;
  }
`;

export const Logo = styled.div`
margin-right: 100px;
@media (max-width: 800px) { 
    margin: 0;
  }
`;

export const SearchBar = styled.div`
  flex: 1;
  position: relative;


  input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 10px;
    border: none;
    background: #F6F5F2;
    font-size: 14px;
    
  }

  button {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 32px;
  margin-left: 50px;
  button {
    background: none;
    color: ${({ theme }) => theme.COLORS.GRAY_200};  
  }
  @media (max-width: 800px) { 
    margin: 0;
  }
`;

export const Navigation = styled.nav`
  padding: 12px 0;
  display: flex;
  
  ul {
    margin: 0 auto;
    list-style: none;
    display: flex;
    gap: 32px;

    li {
      a {
        color: ${({ theme }) => theme.COLORS.GRAY_200};  
        text-decoration: none;
        font-size: 12px;
        font-weight: 600;
        display: flex;
        align-items: center;
        svg{
          margin-right: 12px;
        }
        &:hover {
          color: ${({ theme }) => theme.COLORS.BLUE};  
        }
      }
    }
  }
  li:nth-child(6) a { 
    color: ${({ theme }) => theme.COLORS.BLUE};  
  }
  @media (max-width: 800px) {
    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
  }
`;