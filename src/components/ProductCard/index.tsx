import React, { useState } from "react";
import { ProductCardProps } from "./productCard.types";
import { Container, Title, PriceOld, PriceCurrent, Installments, FreeShipping, BuyButton } from "./styles";
import { ProductModal } from "../ProductModal";

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const desconto = product.price * 1.1;
  const parcela = product.price / 2;

  return (
    <>
      <Container onClick={() => setIsModalOpen(true)}>
        <img src={product.photo} alt={product.productName} />
        <Title>
          {product.productName}
          {product.descriptionShort}
        </Title>

        <PriceOld>R$ {desconto.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</PriceOld>
        <PriceCurrent>R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</PriceCurrent>
        <Installments>ou 2x de R$ {parcela.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} sem juros</Installments>
        <FreeShipping>Frete grátis</FreeShipping>

        <BuyButton>COMPRAR</BuyButton>
      </Container>

      {isModalOpen && <ProductModal product={product} onClose={() => setIsModalOpen(false)} />}
    </>
  );
};
