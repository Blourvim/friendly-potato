import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './style.css';


const AnimeTable =()=>{
  const [items,setItems] = useState();
const removeItem =()=>{
console.log("this.image_url")
}
  const fetchOnLoad = async()=>{
    const response = await axios.get("https://api.jikan.moe/v3/top/anime/1/upcoming")
    setItems(Object.entries(response.data.top))
  }
  fetchOnLoad()

return(    
  <>
  <div className="anime-block-wrapper">
{
  items&&
  items.map((item,)=>{
    const {mal_id,image_url,title} = item[1]
    return(
          

      <figure key={mal_id} className="anime-block">
        

      <img onClick={()=>removeItem()}className="anime-image"src={image_url} alt={title}/>
      <figcaption className="anime-title">{title}</figcaption>

      
      </figure>
      
      )
  })


  }

</div>
  </> )
}


export default AnimeTable;