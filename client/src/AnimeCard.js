import React from 'react';
import {Card,CardActionArea,Typography,CardMedia,CardContent} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({

    root:{
      marginTop:'2rem',
        width:'345px',
        borderRadius:'15px',
        paddingTop:'40px',
        marginBottom:'40px',
        backgroundColor:'#9bc8dc'
      },
    content:{
      paddingBottom:'30px',
      backgroundColor:'#9bc8dc',
    color:'#36454f',


    },
    media:{
      width:'auto',
      padingTop:'30px'
    }


})


const AnimeCard =(props)=>{

    const classes = useStyles()
console.log(props)
const {mal_id,animeImage,title,url,synopsis} = props.info
return(
    <Card className={classes.root}>
      <a href={url} rel='noreferrer'target='_blank'>
    <CardActionArea>
      <CardMedia
        component="img"
        alt={title}
        height="auto"
        image={animeImage}
        title={title}
        className={classes.media}
      />
    </CardActionArea>
    </a>
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h2">
        {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {synopsis}
        </Typography>
      </CardContent>

  </Card>
)

}

export default AnimeCard