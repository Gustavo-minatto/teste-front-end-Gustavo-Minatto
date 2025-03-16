import styled from "styled-components";

export const Container = styled.footer`
  background: #f4f4f4;
  color: #333;
  text-align: center;
  font-size: 14px;
  margin-top: 80px;
`;

export const NewsletterSection = styled.div`
  background: ${({ theme }) => theme.COLORS.PURPLE};
  color: white;
  padding: 20px;
  text-align: center;

  .newsletter-content h2 {
    margin-bottom: 5px;
  }

  .newsletter-form {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 15px;
  }

  .newsletter-form input {
    padding: 8px;
    border: none;
    border-radius: 4px;
    width: 200px;
  }

  .newsletter-form button {
    background: #ffcc00;
    color: black;
    padding: 8px 16px;
    border: none;
    cursor: pointer;
    font-weight: bold;
  }

  .newsletter-terms {
    margin-top: 10px;
    font-size: 12px;
  }
`;

export const FooterMain = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  flex-wrap: wrap;
  background-color: #F4F4F4;
  .brand-info {
    max-width: 200px;
    text-align: left;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const LinksColumn = styled.div`
  h4 {
    margin-bottom: 5px;
  }

  a {
    display: block;
    color: #333;
    text-decoration: none;
    margin-bottom: 5px;
    font-size: 14px;
  }
`;
