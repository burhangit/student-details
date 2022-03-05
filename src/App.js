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

  console.log(students);

  return (
    <div className="App">
      <div className="student">
        <header>
          <h1>Add Student</h1>
        </header>
        <div className="student__add">
          <form onSubmit={submitForm}>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="enter name"
            />
            <label>Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="enter Age"
            />
            <label>Father's Name:</label>
            <input
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
              <button className="submit">Submit</button>
              <button className="clear">Clear</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default App;
