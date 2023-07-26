import React , { useState}from 'react'
import Footer from './Components/Footer.jsx'
import Navbar from './Components/Navbar.jsx'
import Main from './Components/Main.jsx'

import './index.css'
export default function App(){
 const[data,setData]  = useState([])
 const[mouseLoading,setMouseLoading]=useState(false);
 
                                
console.log(data.length);
 
//  console.log(data)
 const cards = data.map(item=>{
  return (
      <Main 
          key={item.id}
          {...item}
       />
  )
 })

    return(
     <>
       <Navbar 
       setData = {setData}
       setMouseLoading={setMouseLoading}
       />
        
        {cards}
       <Footer/>
      </>
    )

};