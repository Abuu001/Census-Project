import React, { Fragment,useEffect,useState } from 'react'
import { toast } from 'react-toastify';
import VoterModel from "./VoterModel/VoterModel"
import "./Dashboard.css"
import census1 from "../../Assets/census1.jpeg"

function Dashboard({setAuth}) {
    const [name,setName]=useState("")

    const getName =async ()=>{
        try {
            const response = await fetch("/dashboard",{
                method :"GET",
                headers : {token : localStorage.token },
            })
            const parseRes =  await response.json()
            setName(parseRes.user_name)
            console.log(parseRes);
        } catch (error) {
            console.log(error.message);
        }
    }

    const logout=(e)=>{
        e.preventDefault()
        localStorage.removeItem("token")
        setAuth(false)
        toast.dark("Logged out Successfully")
    }

    useEffect(()=>{
        getName()
    },[])
    return (
     <Fragment>
         <div className="dashboard__topbar">
         <img  src={census1} alt="census icon"/>
            <h1>Dashboard</h1>
            <h3>Welcome {name}</h3>
            <button   className="btn btn-primary btn-block" onClick={e=>logout(e)}>Log Out</button>
         </div>
         <VoterModel />
     </Fragment>
    )
}

export default Dashboard
