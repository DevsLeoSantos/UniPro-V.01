import React, { useEffect } from 'react'
import ProdutosUnipro from "../../data";

import "./MaisProdutos.css"
 


const MaisProdutos = () => {

  const produtosUnipro = [
    {
      nome: 'PU40',
      linha: 'LINHA CONSTRUÇÃO',
      imgbgproduto: "/imagens/BgProdutos/bg_pu40.jpg",
      descricao: "Selante para uso profissional, adere em diferentes superfícies - vidro, concreto, madeira, metal, fibra, cerâmica, borracha etc. Cura em contato com a umidade ambiente formando uma borracha resistente e flexível. Pode ser pintado, lavado e não forma fungos.",
      disponivel: 'Tubos 400g / Sachê 820g',
      aplicacao: 'Indicado para as mais diversas aplicações de vedações, preenchimentos e reparos da construção civil.',
      imagemDoProduto: "/imagens/Produtos/PU40 - UNIPRO.png",
      imagemProductAlt: "UNIPRO PU40",
      rotaDoProduto: "UNIPRO PU40"
    },
    {
      nome: 'MS Híbrido',
      linha: 'LINHA CONSTRUÇÃO',
      imgbgproduto: "/imagens/BgProdutos/bg_ms.jpg",
      descricao: "Selante e adesivo a base de polímeros híbridos desenvolvido para aplicações de fixações em sistemas de envidraçamento de ambientes.",
      disponivel: 'Tubos 400g / Sachê 820g',
      aplicacao: 'Colagens de perfis de alumínio em vidros,vedações perimetrais entre perfis de alumínio,vidro e alvenaria, juntas estruturais.',
      imagemDoProduto: "/imagens/Produtos/MS_hibrido - UNIPRO.png",
      imagemProductAlt: "UNIPRO MS hibrido",
      rotaDoProduto: "UNIPRO PU40"

    },
    {
      nome: 'Silicone Neutro',
      linha: 'LINHA CONSTRUÇÃO',
      imgbgproduto: "/imagens/BgProdutos/bg_pu40.jpg", //mudar imagem
      descricao: "Selante de silicone de cura neutra para uso profissional. Cura em contato com a umidade atmosférica,transformando-se em uma borracha flexível e impermeável.",
      disponivel: 'Tubos 400g / Sachê 820g',
      aplicacao: 'Vedações e preenchimento de juntas de acabamentos. Adere em diversas superfícies, vidro, concreto, policarbonato, fibra de vidro e alguns tipos de plásticos.',
      imagemDoProduto: "/imagens/Produtos/Silicone_Neutro - UNIPRO.png",
      imagemProductAlt: "UNIPRO Silicone Neutro",
      rotaDoProduto: "UNIPRO PU40"
    },
    {
      nome: 'Silicone Acético',
      linha: 'LINHA CONSTRUÇÃO',
      imgbgproduto: "/imagens/BgProdutos/bg_acetico.jpg",
      descricao: "Selante de silicone de cura acética com fungicida para uso profissional. Cura em contato com a umidade atmosférica, transformando-se em uma borracha flexível e impermeável. Não forma fungos.",
      disponivel: 'Tubos 400g / Sachê 820g',
      aplicacao: 'Indicado para as mais diversas aplicações de vedações, preenchimentos e reparos da construção civil.',
      imagemDoProduto: "/imagens/Produtos/Silicone_Acetico - UNIPRO.png",
      imagemProductAlt: "UNIPRO Silicone Acetico",
      rotaDoProduto: "UNIPRO PU40"
    },
    {
      nome: 'Fixa Espelho',
      linha: 'LINHA CONSTRUÇÃO',
      imgbgproduto: "/imagens/BgProdutos/bg_espelho.jpg",
      descricao: "Adesivo a base de polímeros híbridos, de consistência pastosa, com propriedades de não escorrimento. Isento de solventes, não provoca manchas na superfície dos espelhos.",
      disponivel: 'Tubos 400g / Sachê 820g',
      aplicacao: 'Colagem e fixação de espelhos e vidros em diferentes superfícies da construção civil, não produzindo manchas ou qualquer outro tipo de alteração.',
      imagemDoProduto: "/imagens/Produtos/Fixa_Espelho - UNIPRO.png",
      imagemProductAlt: "UNIPRO Fixa Espelho",
      rotaDoProduto: "UNIPRO PU40"
    },
    {
      nome: 'Fixa Tudo',
      linha: 'LINHA CONSTRUÇÃO',
      imgbgproduto: "/imagens/BgProdutos/bg_espelho.jpg", //mudar imagem
      descricao: "Adesivo extra forte monocomponente, formulado a base de polímero híbrido e isento de solventes e hidrocarbonetos, que seca por absorção de umidade e temperatura ambiente.",
      disponivel: 'Tubos 400g / Sachê 820g',
      aplicacao: 'Superfícies lisas e porosas, alvenaria, madeira, mármore e granitos, espelhos, vidro, alumínio, aço, espelhos, azulejos entre outras superfícies da construção civil.',
      imagemDoProduto: "/imagens/Produtos/Fixa_Tudo - UNIPRO.png",
      imagemProductAlt: "UNIPRO Tudo Espelho",
      rotaDoProduto: "UNIPRO PU40"
    },
    {
      nome: 'Fixa Cuba',
      linha: 'LINHA CONSTRUÇÃO',
      imgbgproduto: "/imagens/BgProdutos/bg_cuba.jpg",
      descricao: "Adesivo de alta pega inicial de uso profissional à base de polímeros híbridos. Não provoca manchas nas superfícies.",
      disponivel: 'Tubos 400g / Sachê 820g',
      aplicacao: 'Fixação de cubas metálicas e de cerâmicas em pias de mármores e de granitos.',
      imagemDoProduto: "/imagens/Produtos/Fixa_Cuba - UNIPRO.png",
      imagemProductAlt: "UNIPRO Cuba Espelho",
      rotaDoProduto: "UNIPRO PU40"
    },
  ]

  return (

    <div style={{ backgroundImage: `url(/imagens/BgBanner/pattern.svg)` }} className='Conteiner_Main_MaisProdutos'>

      <a  href=""><img className='Esquerda Seta' src="/imagens/BgBanner/Seta.svg" alt="" /></a>
      <div className='Conteiner_MaisProdutos'>
        {produtosUnipro.map((produto) => {
          const { nome, imagemDoProduto, rotaDoProduto } = produto;
          return (
            <a key={nome} href={rotaDoProduto}><img src={imagemDoProduto} alt={nome} /></a>
          )
        })}
        
      </div>
      <button><img className='Direita Seta' src="/imagens/BgBanner/Seta.svg" alt="" /></button>
    </div>
  )
}

export default MaisProdutos