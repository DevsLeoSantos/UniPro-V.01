

// //Bibliotecas
// import { useState } from 'react'
// import { Squash as Hamburger } from 'hamburger-react'
// import { Link } from 'react-router-dom';

// //Estilos
// import "./Hamb.css"


// const Hamb = () => {
//     const [isOpen, setOpen] = useState("itemsClose")

//     return (
//         <div>
//             <ul className={isOpen} >
//           <ul className='Hamb_itens'>
//             <li>
//               <Link to='/'>Home</Link>
//             </li>
//             <li>
//               <Link to='/empresa'>Empresa</Link>
//             </li>
//             <li>
//               <Link to='/produtos'></Link>
//             </li>
//             <li>
//               <Link to='/contato'>Contato</Link>
//             </li>
//             <li>
//               <a href="https://www63.bb.com.br/portalbb/boleto/boletos/hc21e,802,3322,10343.bbx?pk_vid=3dafaf5722a42376161822667092c42a&pk_vid=3dafaf5722a42376161822667092c42a&pk_vid=3dafaf5722a42376161822667092c42a">Atualize seu Boleto</a>
//             </li>
//           </ul>
//         </ul>

//         <div className='botaoHamburguer'>
//           <Hamburger color="#fff" onToggle={toggled => {
//             if (toggled) {
//               setOpen("itemsOpen")
//             } else {
//               setOpen("itemsClose")
//             }
//           }} />
//         </div>
//         </div>
//     )
// }

// export default Hamb








//Bibliotecas
import { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom';

//Estilos
import "./Hamb.css"


const Hamb = () => {

  const [isOpenNav, setOpenNav] = useState("nav")

  const enable = () => {
    document.getElementById('burguer')?.classList.toggle('open')
    document.getElementById('nav')?.classList.toggle('nav-open')
  }

  return (
    <div className='Conteiner__Hamb'>

      <Hamburger color="#fff" onToggle={toggled => {
        if (toggled) {
          setOpenNav("nav nav-open")
        } else {
          setOpenNav("nav")
        }
      }} />
     
      <nav className={isOpenNav} id='nav'>
        <li >
          <a href="/">Home</a>
        </li>
        <li >
          <a href="/empresa">Empresa</a>
        </li>
        <li >
          <a href="/produtos">Produtos</a>
        </li>
        <li >
          <a href="/contato">Contato</a>
        </li>
      </nav>
    </div>
  )
}

export default Hamb