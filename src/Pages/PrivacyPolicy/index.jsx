import React from 'react'
import { Box, Typography } from '@mui/material';
import "./style.css"

//Component
import NavBar from '../NavBar';
import Footer from "../Footer"

export default function PrivacyPolicy() {
  return (
    <>
      <NavBar />
      <Box className="PrivacyPolicyContainer">
        <Typography mb={10} className='termHeader'>Privacy Policy!</Typography>
        <Typography className='termNText'>Welcome to Fortune Flick! This Privacy Policy is designed to inform you about how we handle your personal information when you use our website and related services. Your privacy is important to us, and we are committed to protecting your data. Please take a moment to read through this policy to understand how we collect, use, protect, and disclose your personal information.</Typography>


        <Typography className='termSubHeader'>1. Personal Information We May Collect</Typography>

        <Typography className='termNText'>We collect various types of personal information to provide you with the best possible experience while using Fortune Flick. This information includes:</Typography>
        <Typography className='termNText'>Registration: To access certain features, you may need to become a registered user, providing details such as your name, email address, phone number, username, password, city, and time zone.</Typography>
        <Typography className='termNText'>Customer Support: Information shared during communications with our customer support team.</Typography>
        <Typography className='termNText'>Making a Purchase: Payment-related data, including credit card information and billing address, when making payments through our service.</Typography>
        <Typography className='termNText'>Social Media: If you choose to connect your social media accounts, we may collect information such as usernames, account IDs, social handles, timezones, and email addresses.</Typography>
        <Typography className='termNText'>Other: Contact details provided in the context of customer, vendor, and partner relationships.</Typography>

        <Typography className='termSubHeader'>2. How We Use Your Personal Information</Typography>
        <Typography className='termNText'>We use your personal information for various purposes, including but not limited to:</Typography>
        <Typography className='termNText termNTextPrivacy'>Creating and managing your account</Typography>
        <Typography className='termNText termNTextPrivacy'>Providing our services and processing payments</Typography>
        <Typography className='termNText termNTextPrivacy'>Communicating with you for account verification and support</Typography>
        <Typography className='termNText termNTextPrivacy'>Personalizing your experience</Typography>
        <Typography className='termNText termNTextPrivacy'>Conducting analytics for service improvement        </Typography>
        <Typography className='termNText termNTextPrivacy'>Sending you marketing communications about our products and offers        </Typography>
        <Typography className='termNText termNTextPrivacy'>Ensuring the security of our service        </Typography>
        <Typography className='termNText termNTextPrivacy'>Managing our relationships with customers, service providers, and partners        </Typography>
        <Typography className='termNText termNTextPrivacy'>Enforcing agreements and complying with legal requirements</Typography>

        <Typography mt={5} className='termSubHeader'>3. User Rights Regarding Data</Typography>
        <Typography className='termNText'>At Fortune Flick, we respect your rights regarding your personal data. You have the right to:</Typography>
        <Typography className='termNText termNTextPrivacy'>Access your personal data</Typography>
        <Typography className='termNText termNTextPrivacy'>Request corrections to inaccurate data or its deletion</Typography>
        <Typography className='termNText termNTextPrivacy'>Ask for limitations on data processing</Typography>
        <Typography className='termNText termNTextPrivacy'>Object to the processing of your data</Typography>
        <Typography className='termNText termNTextPrivacy'>Request data portability</Typography>
        <Typography className='termNText'>You can also delete your Fortune Flick account at any time through your account settings. Your account information will be promptly deleted, and data will be permanently removed. If you encounter any issues, please contact our support team.</Typography>
        <Typography className='termNText'>We take your privacy seriously and promise to handle your personal information with care. If you have any questions or concerns about our privacy practices, please feel free to reach out to us.</Typography>
        <Typography className='termNText'>Thank you for choosing Fortune Flick! Your trust is valuable to us, and we're dedicated to providing you with an enjoyable and secure experience.</Typography>




      </Box>
      <Footer />
    </>
  )
}
