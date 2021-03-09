import React,{useState,useEffect} from 'react'
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom"

function CensusForm() {

    const [Q1,setQ1]= useState(0)
    const [Q2,setQ2]= useState("")
    const [Q3,setQ3]= useState(0)
    const [Q4,setQ4]= useState(0)
    const [Q5,setQ5]= useState('')
    const [Q6,setQ6]= useState('')
    const [Q7,setQ7]= useState('')
    const [Q8,setQ8]= useState(0)

    const handleSubmit=()=>{
        postData()
    }

    const postData=async()=>{
        const body =  { Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8}
        const response = await fetch("/count/dashboard/censusForm",{
            method :"POST",
            headers : {"Content-type" : "application/json"},
            body : JSON.stringify(body)
        })
    }

    useEffect(()=>{
        postData()
    },[])
    return (
        <div>
             <form className="census__Form">
                <p>
                    <label htmlFor="first_name">1) How many are you in your family ?</label>  
                    <input id="first_name" type="number" name="first_name" min="0" value={Q1} onChange={e=>setQ1(e.target.value)} required/> 
                </p>
            
                <p>
                    <label htmlFor="age">2) Where do you currently live ? </label>  
                    <input id="age" type="text" name="age" value={Q2} onChange={e=>setQ2(e.target.value)}/>
                </p>

                <p>
                    <label htmlFor="last_name">3) How many people were living or staying in this house, apartment, or mobile home</label>  
                    <input id="last_name" type="number" min="0" name="last_name" value={Q3} onChange={e=>setQ3(e.target.value)} required />
                </p>

                <p>
                        <label htmlFor="date_of_birth">4)  Were there any additional people staying here , that you did not include in.
                        if yes how many?</label>  
                        <input id="last_name" type="number" min="0" name="last_name" value={Q4} onChange={e=>setQ4(e.target.value)}/>
                </p>

                <p>
                    <label htmlFor="age">5) Which Nationality are you ? </label>  
                    <input id="age" type="text" name="age" value={Q5} onChange={e=>setQ5(e.target.value)} required/>
                </p>

                <p>
                    <label htmlFor="id_number">6) Do you usually live here or stay somewhere else?</label> 
                    <input id="age" type="text" name="age" value={Q6} onChange={e=>setQ6(e.target.value)}/>
                </p>

                <p>
                    <label htmlFor="cert_id"> 7)  Are You employed ?  </label> 
                    <input id="age" type="text" name="age" value={Q7}  onChange={e=>setQ7(e.target.value)}/>
                </p>

                <p>
                    <label htmlFor="maritial_status">8) Do you have any pets ? if yes How many ? </label> 
                    <input id="first_name" type="number" name="first_name" min="0"  value={Q8}  onChange={e=>setQ8(e.target.value)} required /> 
                </p>
                <Button   variant="outlined"   color="primary" onClick={handleSubmit}>
                   <Link  to="/dashboard/censusForm/endForm" >Submit</Link> 
                </Button>
            </form>
        </div>
    )
}

export default CensusForm
