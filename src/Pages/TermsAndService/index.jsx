import React from 'react';
import "./style.css"
import { Box, Typography } from '@mui/material';

//Component
import NavBar from '../NavBar';
import Footer from "../Footer"

export default function TermsAndService() {
  return (
    <>
      <NavBar />
      <Box className="termsContainer">
        <Typography mb={10} className='termHeader'>Welcome to Fortune Flick!</Typography>
        <Typography className='termNText'>Thank you for choosing Fortune Flick, your gateway to exciting giveaway experiences. By using our service, you agree to the following terms and conditions:</Typography>

        <Typography className='termSubHeader'>Service Overview</Typography>
        <Typography className='termNText'>Fortune Flick empowers you to create and manage captivating social media contests with ease.</Typography>

        <Typography className='termSubHeader'>Eligibility</Typography>
        <Typography className='termNText'>To use our service, you must be at least 18 years old and comply with all applicable laws. If you're representing an entity, you confirm you have the authority to bind it.</Typography>

        <Typography className='termSubHeader'>Accounts and Registration</Typography>
        <Typography className='termNText'>Registering requires accurate information. Safeguard your account and notify us if security is compromised.</Typography>



        <Typography className='termSubHeader'>Payment Terms</Typography>
        <Typography className='termNText'>Enjoy premium features by paying the specified fees. We reserve the right to adjust pricing without prior notice.
        </Typography>



        <Typography className='termSubHeader'>Permissions and Restrictions
        </Typography>
        <Typography className='termNText'>We grant you limited access to the service for personal use. Don't reproduce, modify, or interfere with it.
        </Typography>


        <Typography className='termSubHeader'>Ownership and Proprietary Rights
        </Typography>
        <Typography className='termNText'>Our service and materials are protected by intellectual property laws. Respect our ownership.
        </Typography>



        <Typography className='termSubHeader'>Third-Party Terms
        </Typography>
        <Typography className='termNText'>You may link third-party accounts, but understand they aren't under our control.
        </Typography>




        <Typography className='termSubHeader'>User Content
        </Typography>
        <Typography className='termNText'>You're responsible for your content. Don't post harmful or objectionable material.
        </Typography>



        <Typography className='termSubHeader'>Prohibited Conduct
        </Typography>
        <Typography className='termNText'>Don't use our service for illegal purposes or infringe on others' rights.
        </Typography>

        <Typography className='termSubHeader'>Modification of these Terms
        </Typography>
        <Typography className='termNText'>We can update these terms, and your continued use signifies acceptance.
        </Typography>

        <Typography className='termSubHeader'>Term, Termination, and Modification
        </Typography>
        <Typography className='termNText'>We can terminate your access, and you can cancel your account. Some obligations survive termination.
        </Typography>

        <Typography className='termSubHeader'>Indemnity
        </Typography>
        <Typography className='termNText'>You're responsible for your actions on our service.
        </Typography>

        <Typography className='termSubHeader'>Disclaimers; No Warranties
        </Typography>
        <Typography className='termNText'>We provide the service "as is." We don't guarantee uninterrupted, error-free use.
        </Typography>

        <Typography className='termSubHeader'>Limitation of Liability
        </Typography>
        <Typography className='termNText'>Our liability is limited as described in these terms.
        </Typography>

        <Typography className='termSubHeader'>General Terms
        </Typography>
        <Typography className='termNText'>These terms, along with our Privacy Policy, constitute the agreement between us.
        </Typography>


        <Typography className='termSubHeader margin-bottom'>
          Consent to Electronic Communications: <span className='termNText'> By using Fortune Flick, you agree to receive electronic communications from us.</span>
        </Typography>
        <Typography className='termSubHeader margin-bottom'>
          Contact Information: <span className='termNText'>Reach us at support@fortuneflick.com for any questions or assistance.</span>
        </Typography>

        <span className='termNText'>Thank you for being a part of <span className='boldSpan'> Fortune Flick! </span> Enjoy your journey of creating exciting social media contests.</span>







      </Box>
      <Footer />
    </>
  )
}
