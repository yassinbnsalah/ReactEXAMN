import React, { useEffect, useState } from 'react'
import Property from './Property';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function ReservationForm() {
    const { id } = useParams(); 
    const [propriety , setPropriety]= useState()
    const [nom , setname]= useState();
    const [tel , setTel]= useState();
    const [dateDeb , setDateDeb]= useState();
    const [dateFin , setDateFin]= useState();
    const [message ,setMessage ] = useState("");
    const navigate = useNavigate()
    const InitializeData = async() =>{
        try{
            const response = await axios.get("http://localhost:3001/data/"+id);
            console.log(response.data);
            setPropriety(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
          }
    }
    const ValidateReservation = async() =>{
        try{
            propriety.available = false ;
            const response = await axios.put("http://localhost:3001/data/"+id , propriety);
            console.log("propriety update succefuly");
            let prix = Math.ceil((new Date(dateFin)- new Date(dateDeb))/(1000*60*60*24))*propriety.price
            setMessage("Mr, MRS "+nom+" votre resevation pour la propriété "+propriety.name+" est"
            +" confirmée pour un prix de "+prix+"DT")
            setname("");
            setTel("")
            setDateDeb("")  
            setDateFin("")
            const timer = setTimeout(() => {
                navigate('/proprietes');
              }, 5000);
          
              return () => clearTimeout(timer);
        } catch (error) {
            console.error("Error fetching data:", error);
          }
    }
    useEffect(() =>{
        InitializeData();
    },[])
  return (
    <>
        <h2> Reservation la propriéte avec ID : {id} </h2>
       
        <form> 
            nom de localitaire 
            <input type="text"
              value={nom}
              onChange={(e) => setname(e.target.value)}
              /> <br/>
            Numero de telephone : 
            <input type="text"
              value={tel}
              onChange={(e) => setTel(e.target.value)}/> <br/>
            Date de debut de la location : 
            <input type="date"
              value={dateDeb}
              onChange={(e) => setDateDeb(e.target.value)}/><br/>
            date du fin de la location :
            <input type="date"
              value={dateFin}
              onChange={(e) => setDateFin(e.target.value)}/><br/>
            <button type="button" onClick={ValidateReservation}> Valider </button>
        </form>
        {message?.length > 0 ? (<>{message}</>) : (<></>)}
    </>
  )
}

export default ReservationForm
