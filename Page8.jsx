import React, { Component } from 'react'
import { Card,Typography,TextField,Button, Grid } from '@mui/material'
import {Link} from 'react-router-dom' 

export default class Page8 extends Component {
  render() {
    return (
        <div>
            <Grid style={{  height:'110vh',marginTop:'0px',backgroundSize:'absolute',backgroundColor:'rgba(159, 174, 167, 1)'}}>

          
        <img src="./credit card.jpg" alt="" style={{width:'55px',height:'42px',top:'87px',left:'72px',marginTop:'200px',marginLeft:'70px' }}/>
        <Typography style={{fontFamily:'inter',fontSize:'34px',marginLeft:'150px',marginTop:'-50px'}}>CREDIT CARD</Typography> 
    
    <Card style={{width:'1350px',top:'739px',height:'1000px',left:'433px',marginTop:'-240px',marginLeft:'476px',backgroundColor:'rgba(184, 194, 221, 1)'}}>
         <Typography style={{fontFamily:'IM FELL French Canon SC',fontSize:'24px',marginLeft:'50px',marginTop:'100px'}}>PAY BY CREDIT CARD</Typography> 
         <img src="./total.png" alt="" style={{width:'340px',height:'60px',top:'87px',left:'672px',marginTop:'10px',marginLeft:'375px'}}/>
         <Typography style={{fontFamily:'IM FELL French Canon SC',fontSize:'24px',marginLeft:'55px',marginTop:'20px'}}>CARD NUMBER</Typography> 
         <TextField fullWidth label='Enter card number' placeholder='Enter card number' style={{width:'875px',top:'190px',left:'433px',marginLeft:'-380px',marginTop:'-190px',backgroundColor:'rgba(217, 217, 217, 1)'}}></TextField>
         <Typography style={{fontFamily:'IM FELL French Canon SC',fontSize:'24px',marginLeft:'55px',marginTop:'50px'}}>EXPIRATION DATE</Typography> 
         <TextField fullWidth label='Month' placeholder='Month' style={{width:'221px',top:'190px',left:'433px',marginLeft:'-380px',marginTop:'-190px',backgroundColor:'rgba(217, 217, 217, 1)'}}></TextField>
         <TextField fullWidth label='Year' placeholder='Year' style={{width:'176px',top:'329px',left:'736px',marginLeft:'-200px',marginTop:'-328px',backgroundColor:'rgba(217, 217, 217, 1)'}}></TextField>
         <Typography style={{fontFamily:'IM FELL French Canon SC',fontSize:'24px',marginLeft:'625px',marginTop:'-53px'}}>CVV/CVC</Typography> 
         <TextField fullWidth label='' placeholder='' style={{width:'317px',top:'328px',left:'970px',marginLeft:'-348px',marginTop:'-332px',backgroundColor:'rgba(217, 217, 217, 1)'}}></TextField>
         <Typography style={{fontFamily:'IM FELL French Canon SC',fontSize:'24px',marginLeft:'54px',marginTop:'50px'}}>CARD HOLDER NAME</Typography> 
         <TextField fullWidth label='Enter card holder name' placeholder='Enter card holder name' style={{width:'868px',top:'465px',left:'437px',marginLeft:'-383px',marginTop:'-462px',backgroundColor:'rgba(217, 217, 217, 1)'}}></TextField>
         <Link to="/Page9" style={{textDecoration:'none'}}>
         <Button style={{width:'415px',marginTop:'175px',marginLeft:'-200px',color:'black',fontFamily:'IM FELL French Canon SC',fontSize:'24px',backgroundColor:'rgba(250, 199, 18, 1)'}}>MAKE PAYMENT</Button>
         </Link>
        
         </Card>
        </Grid>
</div>
    )
  }
}