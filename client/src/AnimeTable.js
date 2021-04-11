import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './style.css';


const AnimeTable =()=>{
  const [items,setItems] = useState();
  useEffect(()=>{
  axios.get("https://api.jikan.moe/v3/top/anime/1/upcoming")
  .then(response=>{
    setItems(Object.entries(response.data.top))

  })
  },[])

const removeItem =()=>{
console.log("this.image_url")
}

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