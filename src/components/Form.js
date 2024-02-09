import React, { useState } from "react";

function Form () {
  const [firstName, setFirstName] = useState("Bill")
  const [lastName, setLastName] = useState("Julien")
  const [submittedData, setSubmitted] = useState([])
  const [errors, setErrors] = useState([])

  function handleFirstName(e) {
    setFirstName(e.target.value)
  }

  function handleLastName(e) {
    setLastName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if(firstName){
      console.log(firstName)
      const formData= { firstName: firstName, lastName: lastName};
      const dataArray = [...submittedData, formData]
      setSubmitted(dataArray)
      setFirstName("");
      setLastName("");
      setErrors([])
    }
   else {
    setErrors(["You need to input a name!"])
    }
  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    )
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange= {handleFirstName} value={firstName}/>
        <input type="text" onChange= {handleLastName} value= {lastName}/>
        <button type="submit">Submit</button>
      </form>
      {errors.length  > 0 
        ? errors.map((error, index) => (
          <p key={index} style={{ color: "red"}}>
            {error}
          </p>
        ))
          : null}

      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  )

}

export default Form