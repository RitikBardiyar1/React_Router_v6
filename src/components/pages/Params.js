import { useParams, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom"


const Params = () => {
  const { category } = useParams();
  const location = useLocation();
  console.log(location)

  return (
    <>
      <br></br>
      <hr></hr>
      <h1>This is the contact details of - {category} </h1>
      
      <NavLink to="/contact" > Back to Contact Page </NavLink>
    </>
  );
};

export default Params;



































// import { useParams, useSearchParams } from "react-router-dom";

// const Post = () => {
//   let {category, id} = useParams()
//   let [searchParams, setSearchParams] = useSearchParams()
//   console.log(searchParams);
//   console.log(searchParams.get('price'));
//   console.log(searchParams.get('sort'));
//   return (
//     <>
//       <h1>Post Page - {category}</h1>
//       <h1>Post Page - {id}</h1>
//     </>
//   )
// };

// export default Post;
