import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useParams } from 'react-router';

function AddVehicle() {

  const [veiculo, setVeiculo] = useState("");
  const [marca, setMarca] = useState("");
  const [ano, setAno] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [vendido, setVendido] = useState("");
  const [vendidoTag, setVendidoTag] = useState([true,false]);
  const { id } = useParams();

  const [fabricantesDeCarros, setFabricantesDeCarros] = useState(["AGCO","Caterpillar","CNH New Holland","Chery","Ford","Chevrolet","Honda","Hyundai","Komatsu","Mercedes-Benz","Scania","Toyota","Valtra","VW","John Deere"]);




  const [carro, setCarro] = useState({
    veiculo: '',
    marca: "",
    ano: "",
    descricao: '',
    vendido: '',
});


    function handleInputChange(event){
        carro[event.target.name] = event.target.value;
        setCarro(carro);
    }

    function handleFormSubmit(event){
        console.log("Estou no if")
        console.log(carro)

        
        axios.post('http://localhost:8080/veiculos',carro).then(response => {
            console.log(response.data);
            setCarro(response.data)
            setAno(response.data.ano)
            setDescricao(response.data.descricao)
            setMarca(response.data.marca)
            setVeiculo(response.data.veiculo)
            setVendido(response.data.vendido)
            alert("Enviado com sucesso!")
        })
                    
    
                
        
        event.preventDefault();
        console.log(carro);
    }

  

  return (
      <div>
      <h2>Adicionar Veiculo</h2>
        <form onSubmit={handleFormSubmit}>
          <input type="text" name="veiculo" id="veiculo"   onChange={handleInputChange} placeholder="veiculo"  />
          <select name="marca" id="marca" onChange={handleInputChange} placeholder="marca">
            <option value="0">Selecione uma opção</option>
            {fabricantesDeCarros.map(fabricante => (<option key={fabricante} value={fabricante}>{fabricante}</option>))}
        </select>          
        <input type="number" name="ano" id="ano" placeholder="ano do veiculo" onChange={handleInputChange} />
          <input type="text" name="descricao" id="descricao" placeholder="Década ****" onChange={handleInputChange} />
          <select name="vendido" id="vendido" onChange={handleInputChange}>
            <option value="0">Selecione uma opção</option>
            {vendidoTag.map(vendido => (<option key={vendido} value={vendido}>{vendido === true ? "Vendido" : "Em estoque"}</option>))}
        </select>
          <button type="submit">Enviar</button>
          </form>
      </div>
  );
}

export default AddVehicle;