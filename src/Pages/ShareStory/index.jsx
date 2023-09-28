import React from 'react'
import { Box, Typography, CardMedia } from '@mui/material';
import "./style.css"


//image
import image1 from "../../Assets/images/ImageBox/0bd0783b9903a19eec1a98c808eb38e1.png"
import image2 from "../../Assets/images/ImageBox/1dd50ce63f3e6f2be185f47a60704b3e.png"
import image3 from "../../Assets/images/ImageBox/3907ba18b09dfebdeb1d97dee9eeabdc (1).png"
import image4 from "../../Assets/images/ImageBox/3907ba18b09dfebdeb1d97dee9eeabdc.png"
import image5 from "../../Assets/images/ImageBox/4b7be11decba86fac5c5dfabdf36a642.png"
import image6 from "../../Assets/images/ImageBox/58ea1c7912c2bf0c97e40f63245bd383.png"
import image7 from "../../Assets/images/ImageBox/5bf998ea82b148b2a74ae4f51c81aecc.png"

import image8 from "../../Assets/images/ImageBox/6bf73441fcfdc0dd1513e36b8316899b.png"
import image9 from "../../Assets/images/ImageBox/789f2aeef9164dca92536a9bb458cb8f (1).png"
import image10 from "../../Assets/images/ImageBox/789f2aeef9164dca92536a9bb458cb8f.png"
import image11 from "../../Assets/images/ImageBox/9576d1df056dabf2a74826b085ec2ce6.png"
import image12 from "../../Assets/images/ImageBox/98384dfa3c98f7465f1a310c33746646.png"
import image13 from "../../Assets/images/ImageBox/a48ca5696d2cfc414884227a3ad5c382.png"
import image14 from "../../Assets/images/ImageBox/ecb33987148b691f58f2f622add28c56.png"

import videodemo from "../../Assets/images/demo.mp4"
//component
import NavBar from '../NavBar';
import Footer from '../Footer';
import { ButtonPrimary } from "../../Components/Buttons"


export default function ShareStory() {
  return (
    <>
      <NavBar />
      <Box className="ShareContainer">
        <Box className="ShareHeaderTextBox">
          <Typography className='shareHeder'>Love it? Share it.</Typography>
          <Typography className='shareSubHeder'>
            We’d love to share what you created with our community to, in turn,
            inspire others to make something meaningful with their planner.
          </Typography>
          <Typography className='shareSubHeder'>
            Upload a photo or video of your creation and
            a brief story behind it through our Google Form.
          </Typography>
          <ButtonPrimary buttonText="TELL ON" width="233px" />
          <Typography className='shareSubHederTil'>
            By uploading you agree to the <span>terms.</span>
          </Typography>
        </Box>

        <Box className="ShareImageBox">

          <Box className="shareImageSubBox">
            <Box className="imageBox1">
              <img className='BoxImage' src={image13} />
            </Box>
            <Box className="imageBox1R bi1 ">
              <Box className="imageBox1RSub imageBox1RSub-a"><img className='BoxImage' src={image2} /></Box>
              <Box className="imageBox1RSub imageBox1RSub-b"><img className='BoxImage' src={image3} /></Box>
              <Box className="imageBox1RSub imageBox1RSub-c"><img className='BoxImage' src={image4} /></Box>
              <Box className="imageBox1RSub imageBox1RSub-d"><img className='BoxImage' src={image5} /></Box>
              <Box className="imageBox1RSub imageBox1RSub-e"><img className='BoxImage' src={image6} /></Box>
              <Box className="imageBox1RSub imageBox1RSub-f"><img className='BoxImage' src={image7} /></Box>
            </Box>
          </Box>

          <Box className="shareImageSubBox shareImageSubBox2">

            <Box className="imageBox1R bi2">
              <Box className="imageBox1RSub imageBox1RSub-a"><img className='BoxImage' src={image2} /></Box>
              <Box className="imageBox1RSub imageBox1RSub-b"><img className='BoxImage' src={image3} /></Box>
              <Box className="imageBox1RSub imageBox1RSub-c"><img className='BoxImage' src={image4} /></Box>
              <Box className="imageBox1RSub imageBox1RSub-d"><img className='BoxImage' src={image5} /></Box>
              <Box className="imageBox1RSub imageBox1RSub-e"><img className='BoxImage' src={image6} /></Box>
              <Box className="imageBox1RSub imageBox1RSub-f"><img className='BoxImage' src={image7} /></Box>
            </Box>

            <Box className="imageBox1 ">
              <img className='BoxImage' src={image1} />
            </Box>
          </Box>
          <Typography className='imageBoxLastText'>It’s all about your stories.</Typography>
        </Box>

        <Box className="ShareVideoBox">
          <Typography className='ShareVideoBoxHeader'>Our community’s creativity never ceases to amaze us.</Typography>
          <Typography className='ShareVideoBoxSubHeader'>Seeing what you print and hearing the story behind it truly makes our day. You often fill our inboxes with photos and videos of legacies lived, memories revisited, and equal amounts of belly laughs and happy cries. In capturing these moments — big and small, you remind us of one thing: these stories are worth re-telling.</Typography>

          <Box className="videoBox">
            <CardMedia
              className="video-player"
              component="iframe"
              src={videodemo}
              allow="autoPlay"
              loop
              controls
            />
          </Box>

        </Box>

        <Box className="ShareLastBottomBox">
          <Typography className='ShareLastBottomBoxText'>Your story matters.</Typography>
          <ButtonPrimary buttonText="KEEP CREATING" width="173px" />

        </Box>
      </Box>
      <Footer />
    </>
  )
}
