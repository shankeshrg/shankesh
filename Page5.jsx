import React ,{Component} from 'react'
import { Grid,Card,Typography,TextField,Button } from '@mui/material'
import {Link} from 'react-router-dom' 

export default class Page extends Component{
    render() {
        return(
            <div>
                <Grid style={{  height:'110vh',marginTop:'0px',backgroundSize:'absolute',backgroundColor:'rgba(159, 174, 167, 1)'
                }}>
                    <br />
                    <div>

                        <Card  style={{marginLeft:'300px',width:'1275px',marginTop:'250px',borderRadius:"50px",top:'249px',height:'539px',backgroundColor:'rgba(217, 217, 217, 1)'}}>
                               <img src="./mapla.jpg" alt="" style={{borderRadius:'50px',marginLeft:'50px',marginTop:'50px',width:'286px',height:'440px'}}/>
                             <Card style={{width:'683px',height:'403px',marginTop:'-425px',marginLeft:'470px',backgroundColor:'rgba(184,194,221,1)',borderRadius:'50px'}}>
                                <Typography style={{fontSize:'24px',marginLeft:'50px',marginTop:'50px'}}>Name:Reegan</Typography><br />
                                <Typography style={{fontSize:'24px',marginLeft:'50px',}}>Age:28</Typography><br />
                                <Typography style={{fontSize:'24px',marginLeft:'50px',}}>Occupation:Business</Typography><br />
                                <Typography style={{fontSize:'24px',marginLeft:'50px'}}>Income:1L</Typography><br />
                                <Typography style={{fontSize:'24px',marginLeft:'50px'}}>Country:India</Typography><br />
                                <Typography style={{fontSize:'24px',marginLeft:'50px'}}>PH no:+9193457*****</Typography>
                                <Link to="/Page7" style={{textDecoration:'none'}}>
                                <Button align='center' variant='contained' style={{color:'black',backgroundColor:'rgba(10,142,23,1)',marginLeft:'350px',marginTop:'-100px',width:'305px',height:'100px',borderRadius:'50px'}}>For Contact:<br/>click here</Button>
                                </Link>
                             </Card>
                        </Card>
                    </div>
                </Grid>
            </div>
        )
    }
}