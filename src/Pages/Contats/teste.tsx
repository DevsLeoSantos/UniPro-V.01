//imagens
import ImgContato from "/imagens/BgBanner/ContatoBanner.svg";
import iconNome from "/imagens/Logos/User.svg";
import iconEmail from "/imagens/Logos/Mail.svg";
import iconTelefone from "/imagens/Logos/PhoneCall.svg";

//Bibliotecas
import * as yup from "yup"
import { api } from "../../api/api";
import { toast } from "react-toastify"
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";

//Estilos
import "./Contats.css";
import "./CaixaTexto.css"
import { ErrorToastCity, ErrorToastEmail, ErrorToastEmailFormat, ErrorToastMsg, ErrorToastName, ErrorToastTel, ErrorToastUf } from "../../utils/ErrorToast";

//Tipos
type IBGEUFResponse = {
  id: number;
  sigla: string;
  nome: string;
};
type IBGECITYResponse = {
  id: number;
  nome: string;
};

const Contats = () => {

  const [ufs, setUfs] = useState<IBGEUFResponse[]>([]);
  const [cities, setCities] = useState<IBGECITYResponse[]>([]);
  const [selectedUf, setSelectedUf] = useState("0");
  const [selectedCity, setSelectedCity] = useState("0");
  const [ContatoCliente, setContatoCliente] = useState({
    Nome: "",
    Email: "",
    // Estado: "",
    Cidade: "",
    NumeroTelefone: "",
    Mensagem: "",
  });
  
  const valueInput = (e: { target: { name: any; value: any; }; }) => setContatoCliente({ ...ContatoCliente, [e.target.name]: e.target.value });
  const Clientejson = JSON.stringify(ContatoCliente);
  const ClientejsonLower = Clientejson.toLowerCase()

  const handlePhone = (event:any) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value:any) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{3})$/,"$1-$2")
    return value
  }


  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;
    setSelectedUf(uf);
    //setContatoCliente({ ...ContatoCliente, ["Estado"]: uf })
  };

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value;
    setSelectedCity(city);
    setContatoCliente({ ...ContatoCliente, ["Cidade"]: city })

  };

  useEffect(() => {
    if (selectedUf === "0") {
      return;
    }
    axios
      .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
      .then((response) => {
        setCities(response.data);
      });
  }, [selectedUf]);

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
      .then((response) => {
        setUfs(response.data);
      });
  }, []);

  async function validate() {
    let schema = yup.object().shape({
      Nome: yup
        .string()
        .required(ErrorToastName),
      Email: yup
        .string()
        .email(ErrorToastEmailFormat)
        .required(ErrorToastEmail),
      NumeroTelefone: yup
        .string()
        .required(ErrorToastTel),
      Mensagem: yup
        .string()
        .required(ErrorToastMsg),
      Cidade: yup
        .string()
        .required(ErrorToastCity),
      // Estado: yup
      //   .string()
      //   .required(ErrorToastUf),

    });
    try {
      await schema.validate(ContatoCliente);
      return true;
    } catch (err: any) {
      return false;
    }
  }

  const aoSubmeter = async (e: any) => {
    e.preventDefault();
    if (!(await validate())) return;
    const saveDataForm = true;
    if (saveDataForm) {
      await api
        .post("/contatos", JSON.parse(ClientejsonLower))
        .then(() => {
          toast.success("Ola! " + ContatoCliente.Nome + " Sua mensagem foi enviada com sucesso!")
        });

      setContatoCliente({
        Nome: "",
        Email: "",
        // Estado: "",
        Cidade: "",
        NumeroTelefone: "",
        Mensagem: "",
      });
    }
    else {
      toast.error("Erro: Sua mensagem não foi enviada!")
    }
    setContatoCliente({
      Nome: "",
      Email: "",
      // Estado: "",
      Cidade: "",
      NumeroTelefone: "",
      Mensagem: "",
    });
  };


  return (
    <div className="Conteiner__Contato">
      <div className="Conteiner__imgContato">
        <img src={ImgContato} alt="Imagem de Contato" />
      </div>
      <form onSubmit={aoSubmeter} className="Form__Contato">
        <h1>Contato</h1>
        <p>
          Preencha o formulário e em breve entraremos em contato para
          realizarmos um orçamento!
        </p>

        <div className="Conteiner__CaixaTexto">
          <div className='CaixaTexto'>
            <label htmlFor='Nome'>Nome</label>
            <div className='CaixaTexto__input'>
              <input maxLength={50} name="Nome" value={ContatoCliente.Nome} onChange={valueInput} placeholder="Nome Sobrenome" type='text' id='Nome' />
              <img src={iconNome} alt="Icone" />
            </div>
          </div>
          <div className='CaixaTexto'>
            <label htmlFor='Email'>Email</label>
            <div className='CaixaTexto__input'>
              <input name="Email" value={ContatoCliente.Email} onChange={valueInput} placeholder="Example@Unipro.com.br" type='email' id='Email' />
              <img src={iconEmail} alt="Icone" />
            </div>
          </div>

          <div className='CaixaTexto'>
            <div className='CaixaCidade'>
              <div className='CaixaUf'>
                <label htmlFor='Estado'>Estado</label>
                <select
                  name="Estado"
                  id="Estado"
                  onChange={handleSelectUf}
                >
                  <option value="0">Selecione a UF</option>
                  {ufs.map((uf) => (
                    <option key={uf.id} value={uf.sigla}>{uf.nome}</option>
                  ))}
                </select>
              </div>
              <div className='CaixaCity'>
                <label htmlFor='Cidade'>Cidade</label>
                <select
                  name="City"
                  id="City"
                  value={selectedCity}
                  onChange={handleSelectCity}
                >
                  <option value="0">Selecione uma cidade</option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.nome}>
                      {city.nome}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>


          <div className='CaixaTexto'>
            <label htmlFor='Telefone'>Telefone</label>
            <div className='CaixaTexto__input'>
              <input
                onKeyUp={handlePhone}
                name="NumeroTelefone"
                data-mask="(00) 0000-0000" data-mask-selectonfocus="true"
                value={ContatoCliente.NumeroTelefone}
                onChange={valueInput}
                maxLength={15}
                placeholder="(00) 00000-0000"
                type='text' id='Telefone' />
              <img src={iconTelefone} alt="Icone" />
            </div>
          </div>


          <div className="Conteiner_CaixaTexto">
            <div className="CaixaTexto">
              <label htmlFor="Mensagem">Mensagem</label>
              <div className="CaixaMsg__input">
                <textarea
                  onChange={valueInput}
                  placeholder="Digite Sua Mensagem"
                  maxLength={300}
                  value={ContatoCliente.Mensagem}
                  id="Mensagem"
                  name="Mensagem"
                />
              </div>
            </div>
            <button className="Bnt__Msg">Enviar mensagem</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Contats;
