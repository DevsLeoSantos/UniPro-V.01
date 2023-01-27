//Bibliotecas
import Axios from "axios";
import BntWhats from "./Components/BntWhats";

//Componentes
import Footer from "./Components/Fotter";
import NavBar from "./Components/NavBar";

//Estilos
import "./App.css";

//teste
import Login from "./Pages/Login/Index";
import DashBoard from "./Pages/DashBoard/Index";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Footer />
      <BntWhats />
      {/* <Login/> */}
      {/* <DashBoard/> */}
    </div>
  );
}

export default App;
