import React from 'react';
import {Card,CardActionArea,Typography,CardMedia,CardContent} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({

    root:{
        width:'345px',
        height:'400px'
    }


})


const AnimeCard =(props)=>{

    const classes = useStyles()
console.log(props)
const {mal_id,image_url,title,url,synopsis} = props.info
return(
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        component="img"
        alt={title}
        height="240"
        image={image_url}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {synopsis}
        </Typography>
      </CardContent>
    </CardActionArea>

  </Card>
)

}

export default AnimeCard