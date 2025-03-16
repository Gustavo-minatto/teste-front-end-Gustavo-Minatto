import { useState } from "react";
import { MdOutlineKeyboardArrowLeft, MdChevronRight } from "react-icons/md";
import { Container, Tags, CarouselWrapper, ArrowButton, ProductListContainer } from "./styles";
import { ProductCard } from "../ProductCard";
import { useProdutos } from "../../hook/useProduct";

export const RelatedProducts = ({ exibirTags = true }) => {
  const { produtos, loading } = useProdutos();
  const [currentIndex, setCurrentIndex] = useState(0);
  const produtosVisiveis = 4;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + produtosVisiveis >= produtos.length ? 0 : prevIndex + produtosVisiveis
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - produtosVisiveis < 0 ? produtos.length - produtosVisiveis : prevIndex - produtosVisiveis
    );
  };

  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  return (
    <Container>
      {exibirTags ? (
        <Tags>
          <h1>Produtos relacionados</h1>
          <table>
            <thead>
              <tr>
                <th>Celular</th>
                <th>Acessórios</th>
                <th>Tablets</th>
                <th>Notebooks</th>
                <th>TVs</th>
                <th>Ver todos</th>
              </tr>
            </thead>
          </table>
        </Tags>
      ) : (
        <div>
          <h1>Produtos relacionado</h1>
          <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>Ver todos</p>
        </div>
      )}

      <CarouselWrapper>
        <ArrowButton onClick={prevSlide}>
          <MdOutlineKeyboardArrowLeft />
        </ArrowButton>

        <ProductListContainer>
          {produtos.slice(currentIndex, currentIndex + produtosVisiveis).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </ProductListContainer>

        <ArrowButton onClick={nextSlide}>
          <MdChevronRight />
        </ArrowButton>
      </CarouselWrapper>
    </Container>
  );
};

