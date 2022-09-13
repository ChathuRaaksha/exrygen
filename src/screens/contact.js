import React,{useState} from 'react'
import '../css/contact.css'
import img from '../images/software.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-bootstrap';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627
  },
  zoom: 11
};
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);
function contact() {

  return (
   
<div className='contactus'>
<div className='contact'>
      <div className='leftSide'>
        <h1>Contact Us</h1>
        <h4>We'd love to hear about your project</h4>
            <p>Whether you're driven by a need to modernise,to gain
              a competetive edge,or to overcome a frustrating operational blocker,
              we're adept at crafting bespoke solutions that deliver real business
              value that will help your business grow.
            </p>

      </div>

      <div className=' rightSide' >
                <div className=' images' style={{backgroundImage:`url(${img})`}}>

                </div>
      </div>

    



  </div>

  <div className='secondpage'>
      <div className='card'>
      <Box sx={{ minWidth: 275 ,width:'355px',height:'833px', backgroundColor:'#F0F7FF',marginLeft:'94px' }}>
      <h1>Tell Us About Your Project</h1>
      <p>We are also active in social media. You can find us on below.</p>
      <h5>Loreum Ipsum dummy (Sri Lanka) Dummy text , Colombo 03</h5>
      <h5>94 11 2xxxxxxx</h5>
    </Box>
      </div>
      <div className='form'>

           <Form id='login-form' method='POST' style={{marginBottom:'900px'}}>
            <div style={{flexDirection:'row',flex:'50%'}}>
            <Form.Group controlId="formBasicEmail" style={{marginTop:'-50px'}}>
                               <Form.Label style={{marginLeft:'-300px',marginRight:'800px',color:'black'}}>full name</Form.Label>
                                <Form.Control style={{borderRadius:'90px',width:'70%',marginLeft:'60px',}}  type="text"  name='fullname' 
  required />
                            </Form.Group>
      
                            <Form.Group controlId="formBasicEmail">
                               <Form.Label style={{marginLeft:'-300px',marginRight:'825px',color:'#fff'}}>email</Form.Label>
                                <Form.Control style={{borderRadius:'90px',width:'70%',marginLeft:'60px'}}  type="e-mail" name='email'
             required />
                            </Form.Group>

            </div>
                           
                          
                            <Form.Group controlId="formBasicEmail">
                               <Form.Label style={{marginLeft:'-300px',marginRight:'825px',color:'#fff'}}>email</Form.Label>
                                <Form.Control style={{borderRadius:'90px',width:'70%',marginLeft:'60px'}}  type="e-mail" name='email'
             required />
                            </Form.Group>


                            <Form.Group controlId="formBasicEmail">
                               <Form.Label style={{marginLeft:'-300px',marginRight:'825px',color:'#fff'}}>email</Form.Label>
                                <Form.Control style={{borderRadius:'90px',width:'70%',marginLeft:'60px'}}  type="e-mail" name='email'
             required />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                               <Form.Label style={{marginLeft:'-300px',marginRight:'825px',color:'#fff'}}>email</Form.Label>
                                <Form.Control style={{borderRadius:'90px',width:'70%',marginLeft:'60px'}}  type="e-mail" name='email'
             required />
                            </Form.Group>

                            <Button  style={{marginLeft:'150px',marginTop:'50px',color:'white',backgroundColor:'#18373C',borderInlineColor:'white',borderBlockColor:'white',width:'35%', background: "linear-gradient(#A95DE7, #727BF0)"}}>Submit</Button>
   
                            </Form>

      </div>

    </div>
    <div className='thirdpage'>
    <div style={{ height: '100vh', width: '100%' }}>
   
    </div>
    </div>
</div>
  )
}

export default contact