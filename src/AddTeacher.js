import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { API } from "./global";
import { useNavigate } from 'react-router-dom';

export default function AddTeacher() {
  const [fname, setFname] = useState("");
  const [fexp, setFexp] = useState(0);
  const [courses, setcourse]= useState("");
  const [currentbatch, setCurrentbatch]= useState("");
  const navigate=useNavigate();
  return (
    <div className="conentdisplay">
      <h1>Register Faculty</h1>
      <div className="liststudent">
        <TextField
          id="outlined-basic"
          label="Enter Faculty Name"
          variant="outlined"
          onBlur={(e) => {
            console.log(e.target.value);
            setFname(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Enter experience"
          variant="outlined"
          onBlur={(e) => {
            console.log(e.target.value);
            setFexp(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Enter current Batch"
          variant="outlined"
          onBlur={(e) => {
            console.log(e.target.value);
            setCurrentbatch(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Expert in courses"
          variant="outlined"
          onBlur={(e) => {
            console.log(e.target.value);
            setcourse(e.target.value);
          }}
        />

        <Button
          variant="contained"
          type="submit"
          onClick={() => {
            console.log(fname, fexp);
            const newteacher={
                name: fname,
                experience: fexp,
                currentBatch:currentbatch,
                coures:courses
            };

            fetch(`${API}/teacher`, {
                method:"POST",
                body: JSON.stringify(newteacher),
                headers:{"Content-Type":"application/json"}
            }).then((data)=>{data.json();})
            .then((result)=>{ console.log(result); console.log("Successfully added the Faculty");
            navigate('/teacher/display')})



          }}
        >
          ADD Faculty
        </Button>
      </div>
    </div>
  );
}
