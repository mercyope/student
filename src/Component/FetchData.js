
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Container } from "@mui/material";
import { useState, useEffect} from "react"






const api = 'https://restcountries.com/v3.1/all';
// const products ='https://dummyjson.com/products'
const searchC = "https://restcountries.com/v3.1/name/"

const FetchData = () => {
    

    // const [value, setValue] = useState('ssfgs') //for value
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [oneData, setOneData] = useState([]);

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    const fetchsecondData = async () => {
        const response = await fetch(api)
        const data = await response.json()
        setData(data)
        console.log( data);
    }

    const fetchOneData = async (countryName) => {
        const response = await fetch(`${searchC}${countryName}`)
        const data = await response.json();
        setOneData (data)
        console.log (data)
    }
    const searchButton = () => {
        fetchOneData(search)
    }

    // const fetchdata = async () => {
    //     const response = await fetch(api)
    //     const data = await response.json()
    //     setData(data) //updated the array
    //     console.log( data);

    // }

    
    // useEffect(()=>{
    // }) //Do not use this 
    useEffect(()=>{
         fetchsecondData()
    }, [])// will only run once 
    // useEffect(()=>{
        
    // }, [value])// runs if value state is changed
    return(
        <div>
            <div className="">
                <div>
                    <h3 style={{color:'purple'}}> {search} </h3>
                    <input className="form-control" onChange={handleSearch} value= {search} />
                    <button onClick={searchButton} className="btn btn-dark p-3 fw-bold" style={{color:'white', backgroundColor:'green'}}>find</button>
                </div>
                  <Info info ={oneData}/>
           <div style={{ marginTop: "219px" }}>
           <List list = {data}/>
        </div>
        </div>
        </div>
    )
} 

// destructuring

//Assignment:  population , name, image, region, area, carside with a car icon, official name, subregion, startofweek
function Info({info}){
    return(
        <div>
            {info.map((item, index)=>{
                return(
                    <div key={index}>
                      <img alt="flag" src={item.flags.png}/>
                    </div>
                )
            })}
        </div>
    )


}
       


  

function List({list}){
    return (
        // for bootstrap
    //   <div className="container">
  
    //   </div>
      <Container style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', paddingTop:'20px', backgroundColor:'rgba(137, 196, 244, .80', borderRadius:'10px'}}>

         {list.map((item, index) =>{
                return (
                    <div key={index}>
                        
                        <h2 style= {{color:'black', fontFamily:'c=fantasy'}}>{item.name.common}</h2>
                        <h1 style= {{color:'black', fontFamily:'c=fantasy'}}>{item.name.official}</h1>
                        <img alt="flag" src={item.flags.png} style={{borderRadius:'10px', height:'200px', width:'300px'}}/>
                        <h2 style= {{color:'red'}}>{item.region}</h2>
                        <p style= {{color:'red'}}>{item.population}</p>
                        <p style= {{color:'red'}}>{item.area}</p>
                        <p style= {{color:'red'}}>{item.car.side}</p>
                        <p style= {{color:'red'}}>{item.subregion}</p>
                        <p style= {{color:'red'}}>{item.startOfWeek}</p>

                    </div>
                )
            })}
  
      </Container>
    )
  }

export default FetchData;
