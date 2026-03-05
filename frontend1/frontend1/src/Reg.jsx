import axios from "axios";
import { useState } from "react";
function Reg() {
    const [data, setdata] = useState(
        {
            username: "",
            email: "",
            password: ""
        }
    )
    const changeName=(e) => {
        setdata({ ...data,[e.target.name]: e.target.value })
    }
  const regSubmit = async () =>
  {
   try
   {
    // const res= await axios.post("http://localhost:8080/reg"
     const res= await axios.post("http://localhost:8080/register",data)
    alert(res.data)
   }
   catch(xyz)
   {
         alert(xyz.response?.data||"Error")
   }

  }


  return(
    <>
    <h1>Register Here</h1>
    <input onChange={changeName} name="username" placeholder="Username" />
    <br />
    <input onChange={changeName} name="email" placeholder="Email" />
    <br />
    <input onChange={changeName} name="password" placeholder="Password" />
    <br />
    <button onClick={regSubmit}>Register</button>
    </>
  )
}
export default Reg;

