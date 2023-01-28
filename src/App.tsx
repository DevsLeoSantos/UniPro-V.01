//Bibliotecas
import Axios from "axios";
import BntWhats from "./Components/BntWhats";
import AOS from "aos";

//Componentes
import Footer from "./Components/Fotter";
import NavBar from "./Components/NavBar";

//Estilos
import "./App.css";

function App() {
  AOS.init();

  return (
    <div className="App">
      <NavBar />
      <Footer />
      <BntWhats />
    </div>
  );
}

export default App;
