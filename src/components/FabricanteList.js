import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useParams } from 'react-router';
import {
    Link, withRouter 
    } from 'react-router-dom'
  

function FabricanteList() {
  const [vendido, setVendido] = useState("");

  const [vendidoTag, setVendidoTag] = useState([true,false]);

  const [carrosPorFabricante, setCarrosPorFabricante] = useState([])

  const { id } = useParams();



  const [carro, setCarro] = useState({
    veiculo: '',
    marca: "",
    ano: "",
    descricao: '',
    vendido: '',
});

  useEffect(() => {
      var listaDeFabricantes = ["AGCO","Caterpillar","CNH New Holland","Chery","Ford","Chevrolet","Honda","Hyundai","Komatsu","Mercedes-Benz","Scania","Toyota","Valtra","VW","John Deere"]
      listaDeFabricantes.map(async  fabricantes =>  {
        await axios.get('http://localhost:8080/veiculos/find?q='+fabricantes).then(response => {
        var tamanho = response.data.length
        var texto = fabricantes+" -> "+tamanho+" veiculos"
        console.log(texto)
        setCarrosPorFabricante(oldArray => [...oldArray, texto])
        
        })
        console.log("set")
        console.log(carrosPorFabricante)

      })
      console.log("final")
    
}, []);


   

  

  return (
      <div>
        <h2>Carros por fabricante</h2>
        <ul>
        {
            carrosPorFabricante.map(fabricante => <li key={fabricante}>{fabricante}</li>)
        }
        </ul>
      </div>
  );
}

export default FabricanteList;