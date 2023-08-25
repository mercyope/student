import { useState } from "react"
// import {AiOutlineClose} from "react-icon/ai"


function Counter() {
  
        const [counter, setCounter] = useState(0);
 const [openTab, setOpenTab] = useState(true)
        const upward = () => {  
        // setCounter(counter +1)
        setCounter(prev => prev +1)
    }

    const downward = () => {  
        // setCounter(counter -1)
        setCounter(prev => prev -1)
    }

    const resetCounter = () => {
        setOpenTab(prev =>!prev)
    }

    const tabs = () => {
        setOpenTab(prev =>!prev)
    }

    const reset = () => {  
        setCounter(0)
    }


    return (
        <div>
            <div style={{float: 'right'}}>
                {/* <AiOutlineClose onClick={tabs}/> */}
                <button onClick={tabs}>X</button>
            </div>
        <div>
            <div className="d-flex">
                <h3>{counter}</h3>
                </div>

            </div>
            <button className="btn btn-info" onClick={upward}>Plus</button>
            <button className="btn btn-dark" onClick={downward}>Minus</button>
            <button className="btn btn-danger" onClick={reset}>Reset</button>
        </div>
    )
}


export default Counter;