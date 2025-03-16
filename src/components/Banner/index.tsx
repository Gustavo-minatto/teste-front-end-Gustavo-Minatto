import { BannerContainer, BannerContent, Title, Highlight, Button } from './styles'

export const Banner = () => {
  return (
    <BannerContainer>
      <BannerContent>
        <Title>Venha conhecer nossas  <br />Promoções</Title>
        <p>
          <Highlight>50% Off</Highlight> nos produtos
        </p>
        <Button>Ver produto</Button>
      </BannerContent>
    </BannerContainer>
  );
};

