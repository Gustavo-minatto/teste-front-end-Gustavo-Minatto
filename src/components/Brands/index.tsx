import { Title, Container, ItemBrand, ImageBrand } from "./styles";

const imagemSrc = "/public/econverse.png";

export const Brands = () => (
  <div>
    <Title>Navegue por marcas</Title>
    <Container>
      {Array.from({ length: 5 }).map((_, index) => (
        <ItemBrand key={index}>
          <ImageBrand src={imagemSrc} alt={`Marca ${index + 1}`} />
        </ItemBrand>
      ))}
    </Container>
  </div>
);

