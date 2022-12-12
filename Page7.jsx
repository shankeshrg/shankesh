import React, { Component } from 'react'
import { Button, Card, Grid, Typography } from '@mui/material'
import {Link} from 'react-router-dom' 

export default class Page7 extends Component {
  render() {
    return (
      <div>
         <Grid style={{  height:'110vh',marginTop:'0px',backgroundSize:'absolute',backgroundColor:'rgba(255,255,255,1))'}}>
            <Card align="center" style={{width:'150px',height:'58px',marginTop:'100px',marginLeft:'320px',backgroundColor:'rgba(238, 5, 5, 1)'}}><br/>  Phone Packages
            </Card>
            <Card align="center" style={{width:'1180px',marginTop:'0px',marginLeft:'320px',height:'453px',backgroundColor:'rgba(217, 217, 217, 1)'}}>
                <Typography align='center' style={{fontFamily:'IM FELL French Canon SC',fontStyle:'normal',fontSize:'30px',lineHeight:'23px',color:'rgba(252, 16, 16, 1)'}}><br/>Most Preffered</Typography>
                <Typography align='center' style={{fontFamily:'IM FELL French Canon SC',fontStyle:'normal',fontSize:'30px',lineHeight:'23px',marginTop:'85px',marginLeft:'-750px'}}>Silver:<br/><br/>25 phone numbers<br/><br/>Rs 4890<br/><br/> Rs 4401<br/><br/>validity  50days </Typography>
                <Typography  align='center' style={{fontFamily:'IM FELL French Canon SC',fontStyle:'normal',fontSize:'30px',lineHeight:'23px',marginTop:'-205px',marginLeft:'30px'}}>Gold:<br/><br/>100 phone numbers<br/><br/>Rs 5490<br/><br/>Rs 4941<br/><br/>validty 100days</Typography>
                <Typography align='center' style={{fontFamily:'IM FELL French Canon SC',fontStyle:'normal',fontSize:'30px',lineHeight:'23px',marginTop:'-205px',marginLeft:'800px'}}>Platinum:<br/><br/>200 phone numbers<br/><br/>Rs 8490<br/><br/>Rs 7641<br/><br/>validty 200days</Typography>
                <Typography align='center' style={{marginTop:'-174px',marginLeft:'-380px'}}>|<br/>|<br/>|<br/>|<br/>|<br/>|<br/>|<br/>| </Typography>
                <Typography align='center' style={{marginTop:'-190px',marginLeft:'440px'}}>|<br/>|<br/>|<br/>|<br/>|<br/>|<br/>|<br/>| </Typography>
                <hr style={{backgroundColor:"rgba(0,0,0,1)",width:'100px',marginLeft:'165px',marginTop:'-128px',border:"1px solid #000000"}}></hr>
                <hr style={{backgroundColor:"rgba(0,0,0,1)",width:'100px',marginLeft:'555px',marginTop:'-8px',border:"1px solid #000000"}}></hr>
                <hr style={{backgroundColor:"rgba(0,0,0,1)",width:'100px',marginLeft:'939px',marginTop:'-8px',border:"1px solid #000000"}}></hr>
            </Card>
            <Card align="center" style={{ width:'709px',height:'380px',marginTop:'90px',marginLeft:'550px',backgroundColor:'rgba(217, 217, 217, 1)'}}>
            <Typography align='center' style={{fontFamily:'IM FELL French Canon SC',fontStyle:'normal',fontSize:'25px',lineHeight:'23px',marginTop:'50px'}}>Package Selected:100days<br/><br/><br/><br/>Order Value: Rs 5490<br/><br/>You Save: Rs 549<br/><br/>Amount Payable: Rs 4941</Typography>
            <Link to="/Page8" style={{textDecoration:'none'}}>
            <Button style={{ width:'161px',height:'53px',marginTop:'35px',backgroundColor:' rgba(252, 9, 9, 1)',color:'black'}}>Pay Now</Button>
            </Link>
            <hr style={{backgroundColor:"rgba(0,0,0,1)",width:'79px',marginLeft:'383px',marginTop:'-193px',border:"1px solid #000000"}}></hr>
            </Card>
         </Grid>
      </div>
    )
  }
}







