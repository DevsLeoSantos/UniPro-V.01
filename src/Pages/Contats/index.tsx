//imagens
import ImgContato from "/imagens/BgBanner/ContatoBanner.svg";
import iconNome from "/imagens/Logos/User.svg";
import iconEmail from "/imagens/Logos/Mail.svg";
import iconTelefone from "/imagens/Logos/PhoneCall.svg";

//Bibliotecas
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { api } from "../../api/api";
import { toast } from "react-toastify"
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { phoneNumber, emailClient } from "../../utils/validations";

//Estilos
import "./Contats.css";
import "./CaixaTexto.css"


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



  const handlePhone = (event: any) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }

  const phoneMask = (value: any) => {
    if (!value) return ""
    value = value.replace(/\D/g, "")
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value
  }






  async function validate() {
    let schema = yup.object().shape({
      Nome: yup
        .string()
        .required('Erro: Necessário preencher o campo Nome')
        .max(80, "Seu Nome precisa ter menos de 80 caracteres"),

      Email: yup
        .string()
        .email('Erro: Necessário preencher um Email Valido!')
        .required('Erro: Necessário preencher o campo Email'),

      Telefone: yup
        .string()
        .required('Erro: Necessário preencher o campo Telefone')
        .max(15, "A Mensagem precisa ter menos de 350 caracteres"),

      Mensagem: yup
        .string()
        .required('Erro: Necessário preencher o campo Mensagem')
        .max(350, "A Mensagem precisa ter menos de 350 caracteres"),

    });
    try {
      await schema.validate(ContatoCliente);
      return true;
    } catch (err: any) {
      setStatus({
        type: 'error',
        mensagem: err.errors
      });
      return false;
    }
  }
  const [ufs, setUfs] = useState<IBGEUFResponse[]>([]);
  const [cities, setCities] = useState<IBGECITYResponse[]>([]);
  const [selectedUf, setSelectedUf] = useState("0");
  const [selectedCity, setSelectedCity] = useState("0");
  const [ContatoCliente, setContatoCliente] = useState({
    Nome: "",
    Email: "",
    Estado: "",
    Cidade: "",
    Telefone: "",
    Mensagem: "",
  });
  const [status, setStatus] = useState({
    type: '',
    mensagem: "",
  });


  useEffect(() => {
    if (selectedUf === "0") {
      return;
    }
    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      )
      .then((response) => {
        setCities(response.data);
      });
  });

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
      .then((response) => {
        setUfs(response.data);
      });
  }, [selectedUf]);


  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;
    setSelectedUf(uf);
    setContatoCliente({ ...ContatoCliente, ["Estado"]: uf })
  }

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value;
    setSelectedCity(city);
    setContatoCliente({ ...ContatoCliente, ["Cidade"]: city })
  }

  const valueInput = (e: { target: { name: any; value: any; }; }) => setContatoCliente({ ...ContatoCliente, [e.target.name]: e.target.value });
  const Clientejson = JSON.stringify(ContatoCliente);

  const aoSubmeter = async (e: any) => {
    e.preventDefault();
    if (!(await validate())) return;

    const saveDataForm = true;

    if (saveDataForm) {
      console.log(Clientejson);
      toast.success("Sua mensagem foi enviada com sucesso!")
      // await api
      //   .post("/contatos", {
      //     Clientejson
      //   })
      //   .then(() => {
      //     toast.success("Ola! " + ContatoCliente.Nome + " Em breve retornaremos contato")
      //   });
      setContatoCliente({
        Nome: "",
        Email: "",
        Estado: "",
        Cidade: "",
        Telefone: "",
        Mensagem: "",
      });
    }
    else {
      toast.error("Erro: Sua mensagem não foi enviada!")
    }


    setContatoCliente({
      Nome: "",
      Email: "",
      Estado: "",
      Cidade: "",
      Telefone: "",
      Mensagem: "",
    });
    setSelectedUf("0");
    setSelectedCity("0");

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

        {status.type === 'error' ? <p style={{ color: "#ff0000" }}>{status.mensagem}</p> : ""}

        <div className="Conteiner__CaixaTexto">

          <div className='CaixaTexto'>
            <label htmlFor='Nome'>Nome</label>
            <div className='CaixaTexto__input'>
              <input name="Nome" value={ContatoCliente.Nome} onChange={valueInput} placeholder="Nome Sobrenome" type='text' id='Nome' />
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
                  required
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
                  required
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
              <input onKeyUp={handlePhone}
                name="Telefone"
                value={ContatoCliente.Telefone}
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
