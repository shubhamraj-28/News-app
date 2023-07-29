// import React,{useState} from 'react'


export default function Main(props) {
    

  return (
    <div className="mainElement" >

<img src={props.urlToImage} alt=""  />
<div className="newsTitle">{props.title}</div>
<div className="textContent">
        <br/>
        {props.author}
        <br/>
       <>{props.description}</>
      <a href={props.url}>Read More</a> 
      </div>

    </div>
  )
}