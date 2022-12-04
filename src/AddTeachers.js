import React, { useEffect } from "react";
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

export function AddTeachers() {
  // Attriute of Teacher
  const teacher = {
    name: "",
    coures: [],
    experience: "",
    currentBatch: "",
  };

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
    teacher.coures=courseName;
    console.log(teacher.coures);
  }, [courseName]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    console.log(courseName);
    teacher.coures = courseName;

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
      <h2>this is AddTeachers component</h2>
      {/* form for Faculty to add */}
      <form>
        <TextField
          id="outlined-basic"
          label="Enter Faculty Name"
          variant="outlined"
          onChange={(e) => {
            console.log(e.target.value);
            teacher.name = e.target.value;
            console.log(" Teacher name is:", teacher.name);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Enter Faculty Experience"
          variant="outlined"
          onChange={(e) => {
            console.log(e.target.value);
            teacher.experience = e.target.value;
            console.log(" Teacher experience is:", teacher.experience);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Enter Faculty current batch"
          variant="outlined"
          onChange={(e) => {
            console.log(e.target.value);
            teacher.currentBatch = e.target.value;
            console.log(" Teacher current batch is:", teacher.currentBatch);
          }}
        />

        {/* this is dropdown Button */}
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

        <Button
          variant="contained"
          type="submit"
          onClick={() => {
            console.log("this is a click", teacher.name);
            const newfaculty = {
              name: teacher.name,
             coures:teacher.coures,
              experience: teacher.experience,
              currentBatch: teacher.currentBatch,
            };
            // Add new student
            fetch(`${API}/teacher`, {
              method: "POST",
              body: JSON.stringify(newfaculty),
              headers: { "Content-Type": "application/json" },
            }).then((data) => {
              data.json();
              console.log(data);
            });
          }}
        >
          ADD Faculty
        </Button>
      </form>
    </div>
  );
}
