import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";

type IBGEUFResponse = {
    id: number;
    sigla: string;
    nome: string;
};
type IBGECITYResponse = {
    id: number;
    nome: string;
};

const Cities = () => {

    const [ufs, setUfs] = useState<IBGEUFResponse[]>([]);
    const [cities, setCities] = useState<IBGECITYResponse[]>([]);
    const [selectedUf, setSelectedUf] = useState("0");
    const [selectedCity, setSelectedCity] = useState("0");

    function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
        const uf = event.target.value;
        setSelectedUf(uf);
    };

    function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
        const city = event.target.value;
        setSelectedCity(city);
    };

    useEffect(() => {
        if (selectedUf === "0") {
            return;
        }
        axios
            .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
            .then((response) => {
                setCities(response.data);
            });
    });

    useEffect(() => {
        axios
            .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
            .then((response) => {
                setUfs(response.data);
            });
    }, [selectedUf]);

    return (
        <div className='CaixaTexto'>
            <div className='CaixaCidade'>
                <div className='CaixaUf'>
                    <label htmlFor='Estado'>Estado</label>
                    <select name="Estado" id="Estado" onChange={handleSelectUf}>
                        <option value="0">Selecione a UF</option>

                        {ufs.map((uf) => (
                            <option key={uf.id} value={uf.nome}>{uf.nome}</option>
                        ))}
                    </select>
                </div>
                <div className='CaixaCity'>
                    <label htmlFor='Cidade'>Cidade</label>
                    <select name="City" id="City" value={selectedCity} onChange={handleSelectCity}>
                        <option value="0">Selecione uma cidade</option>
                        {cities.map((city) => (
                            <option key={city.id} value={city.nome}>
                                {city.nome}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>

    )
}
export const CITY = "marilia";
export const UF = "SP";

export default Cities;


