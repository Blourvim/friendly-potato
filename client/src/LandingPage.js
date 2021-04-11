import React,{useState,useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import debounce from 'lodash.debounce';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));






export default function BasicTextFields() {
  const [value, setValue] = useState("");
  const [result,setResult]= useState(false);
  const [malId,setMalId]= useState(undefined);

const pickAnime=(e,mal_id)=>{
  console.log(e.target.firstChild.data);
  console.log(mal_id);
  setMalId(mal_id);
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
        .then(res =>setResult(Object.entries(res.data.results)))
        .catch(err => console.error(err));
    }, 500),
    []
  );
  
  const classes = useStyles();


  const handleSubmit = (e)=>{
    const url="www.google.com"
    
    const suggestion ={
      targetUser:e.target[0].value,
      item:malId,
      by: document.cookie?.JWT || e.target[2].value||" ",
      msg:e.target[3].value
    }
   axios({method:'post',
    url:url,
    data:suggestion,
    headers:document.cookie.JWT})
    .then(res=>{
      if(res.status >= 200 || res.status >300) console.log("request sent")
    })
    .catch(err=>console.error(err))

    e.preventDefault()
    e.target[0].value =""
    e.target[1].value =""
    e.target[2].value =""
    e.target[3].value =""

  }

  return (
    <form key="form-for-stuff" onSubmit={(e)=>handleSubmit(e)} className={classes.root} noValidate autoComplete="off">
      <TextField id="filled-basic" label="Suggestion to" variant="filled" />
      <TextField id="filled-basic" onChange={(e)=>handleChange(e)} label="What to suggest" variant="filled" />
           <TextField id="filled-basic" label="suggested by" variant="filled" />
        <TextField
          id="outlined-multiline-static"
          label="Suggestion Text"
          multiline
          color='#b499ff'
          rows={4}
          variant="outlined"
        />
         <Button type='submit' variant="contained" color="primary">Suggest</Button>

         <ul>{Array.isArray(result)&&result.map((item)=>{          
        const {mal_id,title} = item[1];    
        return(
        <li 
        id={mal_id}
        onClick={(e)=>pickAnime(e,mal_id)}
        key={mal_id}>

          {title}

          </li>)
      })}</ul>
      <div>{!Array.isArray(result)&&result}</div>

           </form>
  );
}
