import React,{useState,useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import debounce from 'lodash.debounce';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import AnimeCard from './AnimeCard';
const useStyles = makeStyles((theme) => ({
  
  suggestionContainer:{
        marginTop:'100px',
        padding:'0px'


  },
  listItem:{
    height:'60px',
    display:'flex',
    marginTop:'15px',
    background:'hsla(240, 100%, 50%, 0.1) ',
    width:'60%',
    minWidth:'330px',
    borderRadius:'15px',
    borderTopLeftRadius:'60px',
    borderBottomLeftRadius:'60px', 
    whiteSpace:'nowrap',
    overflow:'hidden',
    textOverflow:'ellipsis'
  },
  avatar:{
      height:'60px',
      width:'60px'
  },
  title:{
      marginTop:'14px',
      marginLeft:'30px',
      fontSize:'1.3rem',
      color:'#e5e4e2'
  }
  ,ul:{
      padding:'0'
  },
  textField:{
      width:'35%',
      minWidth:'330px'
  }
  
}));






export default function SearchBar() {
  const [value, setValue] = useState("");
  const [result,setResult]= useState(false);
  const [malId,setMalId]= useState(undefined);
  const [anime,setAnime]=useState(false);

const pickAnime=(e,animeInfo)=>{
  console.log(e.target.firstChild.data);
  setAnime({...animeInfo})
  setResult(e.target.firstChild.data);
  e.target.value ="hello"
}
  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
    handleSearch(value);

  };
  const handleSearch = useCallback(
    debounce((value) => {
      axios.get(`https://api.jikan.moe/v3/search/anime?q=${value}`)
        .then(res =>{setResult(Object.entries(res.data.results))
            console.log(res)
        
        } )
        .catch(err => console.error(err));
    }, 500),
    []
  );
  
  const classes = useStyles();



  return (
    <Container align='center' className={classes.suggestionContainer}>
      <div>
       <TextField className={classes.textField} id="filled-basic" onChange={(e)=>handleChange(e)} label="What to suggest" variant="filled" />

        </div>
      <div>

   <ul className={classes.ul}>{Array.isArray(result)&&result.slice([0], [10]).map((item)=>{          
        const {mal_id,title,image_url,url,synopsis} = item[1];    
        return(
        <li 
        id={mal_id}
        onClick={(e)=>pickAnime(e,{mal_id,title,image_url,url,synopsis})}
        key={mal_id}
        className={classes.listItem}
        >
            <Avatar className={classes.avatar} src={image_url}>

            </Avatar>
          <Typography className={classes.title}>{title}</Typography>

          </li>)
      })}</ul>
        {!Array.isArray(result)&&result}
{anime &&
<AnimeCard info={anime}/>}
   </div> 


         

           </Container>);           

}
