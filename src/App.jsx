import React , { useState,useEffect}from 'react'
import Footer from './Components/Footer.jsx'
import Navbar from './Components/Navbar.jsx'
import Main from './Components/Main.jsx'

import './index.css'
export default function App(){
 const[data,setData]  = useState([])
 const[mouseLoading,setMouseLoading]=useState('notLoading');
 useEffect(() => {
  fetch("https://gnews.io/api/v4/search?q=headlines&lang=en&country=us&max=10&apikey=4de8792af1945b0e9c488a8619b2d0fa")
    .then(response => response.json())
    .then((newsData) => {
      setData(newsData.articles);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}, []);

                                
console.log(data.length);
 
 const cards = data.map(item=>{
  return (
      <Main 
     
          key={item.id}
          {...item}  
       />
  )
 })

    return(
     <div className={mouseLoading}>
       <Navbar 
       setData = {setData}
       setMouseLoading={setMouseLoading}
       />
        <div className='cardsContainer'>
        {cards}
        </div>
       <Footer/>
      </div>
    )

};