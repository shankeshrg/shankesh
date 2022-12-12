import { Card, Grid, TextField, Typography,FormControlLabel,FormLabel,RadioGroup,FormControl,Radio,Autocomplete,InputAdornment, Button } from '@mui/material'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Page4 extends Component {
  render() {
    return (
      <div>
        <Grid style={ { backgroundImage:"url('./Untitled design (4).png')",
     height:'110vh',
     marginTop:'0px',
     backgroundSize:'absolute',
     backgroundRepeat:"no-repeat"}}>
        <br/>
        <Card align="center" elevation={20} style={{ width:'633px',marginTop:'35px',top:'100px',marginLeft:'100px',backgroundColor:'rgba(217,217,217,0.7)'}}>
            <Typography align='center' style={{fontSize:'30px',marginTop:'20px'}}>Personal Profile</Typography>
            <Typography style={{fontFamily:'IM FELL French Canon SC',fontStyle:"normal",fontSize:"30px",marginTop:'70px',marginLeft:'-450px'}}>Name</Typography>
            <TextField  style={{marginTop:'-50px',marginLeft:'150px',width:'307px',borderRadius:'10px',backgroundColor:'rgba(255,248,255,1)'}}></TextField>
            <br/><br/>
            <Typography style={{fontFamily:'IM FELL French Canon SC',fontStyle:"normal",fontSize:"30px",marginTop:'50px',marginLeft:'-420px'}}>Marital Status</Typography>
            <Autocomplete style={{marginTop:'-50px',marginLeft:'150px',width:'307px',borderRadius:'10px',backgroundColor:'rgba(255,248,255,1)'}}
              disablePortal
              options={maritalstatus}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} />}/>
            <br/><br/>
            <Typography style={{fontFamily:'IM FELL French Canon SC',fontStyle:"normal",fontSize:"30px",marginTop:'50px',marginLeft:'-420px'}}>Date Of Birth</Typography>
            <TextField  type="date" max="current" style={{marginTop:'-50px',marginLeft:'150px',width:'307px',borderRadius:'10px',backgroundColor:'rgba(255,248,255,1)'}}></TextField>
            <br/><br/>
            <Typography style={{fontFamily:'IM FELL French Canon SC',fontStyle:"normal",fontSize:"30px",marginTop:'50px',marginLeft:'-420px'}}>Country</Typography>
            <Autocomplete style={{marginTop:'-50px',marginLeft:'150px',width:'307px',borderRadius:'10px',backgroundColor:'rgba(255,248,255,1)'}}
              disablePortal
              options={country}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} />}/>
            <br/><br/>
            <Typography style={{fontFamily:'IM FELL French Canon SC',fontStyle:"normal",fontSize:"30px",marginTop:'50px',marginLeft:'-420px'}}>Mobile No</Typography>
            <TextField  style={{marginTop:'-50px',marginLeft:'150px',width:'307px',borderRadius:'10px',backgroundColor:'rgba(255,248,255,1)'}} InputProps={{startAdornment: <InputAdornment position="start">+91</InputAdornment>}}></TextField>
            <br/><br/>
            <Typography style={{fontFamily:'IM FELL French Canon SC',fontStyle:"normal",fontSize:"30px",marginTop:'50px',marginLeft:'-420px'}}>Address</Typography>
            <TextField  style={{marginTop:'-50px',marginLeft:'150px',width:'307px',borderRadius:'10px',backgroundColor:'rgba(255,248,255,1)'}} ></TextField>
        </Card>
        <Card  align="center" elevation={20} style={{ width:'633px',marginTop:'-899px',marginLeft:'1100px',backgroundColor:'rgba(217,217,217,0.7)'}}>
            <Typography align='center' style={{fontSize:'30px',marginTop:'20px'}}>Physical Character</Typography>
            <Typography style={{fontFamily:'IM FELL French Canon SC',fontStyle:"normal",fontSize:"30px",marginTop:'70px',marginLeft:'-450px'}}>Heigth/cms</Typography>
            <TextField type="number
            " style={{marginTop:'-50px',marginLeft:'150px',width:'307px',borderRadius:'10px',backgroundColor:'rgba(255,248,255,1)'}}></TextField>
            
            <Typography style={{fontFamily:'IM FELL French Canon SC',fontStyle:"normal",fontSize:"30px",marginTop:'70px',marginLeft:'-450px'}}>Weight/kgs</Typography>
            <TextField type="number" style={{marginTop:'-50px',marginLeft:'150px',width:'307px',borderRadius:'10px',backgroundColor:'rgba(255,248,255,1)'}}></TextField>
            
            <Typography style={{fontFamily:'IM FELL French Canon SC',fontStyle:"normal",fontSize:"30px",marginTop:'70px',marginLeft:'-450px'}}>Education</Typography>
            <TextField  style={{marginTop:'-50px',marginLeft:'150px',width:'307px',borderRadius:'10px',backgroundColor:'rgba(255,248,255,1)'}}></TextField>
            
            <Typography style={{fontFamily:'IM FELL French Canon SC',fontStyle:"normal",fontSize:"30px",marginTop:'70px',marginLeft:'-450px'}}>Occupation</Typography>
            <TextField  style={{marginTop:'-50px',marginLeft:'150px',width:'307px',borderRadius:'10px',backgroundColor:'rgba(255,248,255,1)'}}></TextField>
           
            <Typography style={{fontFamily:'IM FELL French Canon SC',fontStyle:"normal",fontSize:"30px",marginTop:'70px',marginLeft:'-400px'}}>Monthly Income</Typography>
            <TextField  style={{marginTop:'-50px',marginLeft:'150px',width:'307px',borderRadius:'10px',backgroundColor:'rgba(255,248,255,1)'}}></TextField>
            <br/>
            <Button align="center" variant='contained'style={{ color:"black",backgroundColor:"rgba(255,248,255,1)",marginTop:'30px',marginLeft:'130px'}}>Submit</Button>
            <Typography style={{fontFamily:'IM FELL French Canon SC',fontStyle:"normal",fontSize:"30px",marginTop:'50px',marginLeft:'-400px'}}>Gender</Typography>
            <FormControl>
              <RadioGroup
              style={{marginLeft:'30px',marginTop:'-40px'}}
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group">
              <Link to="/Page6" style={{textDecoration:'none'}}>
             <FormControlLabel value="male" control={<Radio />} label="Male" />
              </Link>
              <Link to="/Page5" style={{textDecoration:'none'}}>
             <FormControlLabel value="female" control={<Radio />} label="Female" />
              </Link>
            
             </RadioGroup>
            </FormControl>
        </Card>
     </Grid>
      </div>
    )
  }
}
const maritalstatus=[
 { label:"Single", id:1},
 {label:"Divorced", id:2},
 {label:"Widow",id:3},
];
const country=[
  {label:"India",id:1},
  {label:"Others",id:2},
];