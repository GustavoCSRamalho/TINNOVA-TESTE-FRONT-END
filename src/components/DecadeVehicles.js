import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useParams } from 'react-router';
import {
    Link, withRouter 
    } from 'react-router-dom'
  

function DecadeVehicles() {

  const [decadasFabricantes, setDecadasFabricantes] = useState([])

  useEffect(() => {
      var listaDeDecadas = ["1950","1960","1970","1980","1990","2000","2010","2020"]
      listaDeDecadas.map(async  decadas =>  {
        await axios.get('http://localhost:8080/veiculos/find?q=Década '+decadas).then(response => {
        var tamanho = response.data.length
        var texto = decadas+" -> "+tamanho+" veiculos"
        console.log(texto)
        setDecadasFabricantes(oldArray => [...oldArray, texto])
        
        })
        console.log("set")
        console.log(decadasFabricantes)

      })
      console.log("final")
    
}, []);


   

  

  return (
      <div>
        <h2>Carros por fabricante</h2>
        <ul>
        {
            decadasFabricantes.map(decadas => <li key={decadas}>{decadas}</li>)
        }
        </ul>
      </div>
  );
}

export default DecadeVehicles;