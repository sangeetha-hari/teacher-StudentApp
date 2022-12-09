
import React, { useState , useEffect} from 'react';
import { API } from './global';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Navigate, Routes, Route,useNavigate} from 'react-router-dom';


export function DisplayStudent() {
// Array to store the student list 
const [studentlist, setStudentlist]=useState([]);
//Function to retrive the data from API
const getStudents=()=>{
  fetch(`${API}/student`,{
  method:"GET"
})
.then(response=>response.json())
.then(result=>{setStudentlist(result)})
}
//Call this function once
useEffect(()=>{getStudents()},[])


  return (
    <div className='conentdisplay'>
      <h2>Student List</h2>
      <div className='listdisplay'>
      { studentlist.map((ele,index)=>(
        <SingleStudentDisplay ele={ele} index={index}/>
       ))}

      </div>
    </div>
  );
}



// Single Student Display element in this component
function SingleStudentDisplay(props){
  const navigate= useNavigate();
  function studentdelete(id,index){
    fetch(`${API}/teacher/${id}`,
    {method:"DELETE"}
    ) .then((data)=>data.json())
    .then((result)=>{console.log(result);
      window.alert("one Student deleted ")
    navigate('/student/add')})
  }
  return(
    <div>      
       <Card sx={{ maxWidth: 300 }} >
       <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.ele.name} {props.ele.id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Student has enrolled for {props.ele.course}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Registered Batch : {props.ele.Batch}
        </Typography>
      </CardContent>
      {/* to all any button for each card  */}
      <CardActions>
        <Button size="small" onClick={()=>{navigate('/student/edit/'+props.ele.id)}}>Edit</Button>
        {/* <Button size="small" onClick={()=>{}}>More Details</Button> */}
        <Button size="small" onClick={()=>{
          window.confirm("Are you sure u want to detele", "yes")? studentdelete(props.ele.id, props.index): console.log("Dont delete the faculty");
        }}>Delete</Button>
      </CardActions>

       </Card>
      
      </div>
  )
}