import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Navbar from "./Navbar";
import Params from "./components/pages/Params";
import SearchParam from "./components/pages/SearchParam";
import RkNest from "./components/pages/RkNest";
import RkNest1 from "./components/pages/RkNest1";
import RkNest2 from "./components/pages/RkNest2";
import Login from "./components/pages/Login";
import Protected from "./components/pages/Protected";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Protected Component= {Home} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/params/:category" element={<Params />} />
          <Route path="/searchparam" element={<SearchParam/>} />
          <Route path="/rknest/" element={<RkNest/>} />
            <Route path="rknest1" element={<RkNest1/>} />
            <Route path="rknest2" element={<RkNest2/>} />
          <Route path="/login" element={<Login/>} />



          

          <Route path="*" element={<h1> Error 404 Page Not Found !!</h1>} />

          console.log("hello");



        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;










































// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
// import Home from "./components/pages/Home";
// import About from "./components/pages/About";
// import Contact from "./components/pages/Contact";
// import Post from "./components/pages/Post";
// import Dashboard from "./components/pages/Dashboard";
// import Login from "./components/pages/Login";
// import Logout from "./components/pages/Logout";
// import Navbar from "./Navbar";

// function App() {
//   let isLogged = true
//   let data = {
//     'st':'User not logged in'
//   }
//   return (
//    <>
//     <BrowserRouter>
//     <Navbar/>
//       <Routes>
//         <Route path="/" element={<Home />}  />
//         <Route path="/about" element={<About />}  />
//         <Route path="/contact" element={<Contact />}  />
//         <Route path="/post/:category" element={<Post />}  />
//         <Route path="/post/:category/:id" element={<Post />}  />
//         <Route path="/login" element={<Login />}/>
//         <Route path="/logout" element={<Logout />}/>
//         <Route path="/dashboard" element={isLogged ? <Dashboard /> : <Navigate to="/login" replace state={data} />}/>

//         <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
//       </Routes>
//     </BrowserRouter>
//    </>
//   );
// }

// export default App;
