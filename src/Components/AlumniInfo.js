import React  from 'react'
import './Login.css'
import { useState } from 'react';
import {addDoc,collection} from 'firebase/firestore';
import {db} from '../Firebase'
import NavHome from './NavHome';

function AlumniInfo() {
const [name, setname] = useState('');
const [session, setsession] = useState()
const [company, setcompany] = useState()
const [dept, setdept] = useState('')
const [link, setlink] = useState()
const [designation, setdesignation] = useState('')

const uploadClickHandler = async() => {

    
    setcompany('');
    setdept('');
    setlink('');
    setname('');
    setsession('');
    setdesignation('');
    
    if(name==='' || company==='' || dept==='' || link==='' || session==='' || designation===''){
        alert('All Fields need to be filled!!')
    }
    else{
        await addDoc(collection(db,'offCampus'),{
            Name:name,
            session:session,
            company:company,
            dept:dept,
            Link:link
             })
    
              alert('Uploaded details successfully!! you can check it in offCampus section');
    }
}



  return (
    <div >
        <NavHome path='dashboard'/>
        <center>
            <h1 className="login" style={{marginTop:"100px"}}>Provide your Details to Stay connected with Us...</h1>
            <div id='main-div' style={{height:'500px' , marginTop:'25px'}}>
            <section className='input'>
                <div className="input-group mb-3 ">
                  <input type="text" value={name} onChange={(e) => setname(e.target.value)} className="form-control" placeholder="Full Name" aria-label="Username" aria-describedby="basic-addon1" required/>
                 
               </div>
            </section>

            <section className='input'>
            <div className="input-group mb-3 ">
                <input type="text" value={company} onChange={(e) => setcompany(e.target.value)} className="form-control" placeholder="Company" aria-label="Username" aria-describedby="basic-addon1" required/>
            </div>
            </section>

            <section className='input'>
            <div className="input-group mb-3 ">
                <input type="text" value={dept} onChange={(e) => setdept(e.target.value)} className="form-control" placeholder="Department" aria-label="Username" aria-describedby="basic-addon1" required/>
            </div>
            </section>

            <section className='input'>
            <div className="input-group mb-3 ">
                <input type="text" value={session } onChange={(e) => setsession(e.target.value)} className="form-control" placeholder="Session" aria-label="Username" aria-describedby="basic-addon1" required/>
            </div>
            </section>

            <section className='input'>
            <div className="input-group mb-3 ">
                <input type="text" value={ designation } onChange={(e) => setdesignation(e.target.value)} className="form-control" placeholder="Designation" aria-label="Username" aria-describedby="basic-addon1" required/>
            </div>
            </section>

            <section className='input'>
            <div className="input-group mb-3 ">
                <input type="text" value={link} onChange={(e) => setlink(e.target.value)} className="form-control" placeholder="LinkedIn Profile (Link)" aria-label="Username" aria-describedby="basic-addon1" required/>
            </div>
            </section>

            <button type="button" className="btn btn-info" onClick={uploadClickHandler}>Upload</button>
            </div>
        </center>
    </div>
  )
}
// bharti
export default AlumniInfo