//Bibliotecas
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Hamb from '../Hamb';

//Imagens
import Logo from "/imagens/Logos/Unipro_simbolo.svg"

//Pages
import Home from '../../Pages/Home';
import Company from '../../Pages/Company';
import Products from '../../Pages/Products';
import Contats from '../../Pages/Contats';

//Estilos
import "./NavBar.css"


const NavBar = () => {

  return (
    <Router>
      <div className='conteiner_NavBar'>
        
        <div className='conteiner_Logo'>
          <a href="/"><img src={Logo} alt="Logo Unipro" className='logo_NavBar' /></a>
        </div>
        <Hamb />
        <div className='conteiner_Routers'>
          <ul className='conteiner_itens'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/empresa'>Empresa</Link>
            </li>
            <li>
              <Link to='/produtos'>Produtos</Link>
            </li>
            <li>
              <Link to='/contato'>Contato</Link>
            </li>
            <li>
              <a href="https://www63.bb.com.br/portalbb/boleto/boletos/hc21e,802,3322,10343.bbx?pk_vid=3dafaf5722a42376161822667092c42a&pk_vid=3dafaf5722a42376161822667092c42a&pk_vid=3dafaf5722a42376161822667092c42a">Atualize seu Boleto</a>
            </li>
          </ul>
        </div>

        {/* <div className="Conteiner__Busca">
          <input type="text" className="txt__Busca" placeholder="Buscar..." />
          <i className='material-symbols-outlined'>search</i>
        </div> */}

      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/empresa' element={<Company/>}/>
        <Route path='/produtos' element={<Products/>}/>
        <Route path='/contato' element={<Contats/>}/>
      </Routes>
    </Router>

  )
}


export default NavBar