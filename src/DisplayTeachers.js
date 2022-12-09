import React, { useState , useEffect} from 'react';
import { API } from './global';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';


export function DisplayTeachers() {
// Array to store the teacher list 
const [teacherlist, setteacherlist]=useState([]);
//Function to retrive the data from API
const getteachers=()=>{
  fetch(`${API}/teacher`,{
  method:"GET"
})
.then(response=>response.json())
.then(result=>{setteacherlist(result)})
}
//Call this function once
useEffect(()=>{getteachers()},[])

  return (
    <div className='conentdisplay'>
      <h1>Faculty List</h1>
      <div className='listdisplay'>
      { teacherlist.map((ele,index)=>(
        <SingleteacherDisplay ele={ele} index={index}/>
       ))}

      </div>
    </div>
  );
}



// Single teacher Display element in this component
function SingleteacherDisplay(props){
const navigate=useNavigate();

function facultydelete(id,index){
  fetch(`${API}/teacher/${id}`,
  {method:"DELETE"}
  ) .then((data)=>data.json())
  .then((result)=>{console.log(result);
    window.alert("one faculty deleted ")
  navigate('/teacher/add')})
}
  return(
    <div>      
       <Card sx={{ maxWidth: 300 }} >
       <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.ele.name} 
        </Typography>
        <Typography> Faculty ID: {props.ele.id}</Typography>
        <Typography variant="body2" color="text.secondary">
          Expertised in  {props.ele.course}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.ele.experience} Years of experience and handing current Batch {props.ele.currentBatch}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>{navigate('/teacher/edit/'+props.ele.id)}}>Edit</Button>
        {/* <Button size="small" onClick={()=>{}}>More Details</Button> */}
        <Button size="small" onClick={()=>{
          window.confirm("Are you sure u want to detele", "yes")? facultydelete(props.ele.id, props.index): console.log("Dont delete the faculty");
        
          }}>Delete</Button>
      </CardActions>

       </Card>
      
      </div>
  )
}
