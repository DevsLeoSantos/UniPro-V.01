import React, { useState } from 'react'
import "./Contats.css"

import 'bootstrap/dist/css/bootstrap.min.css';

import ImgContato from "/imagens/BgBanner/ContatoBanner.svg"


import CaixaTexto from "../../Components/CaixaTexto";


const Contats = () => {

  const MensagemFull = [
    {
      nome: String,
      email: String,
      telefone: String,
      mensagen: String
    },
  ]
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cidade, setCidade] = useState('')
  const [mensagen, setMensagen] = useState('')
  let MsgList = [""]


  const aoEscreverMsg = (e: any) => {
    setMensagen(e.target.value)
  }
  const aoSubmeter = (e: any) => {
    e.preventDefault();

    MsgList=[nome,email,telefone,mensagen,cidade]

    setNome("")
    setEmail("")
    setTelefone("")
    setCidade("")
    setMensagen("")
    
  }



  return (
    <div className='Conteiner__Contato'>
      <div className='Conteiner__imgContato'>
        <img src={ImgContato} alt="Imagem de Contato" />
      </div>
      <form onSubmit={aoSubmeter} className='Form__Contato'>
        <h1>Contato</h1>
        <p>Preencha o formulário e em breve entraremos em contato para realizarmos um orçamento!</p>
        <div className='Conteiner__CaixaTexto'>
          <CaixaTexto
            id="Nome"
            label="Nome"
            type="text"
            placeholder="Nome Sobrenome"
            icon="./imagens/Logos/User.svg"
            Digita={nome}
            aoAlterado={(Digita: React.SetStateAction<string>) => setNome(Digita)}
          />
          <CaixaTexto
            id="Email"
            label="Email"
            type="Email"
            placeholder="Example@Unipro.com.br"
            icon="./imagens/Logos/Msg.svg"
            Digita={email}
            aoAlterado={(Digita: React.SetStateAction<string>) => setEmail(Digita)}
          />
           <CaixaTexto
            id="Cidade"
            label="Cidade"
            type="text"
            placeholder="Marilia - sp"
            icon="./imagens/Logos/House.svg"
            Digita={cidade}
            aoAlterado={(Digita: React.SetStateAction<string>) => setCidade(Digita)}
          />
          <CaixaTexto
            id="Telefone"
            label="Telefone"
            type="tel"
            placeholder="(00) 00000-0000"
            icon="./imagens/Logos/PhoneCall.svg"
            Digita={telefone}
            aoAlterado={(Digita: React.SetStateAction<string>) => setTelefone(Digita)}
            
          />
          <div className="Conteiner_CaixaTexto">
            <div className='CaixaTexto'>
              <label htmlFor="msg">Mensagem</label>
              <div className='CaixaMsg__input'>
                <textarea required onChange={aoEscreverMsg}
                  placeholder="Digite Sua Mensagem" value={mensagen} id="msg" name="msg" />
              </div>
            </div>
            <button className='Bnt__Msg'>Enviar mensagem</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contats