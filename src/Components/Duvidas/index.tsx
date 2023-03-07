import React from 'react'
import './Duvidas.css'

interface PropsCardProducts {
    nome: string;
    text: string;
}

function aoAbrir() {
    
}

const Duvidas = (props:PropsCardProducts) => {
    return (
        <div className="accordion active">

            <div className="accordion-heading ">
                <h3>{props.nome}</h3>
                <i>⬇</i>
            </div>
            <p className="accordion-content">
                {props.text}
            </p>
        </div>
    )
}

export default Duvidas;