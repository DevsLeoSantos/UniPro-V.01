//Bibliotecas
import React, { useEffect, useState } from 'react';

//Estilos
import "./CardProducts.css"
import i18next from 'i18next';
import RetornarLink from '../../utils/RetornaLinkWhatsapp';
import { useTranslation } from 'react-i18next';

interface PropsCardProducts {
    img: any;
    imgBg: any;
    text: string;
    line: string;
    translateKey:string
}



const CardProducts = (props: PropsCardProducts) => {
    const [language , setLanguage] = useState(i18next.language);

    const { t } = useTranslation("common");
 

   useEffect(() => {
      setLanguage(i18next.language)
   } ,[i18next.language])
   
    return (
        <div className="ConteinerMain__CardProducts">
            <div className=" swing Conteiner__CardProducts">
                <div className="CardProducts" style={{backgroundImage: `url(${props.imgBg})`}}>
                    <img className='CardProducts_Produto'src={props.img} alt="Unipro Produtos"/>
                </div>
                <h1>{t(`produtos.${props.translateKey}.nome`)}</h1>
                <p>{t(`produtos.${props.translateKey}.linha`)}</p>
                <a href={RetornarLink(language)} target="_blank">{t("produtos.orcamento.botao")}</a>
            </div>
        </div>
    )
}
export default CardProducts;