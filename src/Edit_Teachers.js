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
    fetch(`${API}/teacher/${id}`,
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


return (candtinate? <EditFacultyForm candtinate={candtinate} id={id}/> : <h1>Loading...</h1>);
}

function EditFacultyForm(props){

  // {
  //   "name": "name 1",
  //   "experience": 6,
  //   "currentbatch": "currentbatch 1",
  //   "courses": "courses 1",
  //   "lang": "lang 1",
  //   "id": "1"
  //  },


    return(
        <div className='conentdisplay'>
             <h1> Update faculty details here</h1>
            <form  className='liststudent'>
            <TextField id="outlined-basic" label="Enter Name"  value={props.candtinate.name} variant="outlined"  onChange={
          (e)=>{console.log(e.target.value); 
            props.candtinate.name=e.target.value;
         console.log(" student name is:", props.candtinate.name);
          }}/>
          <TextField id="outlined-basic" label="Enter Experience in months" variant="outlined" value={props.candtinate.experience} onChange={
          (e)=>{console.log(e.target.value); 
        props.candtinate.experience=e.target.value; console.log(" student course is:", props.candtinate.experience);
          }}/>
        <TextField id="outlined-basic" label="Enter Current Batch Assigned" variant="outlined" value={props.candtinate.currentbatch} onChange={
          (e)=>{console.log(e.target.value); 
            props.candtinate.currentbatch=e.target.value; console.log(" student address is:", props.candtinateu.currentbatch);
          }} />
        {/* <TextField id="outlined-basic" label="Enter Date of Birth" variant="outlined" /> */}
        <TextField id="outlined-basic" label="Enter Batch" variant="outlined" value={props.candtinate.courses} onChange={
          (e)=>{console.log(e.target.value); 
            props.candtinate.courses=e.target.value; console.log(" student batch is:", props.candtinate.courses);
          }} />
        <TextField id="outlined-basic" label="Enter language" variant="outlined" value={props.candtinate.lang} onChange={
          (e)=>{console.log(e.target.value); 
            props.candtinate.lang=e.target.value; console.log(" student lang is:", props.candtinate.lang);
          }}/>

        <Button variant="contained" type='submit'
        onClick={()=>{
          console.log("this is a click",props.candtinate.name,props.candtinate.address,props.candtinate.batch,props.candtinate.lang);
          const updateFaculty={
            name:props.candtinate.name,
            course:props.candtinate.course,
            address:props.candtinate.address,
            currentBatch:props.candtinate.currentBatch,
            experience:props.candtinate.experience,



          };
          // Add new student
          fetch(`${API}/teacher/${props.id}`,{
            method:"PUT",
            body:JSON.stringify(updateFaculty),
              headers:{"Content-Type": "application/json"}
              
          })
          .then((data)=>{data.json();
          console.log(data);
        //   setSent(1);
        })
          


        }}>Update Faculty</Button>


          </form>

        </div>
    )
}