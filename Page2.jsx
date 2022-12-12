import { Button, Card, Grid, TextField, Typography,Autocomplete } from '@mui/material'
import { padding } from '@mui/system'
import React, { Component } from 'react'
import {Link} from 'react-router-dom' 

export default class Page4 extends Component {
  render() {
    return (
      <div>
        <Grid style={{ backgroundImage:"url('./Untitled design (2).png')",
         height:'110vh',
         marginTop:'0px',
         backgroundSize:'absolute',
         backgroundRepeat:"no-repeat" }}>
            <br/>
            <div align="center">
                <Card align="center" elevation={20} style={{padding:"25px",width:'1316px',marginTop:'180px',height:'550px',marginTop:'40px',backgroundColor:'rgba(217,217,217,1)',borderRadius:'40px' }}>
                <Typography style={{fontFamily:'IM FELL French Canon SC',fontStyle:"normal",fontSize:"40px"}}>Register for free</Typography>
                <br/>
                <TextField fullWidth label="Enter your name" placeholder='Enter your name' style={{width:'307px',borderRadius:'10px',marginLeft:'-700px',backgroundColor:'rgba(255,248,255,1)'}}></TextField>
                <br/><br/><br/>
                <Typography style={{fontFamily:'IM FELL French Canon SC',fontStyle:"normal",fontSize:"30px",marginLeft:'-690px'}}>Profile created for</Typography>
                <Autocomplete style={{width:'307px',borderRadius:'10px',marginLeft:'100px',marginTop:'-52px',backgroundColor:'rgba(255,248,255,1)'}}
              disablePortal
              options={profile}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} />}/>
                <br/><br/><br/>
                <Typography  style={{fontFamily:'IM FELL French Canon SC',fontStyle:"normal",fontSize:"30px",marginLeft:'-710px'}}>Mother Tongue</Typography>
                <Autocomplete style={{width:'307px',borderRadius:'10px',marginLeft:'100px',marginTop:'-52px',backgroundColor:'rgba(255,248,255,1)'}}
              disablePortal
              options={language}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} />}/>
                <br/><br/><br/>
                <Typography  style={{fontFamily:'IM FELL French Canon SC',fontStyle:"normal",fontSize:"30px",marginLeft:'-725px'}}>Religion</Typography>
                <Autocomplete style={{width:'307px',borderRadius:'10px',marginLeft:'100px',marginTop:'-52px',backgroundColor:'rgba(255,248,255,1)'}}
              disablePortal
              options={religion}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} />}/>
                <br/><br/>
                <Link to="/Page3" style={{textDecoration:'none'}}>
                <Button align="center" variant='contained'style={{ color:"black",backgroundColor:"rgba(255,248,255,1)",left:'40px',marginBottom:'40px'}}>Sign up</Button>
                </Link>
                </Card>
            </div>
         </Grid>
      </div>
    )
  }
}
const profile=[
  {label:"Myself",id:1},
  {label:"My son",id:2},
  {label:"My Daughter",id:3},
  {label:"My friend ",id:4},
];
const language=[
  {label:"Tamil",id:1},
  {label:"Telugu",id:2},
  {label:"Malayalam",id:3},
  {label:"Kannada",id:4},
];
const religion=[
  {label:"Hindu",id:1},
  {label:"Muslim",id:2},
  {label:"Christian",id:3},
  {label:"Others",id:4},
];
