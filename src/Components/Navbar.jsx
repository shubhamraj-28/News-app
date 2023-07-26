
import { useState } from 'react';
import logo from './logo1.jpg'
export default function Navbar(props) {
  const handleClick = async (type)=>{
      props.setMouseLoading(true);
      const response = await fetch(`https://newsapi.org/v2/everything?q=${type}&from=2023-06-26&sortBy=publishedAt&apiKey=323a395a388f4befbd3a91b17a54d1c0`);
  
      props.setMouseLoading(false);
  
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
        <div className="a">
            <div onClick={()=>handleClick('sports')} >Sports</div>
            <div onClick={()=>handleClick('Finance')}>Finance</div>
            <div onClick={()=>handleClick('politics')}>Politics</div>
        </div>
        <input 
        type="text" 
        placeholder='Type Something'
        onChange={handleSearchChange}
        />
        <button onClick={()=>handleClick(`${searchBar}`)}>Search</button>
    </div>
  )
}

