import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Login = () => {
  const login =() => {
    localStorage.setItem('login', true)
    navigate('/')
  }

  const navigate = useNavigate();
    useEffect (() =>{
        const login = localStorage.getItem('login')
        if (login) {
            navigate('/')
        }
    })

  return (
    <>
    <div className="dekho">Login Page</div>
    <input type="text" /> <br/>
    <input type="text" /> <br/>
    <button onClick={login}> Login</button>
    </>
  )
}

export default Login