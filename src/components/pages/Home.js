import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate();
 
  return (
    <>
    <h1>
    Home Page
    </h1>
    <button onClick={() => navigate('/about')}> Navigate to About Page </button>
    <button onClick={() => navigate('/contact')}> Navigate to Contact Page </button>
    </>

  )
}

export default Home