import styled from "styled-components";

export const Container = styled.footer`
  color: #222222B5;
  text-align: center;
  font-size: 14px;
  margin-top: 80px;
`;

export const NewsletterSection = styled.div`
  background: ${({ theme }) => theme.COLORS.PURPLE};
  height: 162px;
  display: flex;
  align-items: center;
  color: white;
  padding: 20px;
  text-align: center;
  justify-content: space-around ;

  .newsletter-content h2 {
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 32px;
    @media (max-width: 1200px) {
      font-size: 2rem;
    }
  }

  .newsletter-content p{
    font-weight: 300;
  }

  .newsletter-form {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 15px;
  }

  .newsletter-form input {
    padding: 8px;
    border: none;
    border-radius: 8px;
    max-height: 42px;
  }

  .newsletter-form button {
    background: #F7CA11;
    color: #161615;
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    max-height: 42px;
  }

  .newsletter-terms {
    display: flex;
    align-items: center;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
    padding: 20px;
    text-align: center;
    gap: 16px;

    .newsletter-form {
      flex-direction: column;
      align-items: center;
    }

    .newsletter-form input, .newsletter-form button {
      width: 100%;
      max-width: 300px;
    }
  }
`;

export const FooterMain = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  padding: 20px;
  flex-wrap: wrap;
  background-color: #F4F4F4;
  height: 282px;

  .brand-info {
    max-width: 200px;
    text-align: left;
    p{
      font-weight: 300;
      font-size: 14px;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
    text-align: center;
    gap: 20px;
    padding: 40px 20px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 26px;
  margin-top: 27px;

  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  @media (max-width: 800px) {
    justify-content: center;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  text-align: left;

  @media (max-width: 800px) {
    flex-direction: column;
    text-align: center;
    width: 100%;
    gap: 20px;
  }
`;

export const LinksColumn = styled.div`
  h4 {
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 16px;
  }

  a {
    display: block;
    color: #222222B5;
    text-decoration: none;
    margin-bottom: 5px;
    font-weight: 400;
    font-size: 14px;
  }
`;

export const FooterBottom = styled.div`
  height: 46px;

  @media (max-width: 800px) {
    padding: 10px;
    font-size: 12px;
  }
`;
