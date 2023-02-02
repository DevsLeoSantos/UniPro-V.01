//Bibliotecas
import Axios from "axios";
import AOS from "aos"



//Componentes
import Footer from "./Components/Fotter";
import BntWhats from "./Components/BntWhats";
import NavBar from "./Components/NavBar";
import { ToastContainer } from "react-toastify";

//Estilos
import "./App.css";
import "react-toastify/dist/ReactToastify.min.css"



function App() {
  AOS.init();

  return (
    <div className="App">
      <NavBar />
      <Footer />
      <BntWhats />
      <ToastContainer />
    </div>
  );
}

export default App;
