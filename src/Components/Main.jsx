// import React,{useState} from 'react'


export default function Main(props) {
    

    return (
      <div className="mainElement" >
        
 <img src={props.urlToImage} alt=""  />
          <div>{props.title}</div>
          <br/>
          {props.author}
         <>{props.description}</>
        <a href={props.url}>Read More</a> 
  
      </div>
    )
  }
  
