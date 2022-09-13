import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import footerlogo from '../images/footer.PNG'
import '../css/footer.css';
function Footer() {
  return (
    <div>
        <div className='left'>
                <div className='leftTop'style={{backgroundImage:`url(${footerlogo})`}}>
                  
                </div>
          </div>

      <div className='footer'>

          

            <div className='socialmedia'> 
                <InstagramIcon/>    <TwitterIcon/>  <FacebookIcon/>  <LinkedInIcon/>      
            </div>
            <p> &copy; 2022 oshanipizza.com
            </p>
              </div>
    
      <div className='bottomfooter'>

      <p> Copyrights &copy; 2021 All Rights Reserved EXRYGEN LIMITED
            </p>
      </div>

    </div>
  )
}

export default Footer