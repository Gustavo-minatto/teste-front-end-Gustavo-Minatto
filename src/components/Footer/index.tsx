import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Container, NewsletterSection, FooterMain, SocialIcons, LinksContainer, LinksColumn, FooterBottom } from "./styles";

export const Footer = () => {
  return (
    <Container>
      <NewsletterSection>
        <div className="newsletter-content">
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
        </div>
        <div className="newsletter-form">
          <div>
            <input type="text" placeholder="Digite seu nome" />
            <div className="newsletter-terms">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">Aceito os termos e condições</label>
            </div>
          </div>
          <input type="email" placeholder="Digite seu e-mail" />
          <button>INSCREVER</button>
        </div>

      </NewsletterSection>

      <FooterMain>
        <div className="brand-info">
          <img src="/econverse.png" alt="" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <SocialIcons>
            <FaInstagram />
            <FaFacebookF />
            <FaLinkedinIn />
          </SocialIcons>
        </div>

        <LinksContainer>
          <LinksColumn>
            <h4>Institucional</h4>
            <a href="#">Sobre Nós</a>
            <a href="#">Movimento</a>
            <a href="#">Trabalhe conosco</a>
          </LinksColumn>

          <LinksColumn>
            <h4>Ajuda</h4>
            <a href="#">Suporte</a>
            <a href="#">Fale Conosco</a>
            <a href="#">Perguntas Frequentes</a>
          </LinksColumn>

          <LinksColumn>
            <h4>Termos</h4>
            <a href="#">Termos e Condições</a>
            <a href="#">Política de Privacidade</a>
            <a href="#">Troca e Devolução</a>
          </LinksColumn>
        </LinksContainer>
      </FooterMain>

      <FooterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</FooterBottom>
    </Container>
  );
};

