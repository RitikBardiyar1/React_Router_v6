import { NavLink } from "react-router-dom"

const Contact = () => {
    return (
      <>
      <h1> Contact Page </h1>
      <li> <NavLink to="/params/Raj" state={{name: 'ritik', age: 22}} > Raj Details </NavLink> </li>
      <li> <NavLink to="/params/Rahul" > Rahul Details </NavLink> </li> 
      <li> <NavLink to="/params/Arjun" > Arjun Details </NavLink> </li> 
      <li> <NavLink to="/params/Ankit" > Ankit Details </NavLink> </li> 
      </>
    )
  }
  
  export default Contact