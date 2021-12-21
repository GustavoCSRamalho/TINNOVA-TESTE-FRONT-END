import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useParams } from 'react-router';
import {
    Link
    } from 'react-router-dom'
  

function SoldVehicles() {

  const [listaDeCarros, setListaDeCarros] = useState([]);

  const [sold, setSold] = useState(0);
  const [notSold, setNotSold] = useState(0);

useEffect(() => {
    axios.get('http://localhost:8080/veiculos').then(response => {
        //var listaNova = response.data.map(carro => carro.vendido = carro.vendido == "true" ? true : false )
        separateSoldAndNotSold(response.data)
    })
}, []);


   function separateSoldAndNotSold(listaDeCarros){

       listaDeCarros.forEach(carro => {

           console.log(carro)
           //carro.vendido = carro.vendido.value === true ? setSold(sold + 1) : setNotSold(notSold + 1)
           if(carro.vendido) setSold(sold + 1)
           if(!carro.vendido) setNotSold(notSold + 1)

          
           
       });
   }

  

  return (
      <div>
        <h3>Carros vendidos = {sold}</h3>
        <h3>Carros nao vendidos = {notSold}</h3>
      </div>
  );
}

export default SoldVehicles;