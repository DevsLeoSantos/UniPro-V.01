//Estilos
import "./CaixaTexto.css"

interface propsCaixaTexto {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    icon: any;
    aoAlterado: any;
    Digita: any;
}

const CaixaTexto = (props: propsCaixaTexto) => {

    const aoDigitar = (evento:any) => {
        props.aoAlterado(evento.target.value);
    }
    return (
        <div className="Conteiner_CaixaTexto">
            <div className='CaixaTexto'>
                <label htmlFor={props.id}>{props.label}</label>
                <div className='CaixaTexto__input'>
                    <input value = {props.Digita} onChange={aoDigitar} placeholder={props.placeholder} type={props.type} id={props.id} name={props.id} />
                    <img src={props.icon} alt="Icone" />
                </div>
            </div>

        </div>
    )
}
export default CaixaTexto;