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
        marginTop:'40px',
        padding:'0px'


  },
  listItem:{
    height:'60px',
    display:'flex',
    background:'hsla(240, 100%, 80%, 0.2) ',
    width:'60%',
    marginTop:'14px',
    minWidth:'330px',
    borderRadius:'15px',
    borderTopLeftRadius:'60px',
    borderBottomLeftRadius:'60px', 
    cursor:'pointer',
    '&:hover': {
      background: "hsla(240, 100%, 90%, 0.2)",
   },
   
  },
  avatar:{
      height:'60px',
      width:'60px'
  },
  title:{
      fontSize:'1.3rem',
      color:'#e5e4e2',
      width:'90%',
      whiteSpace:'nowrap',
      overflow:'hidden',
      textOverflow:'ellipsis',
      marginLeft:'15px',
      marginRight:'15px'
  }
  ,ul:{
      padding:'0'
  },
  textField:{
      width:'35%',
      minWidth:'330px',
  },
  text:{
    marginBottom:'3rem',
    color:'#36454f',
    fontWeight:'bold'
    
  }
  
}));






export default function SearchBar() {
  const [value, setValue] = useState("");
  const [result,setResult]= useState(false);
  const [anime,setAnime]=useState(false);
  const [state,setState]=useState(false);

const pickAnime=(e,animeInfo)=>{
  setAnime({...animeInfo});
  setState(true)
  setResult(e.target.firstChild.data);
}
  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
    handleSearch(value);
    setResult(false)
    setAnime(false)
    setState(false)



  };
  const handleSearch = useCallback(
    debounce((value) => {
      if(value.length >= 3){

        axios.get(`https://api.jikan.moe/v4/anime?sfw&q=${value}`)
        .then(res =>{
          setResult(Object.entries(res.data.data))
          console.log(res)
        } )
        .catch(err => console.error(err));


      }

    }, 500),
    []
  );
  
  const classes = useStyles();



  return (
    <Container align='center' className={classes.suggestionContainer}>
    <Typography className={classes.text} variant='h3'>Find Anime</Typography>

      <div>
       <TextField  className={classes.textField}??id="filled-basic" onChange={(e)=>handleChange(e)} label="Type Here" variant="filled" />

        </div>
      <div>


   <ul className={classes.ul}>{
   Array.isArray(result)&&result.slice([0], [10]).map((item)=>{          
        const {mal_id,title,images,url,synopsis} = item[1];  
        const animeImage = images.jpg.image_url  
        return(
        <li 
        onClick={(e)=>pickAnime(e,{mal_id,title,animeImage,url,synopsis})}
        key={mal_id}
        className={classes.listItem}
        >
            <Avatar className={classes.avatar} src={animeImage}>

            </Avatar>
          <Typography className={classes.title}>{title}</Typography>

          </li>)
      })}</ul>
{state &&
<AnimeCard info={anime}/>}
   </div> 


         

           </Container>);           

}
