import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import "./CensusQA.css"
import WarningIcon from '@material-ui/icons/Warning';
import Button from '@material-ui/core/Button';

function CensusQA() {

    const [firstName,setFirstName]=useState('')
    const [surName,setSurName]=useState('')
    const [dob,setDob]=useState('')
    const [age,setAge]=useState(0)
    const [idNo,setIdNo]=useState(0)
    const [certNo,setCertNo]=useState(0)

    const handleSubmit=()=>{
        postDetails()
    }

    const postDetails=async()=>{
        const body =  {firstName,surName,dob,age,idNo,certNo}
        const response = await fetch("/count/dashboard/censusQA",{
            method :"POST",
            headers : {"Content-type" : "application/json"},
            body : JSON.stringify(body)
        })
    }

    useEffect(()=>{
        postDetails()
    },[])

    return (
        <>
            <div className="message__info">
            <p>  <WarningIcon  color="error" /> {"  "} Please fill the data below before proceeding</p>
            </div>
            <form className="census__Form">
                <p>
                    <label htmlFor="first_name">First Name </label>  
                    <input id="first_name" type="text" name="first_name" value={firstName}  onChange={ e=>setFirstName(e.target.value)}  required/> 
                </p>
            
            <p>
                <label htmlFor="last_name">Sur Name </label>  
                <input id="last_name" type="text" name="last_name"   value={surName}  onChange={e=> setSurName(e.target.value)}  required/>
            </p>

            <p>
                    <label htmlFor="date_of_birth">D . O . B </label>  
                    <input id="date_of_birth" type="date" name="date_of_birth"   value={dob}  onChange={e=>setDob(e.target.value)}  required/>
            </p>

                <p>
                    <label htmlFor="age">Age </label>  
                    <input id="age" type="number" name="age" min="4" max="120"  value={age}  onChange={e=>setAge(e.target.value)} />
                </p>

                <p>
                    <label htmlFor="id_number">ID no</label> 
                    <input id="id_number" type="number" name="id_number"  value={idNo}  onChange={e=> setIdNo(e.target.value)}  required/>
                </p>

                <p>
                    <label htmlFor="cert_id">Birth Cert No </label> 
                    <input id="cert_id" type="number" name="cert_id"   value={certNo}  onChange={e=>setCertNo(e.target.value)}  required/>
                </p>

                <Button  variant="outlined"   color="primary" onClick={handleSubmit} >
                    <Link  to="/dashboard/censusForm" >Submit</Link> 
                </Button>
            </form>
        
        </>
    )
}

export default CensusQA
