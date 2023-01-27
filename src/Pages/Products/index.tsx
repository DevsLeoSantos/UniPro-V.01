//Biblioteca
import Produtos from '../../Components/Produtos'

//Dados
import ProdutosUnipro from "../../data";

//Estilo
import "./Produtos.css";


const Products = () => {

  return (
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
      })}
    </div>
  )
}

export default Products