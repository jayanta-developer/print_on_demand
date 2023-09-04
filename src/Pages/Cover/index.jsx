import React, { useState, useRef } from 'react';
import "./style.css";
import { Typography, Box } from '@mui/material';
import { FileDrop } from 'react-file-drop'

import coverPhoto from "../../Assets/images/CoverPhoto.png";
import fileDropIcon from "../../Assets/images/cloud_upload.svg"
import rightArrow from "../../Assets/images/arrow_forward.svg";
import CoverBook from "../../Assets/images/coverBook.png"

//Component 
import NavBar from '../NavBar';
import Footer from '../Footer';

export default function Cover() {
  const [coverOption, setCoverOption] = useState("Custom");
  const [tab, setTab] = useState(true)
  const fileInputRef = useRef(null);
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);


  const handleCheckbox1Change = () => {
    setCheckbox1(!checkbox1);
    setCheckbox2(false);
  };

  const handleCheckbox2Change = () => {
    setCheckbox2(!checkbox2);
    setCheckbox1(false);
  };


  const onFileInputChange = (event) => {
    const { files } = event.target;
  }

  const onTargetClick = () => {
    fileInputRef.current.click()
  }
  return (
    <>
      <NavBar />
      <Box className="coverContainer">
        <Box className="coverNav">
          <Box className="CnavItem">
            <Typography className={tab ? "navFont" : null} onClick={() => setTab(true)}>Cover</Typography>
          </Box>
          <Box className="CnavItem">
            <Typography className={tab ? null : "navFont"} onClick={() => setTab(false)}>First Page</Typography>
          </Box>
        </Box>

        <Box className="cover_Box">

          {/* CoverBox1 */}
          <Box sx={{ display: tab ? "flex" : "none" }} className="CoverBox1">
            <Box className="coverOption">
              <Box className="coverHeader">
                <Typography className='coverOptionHeaderText'>Cover Options</Typography>
                <Typography className='coverOptionSubText'>To pick your pattern, select a category and explore....</Typography>
              </Box>
              <Box className="coverOptionItems">
                <Box onClick={() => setCoverOption("Nature")} sx={{ background: coverOption === "Nature" ? "#e9e9e9" : "#fff" }} className="coverOptionItem">
                  <Typography>Nature</Typography>
                </Box>
                <Box onClick={() => setCoverOption("Animals")} sx={{ background: coverOption === "Animals" ? "#e9e9e9" : "#fff" }} className="coverOptionItem">
                  <Typography>Animals</Typography>
                </Box>
                <Box onClick={() => setCoverOption("Sports")} sx={{ background: coverOption === "Sports" ? "#e9e9e9" : "#fff" }} className="coverOptionItem">
                  <Typography>Sports</Typography>
                </Box>
                <Box onClick={() => setCoverOption("Floral")} sx={{ background: coverOption === "Floral" ? "#e9e9e9" : "#fff" }} className="coverOptionItem">
                  <Typography>Floral</Typography>
                </Box>
                <Box onClick={() => setCoverOption("Art")} sx={{ background: coverOption === "Art" ? "#e9e9e9" : "#fff" }} className="coverOptionItem">
                  <Typography>Art</Typography>
                </Box>
                <Box onClick={() => setCoverOption("Colors")} sx={{ background: coverOption === "Colors" ? "#e9e9e9" : "#fff" }} className="coverOptionItem">
                  <Typography>Colors</Typography>
                </Box>
                <Box onClick={() => setCoverOption("Favorites")} sx={{ background: coverOption === "Favorites" ? "#e9e9e9" : "#fff" }} className="coverOptionItem">
                  <Typography>Favorites</Typography>
                </Box>
                <Box onClick={() => setCoverOption("Patterns")} sx={{ background: coverOption === "Patterns" ? "#e9e9e9" : "#fff" }} className="coverOptionItem">
                  <Typography>Patterns</Typography>
                </Box>
                <Box onClick={() => setCoverOption("Custom")} sx={{ background: coverOption === "Custom" ? "#e9e9e9" : "#fff" }} className="coverOptionItem">
                  <Typography>Custom</Typography>
                </Box>
              </Box>


              <Box className="ChooseFileBox">

                <Box sx={{ display: coverOption === "Nature" ? "flex" : "none" }} className="NatureBox">
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                </Box>


                <Box sx={{ display: coverOption === "Animals" ? "flex" : "none" }} className="NatureBox">
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>

                </Box>


                <Box sx={{ display: coverOption === "Sports" ? "flex" : "none" }} className="NatureBox">
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                </Box>


                <Box sx={{ display: coverOption === "Floral" ? "flex" : "none" }} className="NatureBox">
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>


                </Box>


                <Box sx={{ display: coverOption === "Art" ? "flex" : "none" }} className="NatureBox">
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                </Box>


                <Box sx={{ display: coverOption === "Colors" ? "flex" : "none" }} className="NatureBox">
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                </Box>


                <Box sx={{ display: coverOption === "Favorites" ? "flex" : "none" }} className="NatureBox">
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                </Box>

                <Box sx={{ display: coverOption === "Patterns" ? "flex" : "none" }} className="NatureBox">
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                  <Box className="natureCoverItem">
                    <img src={CoverBook} />
                  </Box>
                </Box>


                <Box sx={{ display: coverOption === "Custom" ? "block" : "none" }} className="customBox">
                  <Box className="ChFHeaderBox">
                    <Typography className='chFHeaderText'>Custom Upload</Typography>
                    <Typography className='chFSubText'>Want to upload a corporate or group cover? Please email <span>support@becomingyourbest.com</span> to coordinate print dimensions and proofs.</Typography>
                  </Box>
                  <Box className="chooseCoverRadioBox">
                    <Box className="FontCoverBox chooseCoverCheckBox">
                      <input id="myCheckbox" type="checkBox"
                        checked={checkbox1}
                        onChange={handleCheckbox1Change}
                      />
                      <Typography ml={2}>upload a front cover</Typography>
                    </Box>
                    <Box className="BackCoverBox chooseCoverCheckBox">
                      <input id="myCheckbox" type="checkBox"
                        checked={checkbox2}
                        onChange={handleCheckbox2Change}
                      />
                      <Typography ml={2}>upload a BACK cover</Typography>
                    </Box>
                  </Box>
                  <Box onTargetClick={onTargetClick} className="fileDropBox">
                    <input
                      onChange={onFileInputChange}
                      ref={fileInputRef}
                      type="file"
                      className="hidden"
                    />

                    <img onClick={() => fileInputRef.current.click()} className='fileDropIcon' src={fileDropIcon} />
                    <Typography onClick={() => fileInputRef.current.click()} className='fileDropBText'>Drag & Drop</Typography>
                    <Typography onClick={() => fileInputRef.current.click()} className='fileDropSubText'>File that contains your events to start uploading...</Typography>

                  </Box>
                  <Box onClick={() => fileInputRef.current.click()} className="chooseFileBtn">
                    <Typography>Choose a file</Typography>
                  </Box>
                </Box>
              </Box>


            </Box>
            <Box className="chooseCover">
              <Box className="ChooseCoverHeader">
                <Typography mr={1} className='ChooseCoverHeaderText'>Step 1:</Typography>
                <Typography className='ChooseCoverSubText'>Choose Your Cover</Typography>
              </Box>

              <Box className="viewCoverBox">
                <img src={coverPhoto} />
              </Box>

            </Box>


          </Box>

          {/* CoverBox2 */}
          <Box sx={{ display: tab ? "none" : "block" }} className="CoverBox2"></Box>

          <Box className="priceHoverBox">
            <Box className="priceInfo">
              <Box className="priceInfo1">
                <Box className="priceInfo1Sub">
                  <Typography className='priceInfoText'>Page Count</Typography>
                  <Typography className='priceInfoBlackText'>60/242</Typography>
                </Box>
                <Box className="priceInfo1Sub">
                  <Typography className='priceInfoText'>Max End Date</Typography>
                  <Typography className='priceInfoBlackText'>31 Dec 23</Typography>
                </Box>
              </Box>

              <Box className="priceInfo2">
                <Typography className='priceInfoText'>Price</Typography>
                <Typography className='priceInfo2PriceText'>$70.00</Typography>

              </Box>
            </Box>
            <Box onClick={() => setTab(false)} className="price_nextBtn pointer">
              <Typography mr={0.5}>Next</Typography>
              <img src={rightArrow} />
            </Box>
          </Box>

        </Box>


      </Box >
      <Footer />
    </>
  )
}
