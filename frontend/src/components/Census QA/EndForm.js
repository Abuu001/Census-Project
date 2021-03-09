import React,{useState,useEffect} from 'react'
import { toast } from 'react-toastify';
import {Link} from "react-router-dom"

function EndForm() {

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
        // setAuth(false)
        toast.dark("Logged out Successfully")
    }

    useEffect(()=>{
        getName()
    },[])
    return (
        <div>
            <h2>Thank you For submitting the form .You cna now Log Out</h2>
            <button   className="btn btn-primary btn-block" onClick={e=>logout(e)}><Link  to="/final" style={{color : "white",textDecoration:"none",fontWeight:900}}>Log Out</Link> </button>
        </div>
    )
}

export default EndForm
