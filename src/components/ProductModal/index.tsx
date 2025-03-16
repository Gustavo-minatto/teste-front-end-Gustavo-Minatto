import React, { useState } from "react";
import { Container, Content, ModalContent, CloseButton, BuyButton, QuantityContainer, Button, Quantity } from "./styles";
import { ProductModalProps } from "./productModal.types";
import { MdChevronRight } from "react-icons/md";
import { PiPlus, PiMinus } from "react-icons/pi";

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <Container>
      <ModalContent>
        <img src={product.photo} alt={product.productName} width="200" />

        <Content>

          <CloseButton onClick={onClose}>X</CloseButton>
          <h2>{product.productName}</h2>
          <p className="price">R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
          <p className="description">Many desktop publishing packages and web page editors now many desktop publishing</p>
          <a href="#">Veja mais detalhes do produto <MdChevronRight size={20} /></a>

          <QuantityContainer>
            <div className="add">
              <Button onClick={decreaseQuantity}><PiMinus /></Button>
              <Quantity>{quantity.toString().padStart(2, "0")}</Quantity>
              <Button onClick={increaseQuantity}><PiPlus /></Button>
            </div>
            <BuyButton>COMPRAR</BuyButton>

          </QuantityContainer>

        </Content>
      </ModalContent>
    </Container>
  );
};
