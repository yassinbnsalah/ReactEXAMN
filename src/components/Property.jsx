import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateDataReducer } from '../redux/dataSlice';

function Property({data}) {
    const [visible , setVisible ] = useState(true)
    const [rate , setRate] = useState(0)
    const dispatch = useDispatch()
    const createEvaluation = () =>{
        setVisible(!visible)
    }
    const navigate = useNavigate();
    const UpdateData = async () => {
        try {
            data.vue_number = data.vue_number+1 
            const response = await axios.put("http://localhost:3001/data/"+data.id , data);
            console.log("Data updated succeffully");
          } catch (error) {
            console.error("Error fetching data:", error);
          }
      };
    const GoToReservationPage = () =>{
        UpdateData();
        navigate("/reserve/"+data.id)
    }
    const Ratingg = () =>{
        console.log(rate);
        console.log(data.rate);
        data.rate = data.rate + rate
        dispatch(updateDataReducer(data))
    }
  return (
    <center>
        <fieldset>
      <h2> {data.name}</h2>
        <p> Adress : {data.adress}</p>
        <p> price : {data.price}</p>
        <p> vue_number : {data.vue_number}</p>
      {data.available ? (<><button type='button' onClick={GoToReservationPage}> Reserver </button></>):(<></>)}

      <button type='button' onClick={createEvaluation}>Ajouter une evaluation </button>
      <div hidden={visible}>
      Note : <select value={rate}    onChange={(e) => setRate(e.target.value)} >
        <option> 1 </option>
        <option> 2 </option>
        <option> 3 </option>
        <option> 4 </option>
        <option> 5 </option>

      </select><br/><button  type='button' onClick={Ratingg}> Ajouter </button>  
      </div>
      </fieldset>
    </center>
  )
}

export default Property
