import { Grid, Typography } from '@mui/material'
import React, { Component } from 'react'

export default class Page9 extends Component {
  render() {
    return (
      <div>
        <Grid style={ {backgroundImage:"url('./Untitled design (5).png')" ,
         height:'113vh',
         backgroundSize:'absolute',
         backgroundRepeat:"no-repeat"}}>
            <br/>
            <div align="center">
              <img src="./Tick (1).png" style={{width:"80px",height:'83px',marginLeft:'1200px',marginTop:'750px'}} />
            </div>
            <br/>
            <div>
            <Typography align="center" style={{fontFamily:'IM FELL English SC',fontStyle:"normal",fontSize:"63px",marginTop:'-110px',marginLeft:'990px'}}>Paid<br/>Thank You</Typography>
            </div>
            <div>
                <Typography align="center" style={{fontSize:'24px',marginTop:'49px',marginLeft:'-1330px',color:'white'}}>For further deatils,contact us:+1 666 888 5656</Typography>
            </div>
            <div>

            </div>
        </Grid>
      </div>
    )
  }
}
