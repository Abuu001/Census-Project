import React,{useState} from 'react'
import "./VoterModel.css"
import FlareRoundedIcon from '@material-ui/icons/FlareRounded';
import Checkbox from '@material-ui/core/Checkbox';
import Footer from "../../../Footer/Footer"
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom"
import CensusQA from '../../../Census QA/CensusQA';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function VoterModel() {
    const [checkbox,setCheckbox] = useState(false);
    const [open, setOpen] = useState(false);

    const checkBoxHandler=(event)=>{
        setCheckbox(prevVal=>!prevVal);
    }

    const handleProceed =()=>{
        setOpen(o => !o)
    }

    //handle popup model
    const closeModal = () =>{
        setOpen(false);
    } 
 
    return (
        <div  className="votermodel">
          <div className="message_info">
                <p>  <FlareRoundedIcon color="error" fontSize="large"/> {"  "} The purpose of this policy is to explain how we handle information 
                    we collect during your visit to Census Bureau web sites. This policy does 
                    not apply to third-party web sites that you are able to access from our web 
                    sites, nor does it cover other Census Bureau information collection practices 
                    that do not happen on the Internet.We do not collect personally identifiable 
                    information (name, address, e-mail address, social security number, or other 
                    personal unique identifiers) or business identifiable information on our web 
                    sites unless we specifically advise you that we are doing so.
                </p>
          </div>

          <div>
              <p>
                   <b><u>1. DEFINITIONS: </u></b> As used in this License Agreement, “Allocate” or “Licensed Software”
                    means the Licensed Software and demographic data files and information contained on the
                    media provided with this package, or downloaded. The Licensed Software is proprietary to
                    SRC or to SRC’s licensors. “Computer” means mainframe or personal computers, hand held
                    computers, personal digital devices and all other such apparatus capable of operating or
                    accommodating the operation of Allocate. “Copies” means the actual copies of all or any
                    portion of Allocate, including backups, updates, merged or partial copies permitted hereunder
                    or subsequently provided to you. “Data” means the BOC’s Summary Files 1-4 of the 2000
                    Census data provided with the Product. “Related Materials” means all of the printed materials,
                    non-Data, and whatever is in the package, or accessed “online,” via electronic documentation,
                    or downloaded, or otherwise supplied by or from BOC or SRC for use with the Licensed
                    Software. “License” means the grant of certain limited rights to use and maintain the Licensed
                    Software, Data, Copies and Related Materials. Where used herein the term “You” or “you” shall
                    refer to the Licensee. “Licensor” is the BOC, subject to the rights of SRC in the Licensed
                    Software. The Licensed Software and all Related Materials are provided subject to the
                    following terms and conditions.
              </p>

              <p>
                 2. <b><u>LICENSE AND RESTRICTIONS.</u></b> The Licensed Software is licensed, not sold. In order to
                preserve and protect its rights under applicable law, Licensor is not selling you ownership
                rights to the Licensed Software. The BOC specifically retains title to all Data owned by it and
                incorporated into the Licensed Software. SRC retains title to the Licensed Software, except for
                the portions licensed to SRC by third parties, title to which portions is retained by those third
                party owners. 
              </p>
            <p>
                Agree users Agreement <Checkbox   onClick={checkBoxHandler} checked={checkbox}/>
                <Button 
                    variant="outlined" 
                    color="primary" 
                    onClick={handleProceed} 
                    disabled={checkbox === false ? true : false}
                // >  <Link  to="/dashboard/censusQA"    className={checkbox === false ? "dis" : "ene"}>Proceed</Link> </Button>
                > Proceed</Button>
            </p>

            <Popup open={open} closeOnDocumentClick onClose={closeModal} >
                <div id="close__model">
                    <a className="close"  href="/dashboard" onClick={closeModal}> &times; </a>
                </div>
                <div></div>
                    <CensusQA />
           </Popup>

 
            <Footer />
          </div>
        </div>
    )
}

export default VoterModel
