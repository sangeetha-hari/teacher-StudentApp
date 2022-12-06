import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { API } from "./global";


export default function Trial() {
  const [fname, setFname] = useState("");
  const [fexp, setFexp] = useState(0);
  const [courses, setcourse]= useState("");
  const [currentbatch, setCurrentbatch]= useState("");

  return (
    <div>
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
            .then((result)=>{ console.log(result); console.log("Successfully added the Faculty")})



          }}
        >
          ADD Faculty
        </Button>
      </div>
    </div>
  );
}
