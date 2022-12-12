import React, { Component } from 'react'
import { Grid,Card, Typography, TextField,Button } from '@mui/material'
import { fontWeight } from '@mui/system'
import { Link } from 'react-router-dom'

export default class Login extends Component {
  render() {
    return (
      <div>
        <Grid style={ {backgroundImage:"url('./Untitled design (1).png')" ,
         height:'110vh',
         marginTop:'-50px',
         backgroundSize:'absolute',
         backgroundRepeat:"no-repeat"}}>
            <br/>
          <div  style={{marginTop:"0px",marginBottom:"10px",marginLeft:"150px",fontSize:"60px",fontFamily:"Marcellus",fontWeight:"400" }}>
             <h6 >Classic<br/>Matrimony</h6>
            </div>
            <br/>
        <div align="center">
            <Card align="center" elevation={20} style={ {padding:"25px",marginLeft:"900px",width:'423px',marginTop:"-180px",borderRadius:'20px',backgroundColor:'rgba(217,217,217,0.8)'}}> 
            <Typography style={ {fontFamily:'IM FELL French Canon SC',fontStyle:"normal",fontSize:"40px" }}><b>Login</b></Typography>
            <br/>
            <TextField  fullWidth label="Email" type="text" placeholder='Email' style={{backgroundColor:'rgba(255,248,255,1',width:'307px',borderRadius:'10px'}}></TextField>
            <br/><br/>
            <TextField fullWidth label="Password" type="password" placeholder='Password' style={{backgroundColor:'rgba(255,248,255,1)',width:'307px',borderRadius:'10px'}}></TextField>
            <br/><br/>
            <Link to="/Page3" style={{textDecoration:'none'}}>
            <Button align="center" variant='contained' style={{ color:"black",backgroundColor:"rgba(255,248,255,1)"}}>Sign in</Button>
            </Link>
            <br/><br/>
            <hr style={{backgroundColor:"rgba(0,0,0,1)",width:'314px',border:"1px solid #000000"}}></hr>
            <br/>
            <Typography style={{fontFamily:"Inika",fontStyle:"normal",fontSize:"20px",color:"rgba(112,104,104,1)"}}>Don't have an account?</Typography>
            <Link to="/Page2" style={{textDecoration:"none"}}>
            <Typography style={{fontFamily:"Inika",fontStyle:"normal",fontSize:"20px",color:"rgba(112,104,104,1)"}}>Sign up</Typography>
            </Link>
            </Card>
            </div>
        </Grid>
        </div>
    )
  }
}
