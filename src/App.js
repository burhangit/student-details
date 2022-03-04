import React, {useState} from "react";
const  App = () => {
const [student, setStudent] = useState({name:"",Age:"", F_Name:"", Roll_no:"", DOB:"", Address:""
});

// console.log(student.Age)
let name, value;
const handleInputs = (event) =>{
  console.log(event)
  name=event.target.name;
  value=event.target.value; 
  setStudent({...student, [name]:value});
}
return (
<div className="App">
   <div className="Students-Biodata">
      <header>
         <h1>Students Biodata</h1>
      </header>
      <div className="students__details">
         <form>
            <label>Name:</label>
            <input type="text"
               value={student.name}
               onChange={handleInputs} 
               placeholder="enter name" />
            <label>Age:</label>
            <input type="number" 
               value={student.Age}
               onChange={handleInputs}
               placeholder="enter Age" />
            <label>Father's Name:</label>
            <input type="text" 
               value={student.F_Name}
               onChange={handleInputs}
               placeholder="enter name" /><br /><br />
            <label>Roll No:</label>
            <input type="text" 
               value={student.Roll_no}
               onChange={handleInputs}
               placeholder="enter roll no" />
            <label>DOB:</label>
            <input type="date"
               value={student.DOB}
               onChange={handleInputs}
               placeholder="enter DOB" />
            <label>Address:</label>
            <input type="text" 
               value={student.Address}
               onChange={handleInputs}
               placeholder="enter address" />
            <div className="buttons">
               <button className="submit" >Submit</button>
               <button className="clear">Clear</button>
            </div>
         </form>
      </div>
   </div>
</div>
);
}
export default App;