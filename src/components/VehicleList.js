import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import {
  Link
  } from 'react-router-dom'

function VehicleList() {

  const [nomes, setNomes] = useState([]);

  function deletar(id){

      axios.delete('http://localhost:8080/veiculos/'+id).then(response => {
          console.log(response.data);
         axios.get('http://localhost:8080/veiculos').then(response => {
        console.log(response.data);
        setNomes(response.data)
    })
      })

  }


  useEffect(() => {
    axios.get('http://localhost:8080/veiculos').then(response => {
        console.log(response.data);
        setNomes(response.data)
    })
}, []);

  var actions = ["Veiculo", "Marca","Ano","Descricao", "Vendido"]
  

  return (
      <div>
              <ul>
          {actions.map(acao => (<li key={acao} style={{display:'inline'}}>{acao} </li>))}
        </ul>
        <ul >
          {nomes.map(nome => (<li key={nome.id}>{nome.veiculo} {nome.marca} {nome.ano} {nome.descricao} {nome.vendido} <Link to={"/edit/"+nome.id}><FaEdit/></Link> <FaTrashAlt onClick={() => deletar(nome.id)}/> </li>))}
        </ul>
        
      </div>
  );
}

export default VehicleList;