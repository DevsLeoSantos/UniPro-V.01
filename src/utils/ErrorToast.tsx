//Bibliotecas
import { toast } from "react-toastify";

//Funções
export function ErrorToastName() {
  toast.error('Erro: Necessário preencher o campo Nome')
}
export function ErrorToastEmail() {
  toast.error('Erro: Necessário preencher o campo Email')
}
export function ErrorToastEmailFormat() {
  toast.error('Erro: Necessário preencher no formato: nome@email.com')
}
export function ErrorToastTel() {
  toast.error('Erro: Necessário preencher o campo Telefone')
}
export function ErrorToastMsg() {
  toast.error('Erro: Necessário preencher o campo Mensagem')
}
export function ErrorToastCity() {
  toast.error('Erro: Necessário preencher o campo Cidade')
}
export function ErrorToastUf() {
  toast.error('Erro: Necessário preencher o campo Estado')
}


