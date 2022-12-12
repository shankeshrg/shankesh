import { Button, Card, Grid, TextField, Typography,Autocomplete,InputAdornment } from '@mui/material'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Page3 extends Component {
  render() {
    return (
      <div>
         <Grid style={{ backgroundImage:"url('./Untitled design (3).png')",
         height:'110vh',
         marginTop:'0px',
         backgroundSize:'absolute',
         backgroundRepeat:"no-repeat"}}>
            <div align="center" style={{fontSize:"35px",marginTop:"0px",position:"absolute",marginLeft:"900px"}}>
                <h4>Family Profile</h4>
            </div>
            <br/>
            <div align="center">
                <Card align="center" elevation={20} style={ {width:'858px',top:'108px',marginTop:'100px',marginLeft:'-800px',borderRadius:'20px',backgroundColor:'rgba(217,217,217,0.8)'}}>
                    <Typography  style={{fontFamily:'IM FELL French Canon SC',fontStyle:"normal",fontSize:"30px",marginTop:'70px',marginLeft:'-450px'}}>Family Status</Typography>
                    <Autocomplete style={{marginTop:'-50px',marginLeft:'150px',width:'307px',borderRadius:'10px',backgroundColor:'rgba(255,248,255,1)'}}
              disablePortal
              options={familystatus}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} />}/>
                    <br/>
                    <Typography  style={{fontFamily:'IM FELL French Canon SC',fontStyle:"normal",fontSize:"30px",marginTop:'70px',marginLeft:'-450px'}}>Family Type</Typography>
                    <Autocomplete style={{marginTop:'-50px',marginLeft:'150px',width:'307px',borderRadius:'10px',backgroundColor:'rgba(255,248,255,1)'}}
              disablePortal
              options={familytype}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} />}/>
                    <br/>
                    <Typography  style={{fontFamily:'IM FELL French Canon SC',fontStyle:"normal",fontSize:"30px",marginTop:'70px',marginLeft:'-450px'}}>Family Value</Typography>
                    <TextField style={{marginTop:'-50px',marginLeft:'150px',width:'307px',borderRadius:'10px',backgroundColor:'rgba(255,248,255,1)'}}></TextField>
                    <br/>
                    <Typography  style={{fontFamily:'IM FELL French Canon SC',fontStyle:"normal",fontSize:"30px",marginTop:'70px',marginLeft:'-450px'}}>Parent's Mobile<br/>Number </Typography>
                    <TextField type="tel" style={{marginTop:'-90px',marginLeft:'150px',width:'307px',borderRadius:'10px',backgroundColor:'rgba(255,248,255,1)'}} InputProps={{startAdornment: <InputAdornment position="start">+91</InputAdornment>}}></TextField>
                    <br/>
                    <Typography  style={{fontFamily:'IM FELL French Canon SC',fontStyle:"normal",fontSize:"30px",marginTop:'45px',marginLeft:'-450px'}}>Parent's Monthly<br/>Income </Typography>
                    <TextField style={{marginTop:'-90px',marginLeft:'150px',width:'307px',borderRadius:'10px',backgroundColor:'rgba(255,248,255,1)'}}></TextField>
                    <br/>
                    <Link to="/Page4" style={{textDecoration:'none'}}>
                    <Button align="center" variant='contained'style={{ color:"black",backgroundColor:"rgba(255,248,255,1)",marginBottom:'50px',left:'70px',borderRadius:'10px'}}>Next</Button>
                    </Link>
                </Card>
            </div>

         </Grid>
      </div>
    )
  }
}
const familystatus=[
  {label:"Upper class",id:1},
  {label:"Upper middle class",id:2},
  {label:"Middle class",id:3},
  {label:"Lower middle class",id:4},
  {label:"Low class",id:5}
];
const familytype=[
  {label:"Nuclear",id:1},
  {label:"Joint",id:2},
];