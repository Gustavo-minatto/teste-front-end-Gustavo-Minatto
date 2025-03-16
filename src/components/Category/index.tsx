import { Container, CategoryArea, CategoryIcon, Icons } from './styles'

export const Category = () => {
  return (
    <Container>
      <CategoryArea>
        <CategoryIcon>
          <Icons>
            <img src="/public/tecnologia.png" alt="foto de um computador, um celular e um tablet" />
          </Icons>
          Tecnologia
        </CategoryIcon>
        <CategoryIcon>
          <Icons>
            <img src="/public/supermercados.png" alt="foto de um supermercado" />
          </Icons>
          Supermercado
        </CategoryIcon>
        <CategoryIcon>
          <Icons>
            <img src="/public/whiskey.png" alt="Foto de uma garrafa de bebida e um copo" />
          </Icons>
          Bebidas
        </CategoryIcon>
        <CategoryIcon>
          <Icons>
            <img src="/public/ferramentas.png" alt="Foto de um martelo e uma chave de fenda" />
          </Icons>
          Ferramentas
        </CategoryIcon>
        <CategoryIcon>
          <Icons>
            <img src="/public/saude.png" alt="Uma mão segurando um coração" />
          </Icons>
          Saúde
        </CategoryIcon>
        <CategoryIcon>
          <Icons>
            <img src="/public/corrida.png" alt="Foto de uma pessoa correndo na esteira" />
          </Icons>
          Esportes e Fitness
        </CategoryIcon>
        <CategoryIcon>
          <Icons>
            <img src="/public/moda.png" alt="Foto de um vestido, diamante e sapato" />
          </Icons>
          Moda
        </CategoryIcon>
      </CategoryArea>
    </Container>
  );
};

  