import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul className="container">
        <li> <NavLink style= {({isActive}) => {return{ backgroundColor : isActive ? 'yellow':'' }}}
         to="/" > Home </NavLink> </li>
        <li> <NavLink style= {({isActive}) => {return{ backgroundColor : isActive ? 'yellow':'' }}} 
         to="/about" > About </NavLink> </li>
        <li> <NavLink style= {({isActive}) => {return{ backgroundColor : isActive ? 'yellow':'' }}}
         to="/contact" > Contact </NavLink> </li>
        <li> <NavLink style= {({isActive}) => {return{ backgroundColor : isActive ? 'yellow':'' }}}
         to="/searchparam" > SearchParam </NavLink> </li>
        <li> <NavLink style= {({isActive}) => {return{ backgroundColor : isActive ? 'yellow':'' }}}
         to="/rknest" > RkNest </NavLink> </li>
        <li> <NavLink style= {({isActive}) => {return{ backgroundColor : isActive ? 'yellow':'' }}} 
         to="/login" > Login </NavLink> </li>
      </ul>
    </>
  )
};

export default Navbar;