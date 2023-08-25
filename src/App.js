import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FetchData from "./Component/FetchData"
import Capital from "./Component/Capital"
import Currency from "./Component/Currency"
import Language from "./Component/Language"

const router = createBrowserRouter ([
  {
    path: '/',
    element: <FetchData/>,
    errorElement: <h1>PAGE IS NOT AVAILABLE</h1>
  },
  {
    path: '/links',
    element: <div>THIS IS THE LINK PAGE</div>
  },

  {  
  path: '/currency',
  element: <Currency/>,
  errorElement: <h1>PAGE NOT FOUND</h1>
  },
{  
  path: '/Capital',
  element: <Capital/>,
  errorElement: <h1>PAGE NOT FOUND</h1>
},

{ 
  path: '/language',
  element: <Language/>,
  errorElement: <h1>PAGE NOT FOUND</h1>
}

  ])
  
  
  function App(){
    return(
      <div>
        <RouterProvider router={router}/>
      </div>
    )
  }
  
  
  
  export default App;
  