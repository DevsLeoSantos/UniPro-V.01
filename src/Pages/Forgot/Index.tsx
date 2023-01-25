

//Bibliotecas
import React, { useState } from "react"
import CampoLogin from "../../Components/CampoLogin";

//Estilos
import "./Forgot.css"




const Forgot = () => {
    const [userAdm, setUserAdm] = useState("");
    const [passwordAdm, setPasswordAdm] = useState("");


    const AoEntrar = (e: any) => {
        e.preventDefault();

        console.log(passwordAdm, userAdm)
        setUserAdm("");
        setPasswordAdm("");
    }


    return (
        <div className = "Conteiner__Forget">
            <form onSubmit={AoEntrar} className="dados">
                <div className="dados1">
                    <h2>Recuperar Senha</h2>
                </div>
                <div className="card-content">
                    <CampoLogin
                        htmlFor="User"
                        Label="Usuário"
                        Type="text"
                        Id="user"
                        Digitado={userAdm}
                        aoAlterar={(Digitado: React.SetStateAction<string>) => setUserAdm(Digitado)}
                    />
                    <CampoLogin
                        htmlFor="password"
                        Label="Senha"
                        Type="password"
                        Id="password"
                        Digitado={passwordAdm}
                        aoAlterar={(Digitado: React.SetStateAction<string>) => setPasswordAdm(Digitado)}
                    />

                </div>
                <div className="Forgot">
                    <button> Entrar </button>
                </div>

            </form>
        </div>
    )
}

export default Forgot;