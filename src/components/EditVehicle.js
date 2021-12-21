import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useParams } from 'react-router';
import {
    Link, withRouter 
    } from 'react-router-dom'
  

function EditVehicle() {

  const [veiculo, setVeiculo] = useState("");
  const [marca, setMarca] = useState("");
  const [ano, setAno] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [vendido, setVendido] = useState("");




  const [fabricantesDeCarros, setFabricantesDeCarros] = useState(["AGCO","Caterpillar","CNH New Holland","Chery","Ford","Chevrolet","Honda","Hyundai","Komatsu","Mercedes-Benz","Scania","Toyota","Valtra","VW","John Deere"]);
  const [vendidoTag, setVendidoTag] = useState([true,false]);

  const { id } = useParams();



  const [carro, setCarro] = useState({
    veiculo: '',
    marca: "",
    ano: "",
    descricao: '',
    vendido: '',
});

  useEffect(() => {
    axios.get('http://localhost:8080/veiculos/'+id).then(response => {
        console.log(response.data);
        setCarro(response.data)
        setAno(response.data.ano)
        setDescricao(response.data.descricao)
        setMarca(response.data.marca)
        setVeiculo(response.data.veiculo)
        setVendido(response.data.vendido)
    })
}, []);


    function handleInputChange(event){
        carro[event.target.name] = event.target.value;
        setCarro(carro);
    }

    function handleFormSubmit(event){
        console.log("Estou no if")
        console.log(carro)

        if(vendido !== carro.vendido){
            console.log("vendido no if")
            if(marca !== carro.marca){

                console.log("ano no if")
                if (ano !== carro.ano){
                    console.log("vendido no if")
                    if (descricao !== carro.descricao){
                        console.log("descricao no if")
                        if (veiculo !== carro.veiculo){
                            console.log("veiculo no if")
                            //carro.vendido = carro.vendido === "true"? true : false
                            axios.put('http://localhost:8080/veiculos/'+id,carro).then(response => {
                                console.log("response");
                                console.log(response.data);
                                setCarro(response.data)
                                setAno(response.data.ano)
                                setDescricao(response.data.descricao)
                                setMarca(response.data.marca)
                                setVeiculo(response.data.veiculo)
                                setVendido(response.data.vendido)
                                
                            })
                    } 

                } 

                
        } 
    }
    
                
        }else{
            console.log("Estou no else")
            axios.patch('http://localhost:8080/veiculos/'+id,carro).then(response => {
                    console.log(response.data);
                    setCarro(response.data)
                    setAno(response.data.ano)
                    setDescricao(response.data.descricao)
                    setMarca(response.data.marca)
                    setVeiculo(response.data.veiculo)
                    setVendido(response.data.vendido)
                    
                })
        }
        event.preventDefault();
        console.log(carro);
    }

  

  return (
      <div>
        <form onSubmit={handleFormSubmit}>
          <input type="text" name="veiculo" id="veiculo" defaultValue={carro.veiculo} placeholder="veiculo" onChange={handleInputChange}  />
          <select name="marca" id="marca" onChange={handleInputChange}>
            <option value="0">Selecione uma opção</option>
            {fabricantesDeCarros.map(fabricante => (<option key={fabricante} value={fabricante}>{fabricante}</option>))}
        </select>          
        <input type="number" name="ano" id="ano" defaultValue={carro.ano}  placeholder="ano do veiculo" onChange={handleInputChange} />
          <input type="text" name="descricao" id="descricao" defaultValue={carro.descricao} placeholder="descricao" onChange={handleInputChange} />
          <select name="vendido" id="vendido" onChange={handleInputChange}>
            <option value="0">Selecione uma opção</option>
            {vendidoTag.map(vendido => (<option key={vendido} value={vendido}>{vendido === true ? "Vendido" : "Em estoque"}</option>))}
        </select>             <button type="submit">Enviar</button>
          </form>
      </div>
  );
}

export default EditVehicle;