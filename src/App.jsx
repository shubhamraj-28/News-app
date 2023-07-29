import React , { useState,useEffect}from 'react'
import Footer from './Components/Footer.jsx'
import Navbar from './Components/Navbar.jsx'
import Main from './Components/Main.jsx'

import './index.css'
export default function App(){
 const[data,setData]  = useState([])
 const[mouseLoading,setMouseLoading]=useState('notLoading');
 useEffect(() => {
  fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ed86ff79aa174d58be805127aec1fa59")
    .then(response => response.json())
    .then((newsData) => {
      setData(newsData.articles);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}, []);

                                
console.log(data.length);
 
 const cards = data.filter((content)=>content.urlToImage!=null).map(item=>{
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