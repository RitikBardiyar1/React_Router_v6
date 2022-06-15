import { Link, Outlet } from "react-router-dom"

const RkNest = () => {
  return (
    <>
    <h1>Rk_Nest Page</h1>
    <Link to="/rknest1" > Rk_Nest1 </Link>
    <br/>
    <Link to="/rknest2" > Rk_Nest2 </Link>
    <Outlet/>

    </>
  )
}

export default RkNest