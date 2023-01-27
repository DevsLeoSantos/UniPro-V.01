//Biblioteca
import { useEffect, useState } from "react";
import { api } from "../../api/api";
import Produtos from "../../Components/Produtos";

//Dados
import ProdutosUnipro from "../../data";

<<<<<<< HEAD
//Estilo
import "./Produtos.css";

=======
type Produtos = {
  nome: string;
  imagemUrl: string;
  imagemNome: string;
  descricao: string;
  aplicacao: string;
  quantidade: number;
  categoria: {
    nome: string;
    descricao: string;
  };
};
>>>>>>> 9433060f7444008d93120347f6069586e2026327

const Products = () => {
  const [produtos, setProdutos] = useState<Produtos[]>([]);

  async function getProdutos() {
    var produtos = await api.get("/produto", {
      headers: {
        "x-api-key": "adoleta",
      },
    });

    return produtos.data as Produtos[];
  }

  useEffect(() => {
    getProdutos().then((data) => {
      setProdutos(data);
      console.log("produtos =>", produtos);
    });
  }, []);

  return (
<<<<<<< HEAD
    <div >
      {ProdutosUnipro.map((produto) => {
        const { linha, imgbgproduto, aplicacao, imagemDoProduto, imagemProductAlt, nome, descricao, rota, fichaTécnica, fispq } = produto;
        return (
          <div>
            <Produtos
              produtoLinha={linha}
              produtoBgImagem={imgbgproduto}
              produtoAplicacao={aplicacao}
              produtoImagem={imagemDoProduto}
              productAlt={imagemProductAlt}
              produtoNome={nome}
              produtoDescricao={descricao}
              router={rota}
              Fispq={fispq}
              FichaTec={fichaTécnica}
            />
          </div>
        )
=======
    <div>
      {/* {ProdutosUnipro.map((produto) => {
        const {
          linha,
          imgbgproduto,
          aplicacao,
          imagemDoProduto,
          imagemProductAlt,
          nome,
          descricao,
          rota,
          fichaTécnica,
          fispq,
        } = produto;
        return (
          <Produtos
            produtoLinha={linha}
            produtoBgImagem={imgbgproduto}
            produtoAplicacao={aplicacao}
            produtoImagem={imagemDoProduto}
            productAlt={imagemProductAlt}
            produtoNome={nome}
            produtoDescricao={descricao}
            router={rota}
            Fispq={fispq}
            FichaTec={fichaTécnica}
          />
        );
      })} */}

      {produtos.map((produto) => {
        return (
          <Produtos
            produtoLinha={produto.categoria.nome}
            produtoAplicacao={produto.aplicacao}
            produtoImagem={produto.imagemUrl}
            produtoNome={produto.nome}
            produtoDescricao={produto.descricao}
          />
        );
>>>>>>> 9433060f7444008d93120347f6069586e2026327
      })}
    </div>
  );
};

export default Products;
