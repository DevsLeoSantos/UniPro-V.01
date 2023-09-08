//Estilo
import { useEffect, useState } from "react";
import RetornarLink from "../../utils/RetornaLinkWhatsapp";
import "./BntWhats.css"
import { languages } from "../../enums/languages";
import i18next from "i18next";

const BntWhats = ({language }: { language : string }) => {

    
   
    return (
        <div className='Conteiner__BntWhats'>
            <a className="WtsFlutuante" href={RetornarLink(language)} target="_blank">
            <i className="WtsFlutuanteicon fa fa-whatsapp"></i>
            </a>
            
        </div>
    )
}

export default BntWhats;