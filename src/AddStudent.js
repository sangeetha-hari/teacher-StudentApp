import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import {useFormik} from 'formik';
import { API } from './global';

export function AddStudent() {

const stu={
  name:"",
  course:"",
  address:"",
  batch:"",
  lang:""

}
const formik=useFormik({
  initialValues:{
    name:"",
    course:"",
    address:"",
    batch:"",
    lang:""
  
  },
  onSubmit:(values)=>{
    // console.log("onsubmit:",values);
    console.log("onsubmit student:",stu);
  }
})
const [sent, setSent]=useState(0)

  return (
    <div className='conentdisplay'>
      <h2>To Add student : Enter students Details</h2>
      <form onSubmit={formik.handleSubmit} className='liststudent'>

        <TextField id="outlined-basic" label="Enter Name" variant="outlined"  onChange={
          (e)=>{console.log(e.target.value); 
        stu.name=e.target.value;
         console.log(" student name is:", stu.name);
          }}/>
        <TextField id="outlined-basic" label="Enter course" variant="outlined"  onChange={
          (e)=>{console.log(e.target.value); 
        stu.course=e.target.value; console.log(" student course is:", stu.course);
          }}/>
        <TextField id="outlined-basic" label="Enter Address" variant="outlined"onChange={
          (e)=>{console.log(e.target.value); 
        stu.address=e.target.value; console.log(" student address is:", stu.address);
          }} />
        {/* <TextField id="outlined-basic" label="Enter Date of Birth" variant="outlined" /> */}
        <TextField id="outlined-basic" label="Enter Batch" variant="outlined"onChange={
          (e)=>{console.log(e.target.value); 
        stu.batch=e.target.value; console.log(" student batch is:", stu.batch);
          }} />
        <TextField id="outlined-basic" label="Enter language" variant="outlined" onChange={
          (e)=>{console.log(e.target.value); 
        stu.lang=e.target.value; console.log(" student lang is:", stu.lang);
          }}/>

        <Button variant="contained" type='submit'
        onClick={()=>{
          console.log("this is a click",stu.name,stu.address,stu.batch,stu.lang);
          const newstudent={
            name:stu.name,
            course:stu.course,
            address:stu.address,
            batch:stu.batch,
            lang:stu.lang
          };
          // Add new student
          fetch(`${API}/student`,{
            method:"POST",
            body:JSON.stringify(newstudent),
              headers:{"Content-Type": "application/json"}
              
          })
          .then((data)=>{data.json();
          console.log(data);
          setSent(1);
        })
          


        }}>ADD</Button>
      </form>
<div> 
  {sent===1? <h2 className='successmsg'>Student Added to DataBase</h2>: ""}
</div>

    </div>
  );
}
