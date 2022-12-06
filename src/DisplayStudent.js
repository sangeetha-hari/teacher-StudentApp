
import React, { useState , useEffect} from 'react';
import { API } from './global';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


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
    <div>
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
      {/* <CardActions>
        <Button size="small" onClick={()=>navigate("student/edit")}>Edit</Button>
        <Button size="small">More Details</Button>
      </CardActions> */}

       </Card>
      
      </div>
  )
}