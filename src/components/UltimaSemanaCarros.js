import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useParams } from 'react-router';
import {
    Link, withRouter 
    } from 'react-router-dom'
  

function UltimasSemanaCarros() {

  const [carrosRegistrados, setCarrosRegistrados] = useState(0)

  const { id } = useParams();




    useEffect(() => {
      var carrosRegistrados = 0;
      axios.get('http://localhost:8080/veiculos').then(response => {
          console.log(response.data);
          response.data.map(carro => {
            var data = new Date(carro.created)
            var dataDeHoje = new Date()
            console.log("Data " + data.getUTCDate())
            console.log("Data " + dataDeHoje.getUTCDate())
            var numeroDeSemanas = data.getUTCDate() - dataDeHoje.getUTCDate()
            if(numeroDeSemanas < 7){
              ++carrosRegistrados
            }
            console.log("menos de sete dias " + ( numeroDeSemanas))
          })
          setCarrosRegistrados(carrosRegistrados)
          console.log("Carros registrado = "+carrosRegistrados)
          
      })
  }, []);


   

  

  return (
      <div>
        <h2>Carros registrado durante a ultima semana</h2>
        <h3>{carrosRegistrados}</h3>
        
      </div>
  );
}

export default UltimasSemanaCarros;