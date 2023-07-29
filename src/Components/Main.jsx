// import React,{useState} from 'react'


export default function Main(props) {
    

  return (
    <div className="mainElement" >

<img src={props.image} alt=""  />
<div className="newsTitle">{props.title}</div>
<div className="textContent">
        <br/>
        {props.source.name}
        <br/>
       <>{props.description}</>
      <a href={props.url}>Read More</a> 
      </div>

    </div>
  )
}