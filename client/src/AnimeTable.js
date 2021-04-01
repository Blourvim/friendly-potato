import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';



const AnimeTable =()=>{
  const [items,setItems] = useState();

  const fetchData = async()=>{
    const response = await axios.get("https://api.jikan.moe/v3/top/anime/1/upcoming")
  
    setItems(Object.entries(response.data.top))

  }



return(    
  <>
  {items&&
  items.map((item,)=>{
    const {mal_id, image_url,title} = item[1]

    return(
      <div>{mal_id}
        {title}

      <img src={image_url} alt={title}/>
      
      </div>
      
      )
  })


  }
  <button onClick={fetchData}>Fetch Data</button>
"hello world"
  </> )
}


export default AnimeTable;