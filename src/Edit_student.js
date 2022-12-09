import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "./global";
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


export default function Edit_student(){

    const { id } = useParams();
    const [candtinate, setCandiate]=useState(null)
// 
useEffect(()=>{
    fetch(`${API}/student/${id}`,
    {method:"GET"})
    .then((data)=>data.json())
    .then((st)=>{setCandiate(st)
         console.log(st)})
},[])




// const [cname,setCName]= useState("");
// const [ccourse, setCCourse]= useState("");
// const [cbatch, setCbatch]= useState("");
// const [caddress, setCaddress]= useState("");
// const [clanguage, setClanguage]= useState("");


return (candtinate? <EditStudentForm candtinate={candtinate} id={id}/> : <h1>Loading...</h1>);
}

function EditStudentForm(props){


    return(
        <div className='conentdisplay'>
           <h1> Update students details here</h1>
            <form className='liststudent'>
            <TextField id="outlined-basic" label="Enter Name"  value={props.candtinate.name} variant="outlined"  onChange={
          (e)=>{console.log(e.target.value); 
            props.candtinate.name=e.target.value;
         console.log(" student name is:", props.candtinate.name);
          }}/>
          <TextField id="outlined-basic" label="Enter course" variant="outlined" value={props.candtinate.course} onChange={
          (e)=>{console.log(e.target.value); 
        props.candtinate.course=e.target.value; console.log(" student course is:", props.candtinate.course);
          }}/>
        <TextField id="outlined-basic" label="Enter Address" variant="outlined" value={props.candtinate.address} onChange={
          (e)=>{console.log(e.target.value); 
            props.candtinate.address=e.target.value; console.log(" student address is:", props.candtinateu.address);
          }} />
        {/* <TextField id="outlined-basic" label="Enter Date of Birth" variant="outlined" /> */}
        <TextField id="outlined-basic" label="Enter Batch" variant="outlined" value={props.candtinate.batch} onChange={
          (e)=>{console.log(e.target.value); 
            props.candtinate.batch=e.target.value; console.log(" student batch is:", props.candtinate.batch);
          }} />
        <TextField id="outlined-basic" label="Enter language" variant="outlined" value={props.candtinate.lang} onChange={
          (e)=>{console.log(e.target.value); 
            props.candtinate.lang=e.target.value; console.log(" student lang is:", props.candtinate.lang);
          }}/>

        <Button variant="contained" type='submit'
        onClick={()=>{
          console.log("this is a click",props.candtinate.name,props.candtinate.address,props.candtinate.batch,props.candtinate.lang);
          const updatestudent={
            name:props.candtinate.name,
            course:props.candtinate.course,
            address:props.candtinate.address,
            batch:props.candtinate.batch,
            lang:props.candtinate.lang
          };
          // Add new student
          fetch(`${API}/student/${props.id}`,{
            method:"PUT",
            body:JSON.stringify(updatestudent),
              headers:{"Content-Type": "application/json"}
              
          })
          .then((data)=>{data.json();
          console.log(data);
        //   setSent(1);
        })
          


        }}>Update</Button>


          </form>

        </div>
    )
}