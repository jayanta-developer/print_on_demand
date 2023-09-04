import React, { useState, useRef } from 'react';
import "./style.css";
import { Typography, Box } from '@mui/material';
import { FileDrop } from 'react-file-drop'

import coverPhoto from "../../Assets/images/CoverPhoto.png";
import fileDropIcon from "../../Assets/images/cloud_upload.svg"
import rightArrow from "../../Assets/images/arrow_forward.svg";
import CoverBook from "../../Assets/images/coverBook.png";
import InsideCoverBinder from "../../Assets/images/insideCoverBinder.png"

//Component 
import NavBar from '../NavBar';
import Footer from '../Footer';

export default function Cover() {
  const [coverOption, setCoverOption] = useState("Custom");
  const [tab, setTab] = useState(false)
  const fileInputRef = useRef(null);
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");



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
          <Box sx={{ display: tab ? "none" : "block" }} className="CoverBox2">
            <Box className="ChooseCoverHeader">
              <Typography mr={1} className='ChooseCoverHeaderText'>Step 2:</Typography>
              <Typography className='ChooseCoverSubText'>Create your first page (fill in the below text fields)</Typography>
            </Box>

            <Box className="step2Container">

              <Box className="step2InputBox">
                <Box className="step2InputHeaderBox">
                  <Typography className='step2InputHeader'>Fill in the boxes to see what your first page will look like</Typography>
                  <Typography className='step2InputSubHeader'>This will be the first page of your planner and can include your name, email, phone number and a message.</Typography>
                </Box>

                <Box className="step2InputFieldBox">
                  <Box mb={2.3} className="st2InputBox">
                    <input type="text" className='st2FullName' placeholder='Full Name' onChange={(e) => setName(e.target.value)} />
                  </Box>
                  <Box className="st2SecondInputBox">
                    <Box sx={{ width: "48%" }} className="st2InputBox">
                      <input type="text" className='st2email' placeholder='Email (Optional)' onChange={(e) => setEmail(e.target.value)} />
                    </Box>
                    <Box mb={2} sx={{ width: "48%" }} className="st2InputBox">
                      <input type="text" className='st2Phone' placeholder='Phone (Optional)' onChange={(e) => setPhone(e.target.value)} />
                    </Box>
                  </Box>

                  <Box mb={2} className="st2InputBox">
                    <textarea type="text" className='st2Message' placeholder='Quote or Personal Message (Optional)' onChange={(e) => setMessage(e.target.value)} />
                  </Box>
                  <Box className="st2InputBtn">
                    <Typography>Save</Typography>
                  </Box>
                </Box>
              </Box>

              <Box className="st2InsideCoverBox">
                <img className='InsideCoverBinder' src={InsideCoverBinder} />
                <Box mr={0.5} className="st2InsidePage st2Page"></Box>
                <Box ml={0.5} className="st2InsidePage">
                  <Box className="st2InsideCoverTextBox">
                    <Typography mb={2} className='date'>2023 - 2024</Typography>
                    <Typography mb={1} className='nameText'>{name.toUpperCase() || "TOMMY SHALLENBERGER"}</Typography>
                    <Typography mb={1} className='contactText'>{email || "email@gmail.com"}</Typography>
                    <Typography mb={1} className='contactText'>{phone || "Phone Number"}</Typography>
                    <Typography mb={1} className='messageText'>{message || "Quote or Personal Message"}</Typography>
                  </Box>
                </Box>
              </Box>

            </Box>
          </Box>

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
