import React, { useState } from "react";
const App = () => {
  // here we store each individual student details
  const [students, setStudents] = useState([]);

  // each input value individually store own state;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [dob, setDOB] = useState("");
  const [address, setAddress] = useState("");



  const submitForm = (e) => {
    e.preventDefault(); // this will disable page reload after form submission
  
      
    setStudents([
      ...students, // spread old students objects and add with new object
      {
        name: name,
        age: age,
        fatherName: fatherName,
        rollNo: rollNo,
        dob: dob,
        address: address,
      },
    ]);


   
  };

  const clearInputs = ()=>{
    setName("")
    setFatherName("")
    setAge("")
    setAddress("")
    setDOB("")
    setRollNo("")
  }

  const delRow = (index)=>{
    let newStudents= students.filter((item,key)=> key != index) 
    setStudents(newStudents)
}






  return (
    <div className="App">
      <div className="student">
        <header id="heading_style">
          <h1>Add Student</h1><br />
        </header>
        <div className="student__add">
          <form onSubmit={submitForm}>
            <label>Name:</label>
            <input required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="enter name"
            />
            <label>Age:</label>
            <input required
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="enter Age"
            />
            
            <label>F.Name:</label>
            <input required
              type="text"
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
              placeholder="enter name"
            />
            <br />
            <br />
            <label>Roll No:</label>
            <input
              type="text"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              placeholder="enter roll no"
            />
            <label>DOB:</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDOB(e.target.value)}
              placeholder="enter DOB"
            />
            <label>Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="enter address"
            />
             <div className="buttons">
              <button className="submit" type="submit">Submit</button>
              <button className="clear" onClick={clearInputs}>Clear</button>
            </div>
          </form>
         

        </div>
        <div className="student_details">
              <table>

              {
                students.length>0?(
                  <tr className="table_heading">
                  <th>Name</th>
                  <th>Age</th>
                  <th>Father's Name</th>
                  <th>Roll No</th>
                  <th>DOB</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
                ):null
              }
               
                




              {students.map((item,index)=>(
                <tr className="table_data">
                  <th>{item.name}</th>
                  <th>{item.age}</th>
                  <th>{item.fatherName}</th>
                  <th>{item.rollNo}</th>
                  <th>{item.dob}</th>
                  <th>{item.address}</th>
                  <th><button onClick={()=>delRow(index)} style={{cursor:"pointer"}}>delete</button></th>
                </tr>
              ))
              }
              </table>
            
        </div>
      </div>
    </div>
    
  );
};
export default App;
