import { useState } from 'react';
import logo from './NewsAppLogo.png'
export default function Navbar(props) {
  const handleClick = async (type)=>{
      props.setMouseLoading('Loading');
      // const response = await fetch(`https://newsapi.org/v2/everything?q=${type}&from=2023-06-29&sortBy=publishedAt&apiKey=ed86ff79aa174d58be805127aec1fa59`);
      const response = await fetch(`https://gnews.io/api/v4/search?q=${type}&lang=en&country=us&max=10&apikey=4de8792af1945b0e9c488a8619b2d0fa`);
  
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