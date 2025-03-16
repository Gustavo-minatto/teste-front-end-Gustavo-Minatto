import { useEffect, useState } from "react";
import { Produto } from './product.types'

export const useProdutos = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("../../public/produtos.json")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.products && Array.isArray(data.products)) {
          setProdutos(data.products);
        } else {
          setProdutos([]);
        }
      })
      .catch((error) => console.error("Erro ao buscar produtos:", error))
      .finally(() => setLoading(false));
  }, []);

  return { produtos, loading };
};
