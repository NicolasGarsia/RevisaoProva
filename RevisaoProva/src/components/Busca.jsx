import { useState } from 'react'


export default function Busca() {

    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState(null)


    const fetchData = async () => {

        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();
            setEndereco(data)
        } catch (error) {
            console.error('Erro ao buscar CEP:', error);
        }
    };


    return (

        <div>
            <h1> Busque por um CEP </h1>
            <div id='coisas'>
            <input
                value={cep}

                type="text"

                id="txt"

                placeholder="DIGITE A PORRA DO CEP USUARIO IDIOTA"

                onChange={(e) => setCep(e.target.value)}
            />

            <button id="btn" onClick={fetchData}> Buscar </button>
            </div>
            {endereco && (
                <div id='infos'>
                    <p>Cidade: {endereco.localidade}</p>
                    <p>Bairro: {endereco.bairro}</p>
                    <p>Rua: {endereco.logradouro}</p>
                    <p>UF: {endereco.uf}</p>
                </div>

            )}

        </div>

    )

}