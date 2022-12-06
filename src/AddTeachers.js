// import React, { useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import { API } from "./global";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";

// export function AddTeachers() {
//   // Attriute of Teacher
//   const teacher = {
//     name: "",
//     coures: [],
//     experience: "",
//     currentBatch: "",
//   };

  // const ITEM_HEIGHT = 48;
  // const ITEM_PADDING_TOP = 8;
  // const MenuProps = {
  //   PaperProps: {
  //     style: {
  //       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
  //       width: 250,
  //     },
  //   },
  // };
  // const names = [
  //   "Java",
  //   "Python",
  //   "JavaScript",
  //   "HTML",
  //   "CSS",
  //   "ReactJS",
  //   "MongoDB",
  //   "NodeJS",
  //   "GoLang",
  //   "AngularJS",
  // ];

  // const [courseName, setCourseName] = React.useState([]);
  // useEffect(() => {
  //   console.log(courseName);
  //   teacher.coures=courseName;
  //   console.log(teacher.coures);
  // }, [courseName]);
  // const handleChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   console.log(courseName);
  //   teacher.coures = courseName;

  //   setCourseName(
  //     // On autofill we get a stringified value.
  //     typeof value === "string" ? value.split(",") : value
  //   );
  // };
  // function getStyles(name, courseName, theme) {
  //   return {
  //     fontWeight:
  //       courseName.indexOf(name) === -1
  //         ? theme.typography.fontWeightRegular
  //         : theme.typography.fontWeightMedium,
  //   };
  // }
  // const theme = useTheme();
//   return (
//     <div>
//       <h2>this is AddTeachers component</h2>
//       {/* form for Faculty to add */}
//       <form>
//         <TextField
//           id="outlined-basic"
//           label="Enter Faculty Name"
//           variant="outlined"
//           onChange={(e) => {
//             console.log(e.target.value);
//             teacher.name = e.target.value;
//             console.log(" Teacher name is:", teacher.name);
//           }}
//         />
//         <TextField
//           id="outlined-basic"
//           label="Enter Faculty Experience"
//           variant="outlined"
//           onChange={(e) => {
//             console.log(e.target.value);
//             teacher.experience = e.target.value;
//             console.log(" Teacher experience is:", teacher.experience);
//           }}
//         />
//         <TextField
//           id="outlined-basic"
//           label="Enter Faculty current batch"
//           variant="outlined"
//           onChange={(e) => {
//             console.log(e.target.value);
//             teacher.currentBatch = e.target.value;
//             console.log(" Teacher current batch is:", teacher.currentBatch);
//           }}
//         />

//         {/* this is dropdown Button */}
        // <Select
        //   multiple
        //   displayEmpty
        //   value={courseName}
        //   onChange={handleChange}
        //   input={<OutlinedInput />}
        //   renderValue={(selected) => {
        //     if (selected.length === 0) {
        //       return <em>Courses</em>;
        //     }

        //     return selected.join(", ");
        //   }}
        //   MenuProps={MenuProps}
        //   inputProps={{ "aria-label": "Without label" }}
        // >
        //   <MenuItem disabled value="">
        //     <em>Courses</em>
        //   </MenuItem>
        //   {names.map((name) => (
        //     <MenuItem
        //       key={name}
        //       value={name}
        //       style={getStyles(name, courseName, theme)}
        //     >
        //       {name}
        //     </MenuItem>
        //   ))}
        // </Select>

//         <Button
//           variant="contained"
//           type="submit"
//           onClick={() => {
//             console.log("this is a click", teacher.name);
//             const newfaculty = {
//               name: teacher.name,
//              coures:teacher.coures,
//               experience: teacher.experience,
//               currentBatch: teacher.currentBatch,
//             };
//             // Add new student
//             fetch(`${API}/teacher`, {
//               method: "POST",
//               body: JSON.stringify(newfaculty),
//               headers: { "Content-Type": "application/json" },
//             }).then((data) => {
//               data.json();
//               console.log(data);
//             });
//           }}
//         >
//           ADD Faculty
//         </Button>
//       </form>
//     </div>
//   );
// }



import React, { useEffect, useState } from 'react';

export function AddTeachers() {

const faculty={
  name:"",
  course:[],
 currentbatch:"",
 experience:0,
  lang:""

}
const formik=useFormik({
  initialValues:{
    name:"",
    course:[],
    currentbatch:"",
    experience:0,
    lang:""
  
  },
  onSubmit:(values)=>{
    // console.log("onsubmit:",values);
    console.log("onsubmit teacher:",faculty);
  }
})
const [sent, setSent]=useState(0)


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = [
  "Java",
  "Python",
  "JavaScript",
  "HTML",
  "CSS",
  "ReactJS",
  "MongoDB",
  "NodeJS",
  "GoLang",
  "AngularJS",
];

const [courseName, setCourseName] = React.useState([]);
useEffect(() => {
  console.log(courseName);
  faculty.coures=courseName;
  console.log(faculty.coures);
}, [courseName]);
const handleChange = (event) => {
  const {
    target: { value },
  } = event;
  console.log(courseName);
  faculty.coures = courseName;

  setCourseName(
    // On autofill we get a stringified value.
    typeof value === "string" ? value.split(",") : value
  );
};
function getStyles(name, courseName, theme) {
  return {
    fontWeight:
      courseName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const theme = useTheme();

  return (
    <div>
      <h2>To Add teacher : Enter teachers Details</h2>
      <form onSubmit={formik.handleSubmit} className='liststudent'>

        <TextField id="outlined-basic" label="Enter Faculty Name" variant="outlined"  onChange={
          (e)=>{console.log(e.target.value); 
        faculty.name=e.target.value;
         console.log(" teacher name is:", faculty.name);
          }}/>
        <TextField id="outlined-basic" label="Enter Experience" variant="outlined"  onChange={
          (e)=>{console.log(e.target.value); 
        faculty.experience=e.target.value; console.log(" teacher course is:", faculty.experience);
          }}/>
        
        <TextField id="outlined-basic" label="Enter Current Batch" variant="outlined"onChange={
          (e)=>{console.log(e.target.value); 
        faculty.currentbatch=e.target.value; console.log(" teacher batch is:", faculty.currentbatch);
          }} />
        <TextField id="outlined-basic" label="Enter language" variant="outlined" onChange={
          (e)=>{console.log(e.target.value); 
        faculty.lang=e.target.value; console.log(" teacher lang is:", faculty.lang);
          }}/>

<Select
          multiple
          displayEmpty
          value={courseName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Courses</em>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            <em>Courses</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, courseName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>



        <Button variant="contained" type='submit'
        onClick={()=>{
          // console.log("this is a click",faculty.name,faculty.address,faculty.batch,faculty.lang);
          const newteacher={
            name:faculty.name,
            currentbatch:faculty.batch,
            experience:faculty.experience,
            course:faculty.course,
            lang:faculty.lang
          };
          // Add new teacher
          fetch(`${API}/teacher`,{
            method:"POST",
            body:JSON.stringify(newteacher),
              headers:{"Content-Type": "application/json"}
              
          })
          .then((data)=>{data.json();
          console.log(data);
          setSent(1);
        })

        }}>ADD</Button>
      </form>
<div> 
  {sent===1? <h2 className='successmsg'>Teacher Added to DataBase</h2>: ""}
</div>

    </div>
  );
}
