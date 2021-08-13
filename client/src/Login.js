import React ,{useState}from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import Switch from '@material-ui/core/Switch';

//login


      const useStyles = makeStyles((theme) => ({
        paper: {
          marginTop: theme.spacing(8),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: theme.spacing(3),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
      }));
      
      export default function SignUp() {
       const  [register, setRegister] = useState(true)
        const classes = useStyles();
        const handleSubmit =(e)=>{
            e.preventDefault();
            if(!register){
                //login
                axios({
                    method:'post',
                    url:"google.com/",
                    headers:{token:" "},//TODO add token?
                    data:{
                      email:document.getElementById("email").value,
                      password:document.getElementById("password").value
                    }
                  })
                  .then(res=>{console.log(res)}) //register complete ?
                  .catch(err=>console.error(err))
                  return;
            }
            //register
            axios({
                method:'post',
                url:"google.com/",
                headers:{token:" "},//TODO add token?
                data:{
                  username:document.getElementById("username").value,
                  email:document.getElementById("email").value,
                  password:document.getElementById("password").value
                }
              })
              .then(res=>{console.log(res)}) //register complete ?
              .catch(err=>console.error(err))

            
            
            }
            
        return (
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <form onSubmit={(e)=>handleSubmit(e)} className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                  </Grid>
                  <Grid item xs={12}>
                    {register&&<TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="username"
                      label="Username"
                      name="username"
                      autoComplete="username"
                    />}
                    
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {register&&
                    <FormControlLabel
                      control={<Checkbox value="allowExtraEmails" color="primary" />}
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />}
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  {register?"Sign Up":"Sign In"}
                </Button>  
                      <FormControlLabel
                    control={<Switch checked={register} onChange={() => setRegister(!register)} name="checkedA" />}
                    label="Sign Up"
                        />
                <Grid container justify="flex-end">
                </Grid>
              </form>
            </div>
            <Box mt={5}>
            </Box>
          </Container>
        );
      }