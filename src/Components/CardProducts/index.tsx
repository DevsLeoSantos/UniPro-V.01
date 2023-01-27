//Bibliotecas
import React from 'react';

//Estilos
import "./CardProducts.css"

interface PropsCardProducts {
    img: any;
    imgBg: any;
    text: string;
    line: string;
    router: string;
    alt: string;
}


const CardProducts = (props: PropsCardProducts) => {

    const rota = `${props.router}`
    // const rota = `/produtos/#${props.router}`

    return (
        <div className="ConteinerMain__CardProducts">
            <div className="Conteiner__CardProducts">
                <div className="CardProducts" style={{backgroundImage: `url(${props.imgBg})`}}>
                    <img className='CardProducts_Produto'src={props.img} alt={props.alt} />
                </div>
                <h1>{props.text}</h1>
                <p>{props.line}</p>
                <a href={rota}>Visualizar</a>
            </div>
        </div>
    )
}
export default CardProducts;