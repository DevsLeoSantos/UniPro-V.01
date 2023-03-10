//Biblioteca
import { useEffect, useState } from "react";
import { api } from "../../api/api";
import Produtos from "../../Components/Produtos";

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
    <div >
      {ProdutosUnipro.map((produto) => {
        const { id, linha, imgbgproduto, aplicacao, imagemDoProduto, imagemProductAlt, nome, descricao, fichaTécnica, fispq } = produto;
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
        )
      })}
    </div>
  )
}

export default Products