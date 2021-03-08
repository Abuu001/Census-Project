import React from 'react'
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom"
import "./CensusQA.css"
import WarningIcon from '@material-ui/icons/Warning';
import Select from 'react-select'

function CensusQA() {


    const options=[
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' }
    ]

    return (
        <>
            <div className="message__info">
            <p>  <WarningIcon  color="error" /> {"  "} Please fill the data below before proceeding</p>
            </div>
            <form className="census__Form">
                <p>
                    <label htmlFor="first_name">First Name </label>  
                    <input id="first_name" type="text" name="first_name"/> 
                </p>
            
            <p>
                <label htmlFor="last_name">Sur Name </label>  
                <input id="last_name" type="text" name="last_name"/>
            </p>

            <p>
                    <label htmlFor="date_of_birth">D . O . B </label>  
                    <input id="date_of_birth" type="date" name="date_of_birth"/>
            </p>

                <p>
                    <label htmlFor="age">Age </label>  
                    <input id="age" type="number" name="age" min="4" max="120"/>
                </p>

                <p>
                    <label htmlFor="id_number">ID no</label> 
                    <input id="id_number" type="number" name="id_number"/>
                </p>

                <p>
                    <label htmlFor="cert_id">Birth Cert No </label> 
                    <input id="cert_id" type="number" name="cert_id"/>
                </p>

                <p>
                    <label htmlFor="maritial_status">Maritial Status </label> 
                    <Select className="census__select__form" options={options} />
                </p>
                <Button>
                    <Link  to="/dashboard/censusForm" >Submit</Link> 
                </Button>
            </form>
        
        </>
    )
}

export default CensusQA
