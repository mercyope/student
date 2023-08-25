

import { Container } from "@mui/material";
import { useState, useEffect} from "react";
const api ="https://restcountries.com/v3.1/all";
const Language = () => {
    const [data, setData] = useState([]);

    // const [value, setValue] = useState('ssfgs') //for value
    const [search, setSearch] = useState([]);
    const [onedata, setOneData] = useState([])
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    const fetchsecondData = async () => {
        const response = await fetch(api)
        const data = await response.json();
        setData (data)
        // console.log (data.products)
    }
    

    const fetchOneData = async (currencyName) => {
        const response = await fetch(`https://restcountries.com/v3.1/lang/${currencyName}`)
        const data = await response.json();
        setOneData(data)
        console.log(data)
    }
    const searchButton = () => {
        fetchOneData(search)
    }

    const fetchdata = async () => {
        const response = await fetch(api)
        const data = await response.json()
        setData(data) //updated the array
        console.log( data);

    }

    
    // useEffect(()=>{
    // }) //Do not use this 
    // useEffect(()=>{
    //      fetchsecondData()
    // }, [])// will only run once 
    // // useEffect(()=>{
        
    // }, [value])// runs if value state is changed
    return(
        <div>
            <div className="">
                <div>
                    <h3> {search} </h3>
                    <input className="form-control" onChange={handleSearch} value= {search} />
                    <button onClick={searchButton} className="btn btn-dark p-3 fw-bold">find</button>
                </div>
            </div>
            
           <div style={{ marginTop: "50px", marginBottom: "100px" }}>
                <DatasOne onedata = {onedata}/>
           </div>
            

        </div>
    )
} 


function DatasOne({onedata}){
    return (
        
      <Container>

         {onedata.map((item, index) => {
            return (
                <div key={index}>
                    <h1 style={{ fontSize: "70px" }}>{item.name.common}</h1>
                    <img src={item.flags.png} />
                    <h2>{item.name.official}</h2>
                    <h1>{item.region}</h1>
                    <p>{item.population}</p>
                    <p>{item.area}</p>
                </div>
            )
         })}
                   
  
      </Container>
    )
  }










export default Language;