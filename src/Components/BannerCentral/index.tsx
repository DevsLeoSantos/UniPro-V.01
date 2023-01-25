//Bibliotecas
import React from 'react';

//Estilos
import "./BannerCentral.css"

interface propsBannerCentral{
    text: string;
    img: any;
}

const BannerCentral = (props:propsBannerCentral) => {
    return (
        <div style={{backgroundImage: `url(${props.img})`}} className="bannerCentral">
            <img alt="virgula" src="/imagens/BgBanner/Virgula.svg" className="bannerCentral_Virgula"></img>
            <h1 className="bannerCentral_Text">{props.text}</h1>
        </div>
    )
}
export default BannerCentral;