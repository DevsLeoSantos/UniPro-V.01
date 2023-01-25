import React from 'react'
import { render } from 'react-dom'
import Produtos from '../../Components/Produtos'
import "./Products.css"

//Dados
import ProdutosUnipro from "../../data";

const Products = () => {

  return (
    <div>
      {ProdutosUnipro.map((produto) => {
        const { linha, imgbgproduto, aplicacao, imagemDoProduto, imagemProductAlt, nome, descricao, rota} = produto;
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
          />
        )
      })}
    </div>
  )
}

export default Products