import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Category } from "../../components/Category";
import { Partners } from "../../components/Partners";
import { Brands } from "../../components/Brands";
import { RelatedProducts } from "../../components/RelatedProducts";
import { Footer } from "../../components/Footer";

const Home: React.FC = () => {

  return (
    <Container>
      <Header />
      <Banner />
      <Category />
      <RelatedProducts exibirTags={true} />
      <Partners />
      <Brands />
      <RelatedProducts exibirTags={false} />
      <Footer />
    </Container>
  );
};

export default Home;
