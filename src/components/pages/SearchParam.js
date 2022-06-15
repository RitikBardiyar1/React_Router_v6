import { useSearchParams } from "react-router-dom"

const SearchParam= () => {
    const [searchParams, setSearchParams] = useSearchParams();
    // console.warn(searchParams.get('age'))
    // console.warn(searchParams.get('city'))
    const age = searchParams.get('age')
    const city = searchParams.get('city') 
    return(
        <>
        <h1> SearchParam Page </h1>
        <h3> Your age is : {age} </h3>
        <h3> Your city is : {city} </h3>

        <button onClick={() => setSearchParams({'age':22})}> Set Age in Query Params</button>
        </>
    )
}
export default SearchParam