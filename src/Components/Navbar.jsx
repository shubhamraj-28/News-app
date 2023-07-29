import { useState } from 'react';
import logo from './NewsAppLogo.png'
export default function Navbar(props) {
  const handleClick = async (type)=>{
      props.setMouseLoading('Loading');
      const response = await fetch(`https://newsapi.org/v2/everything?q=${type}&from=2023-06-28&sortBy=publishedAt&apiKey=2a25298525ea4645b6c33a6b9f3bd4fe`);
  
      props.setMouseLoading('notLoading');
  
      const result = await response.json();
  
      const arr = result.articles;
      console.log(arr);
      props.setData(arr);
    }
  
  
  const [searchBar,setSerchBar] = useState('');
  function handleSearchChange(event){
    setSerchBar(event.target.value)
  }
  return (
    <div className="Nav">
        <img src={logo} alt="logoimage" className='logoPhoto'/>
        <div className="NavItemContainer">
            <div className="NavItem" onClick={()=>handleClick('sports')} >Sports</div>
            <div className="NavItem" onClick={()=>handleClick('Finance')}>Finance</div>
            <div className="NavItem" onClick={()=>handleClick('politics')}>Politics</div>
        </div>
        <div className='searchContainer'>
            <input 
            type="text" 
            placeholder='Type Something'
            onChange={handleSearchChange}
            />
            <button onClick={()=>handleClick(`${searchBar}`)}>Search</button>
        </div>
    </div>
  )
}