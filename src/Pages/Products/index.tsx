//Biblioteca
import { useEffect, useState } from "react";
import { api } from "../../api/api";
import Produtos from "../../Components/Produtos";
import Produtosv2 from "../../Components/Produtosv2";
import Produtosv3 from "../../Components/Produtosv3";
import Produtosv4 from "../../Components/Produtosv4";
import Produtosv5 from "../../Components/Produtosv5";
import Produtosv6 from "../../Components/Produtosv6";
import Produtosv7 from "../../Components/Produtosv7";
import Produtosv8 from "../../Components/Produtosv8";

//Dados
import ProdutosUnipro from "../../data/ProdutosDados";

//Estilo
import "./Produtos.css";

export type IProdutos = {
  nome: string;
  imagemUrl: string;
  fichaTecnicaUrl?: string;
  imagemNome: string;
  descricao: string;
  aplicacao: string;
  quantidade: number;
  categoria: {
    nome: string;
    descricao: string;
  };
};

const Products = () => {
  const [produtos, setProdutos] = useState<IProdutos[]>([]);

  async function getProdutos() {
    var produtos = await api.get("/produto");
    return produtos.data as IProdutos[];
  }

  useEffect(() => {
    getProdutos().then((data) => {
      setProdutos(data);
    });
  }, []);

  return (
    <div>
      {ProdutosUnipro.map((produto) => {
        const {
          id,
          linha,
          imgbgproduto,
          aplicacao,
          imagemDoProduto,
          imagemProductAlt,
          nome,
          descricao,
          fichaTécnica,
          fispq,
        } = produto;
        return (
          <div>
            <Produtos
              key={id}
              produtoLinha={linha}
              produtoBgImagem={imgbgproduto}
              produtoAplicacao={aplicacao}
              produtoImagem={imagemDoProduto}
              productAlt={imagemProductAlt}
              produtoNome={nome}
              produtoDescricao={descricao}
              Fispq={fispq}
              FichaTec={fichaTécnica}
            />
          </div>
        );
      })}
      <Produtosv7 />
      <Produtosv8 />
      <Produtosv5 />
      <Produtosv2 />
      <Produtosv4 />
      <Produtosv3 />
      <Produtosv6 />
    </div>
  );
};

export default Products;
