import React, { useState, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import "./style.css";

// icons
import UpArrow from "../../Assets/images/UpArrow.svg";
import DownArrow from "../../Assets/images/DownArrow.svg";
import fileDropIcon from "../../Assets/images/cloud_upload.svg"


//Components
import NavBar from '../NavBar';
import Footer from '../Footer';
import PriceBox from "../../Components/PriceBox"
import ButtonPrimary from '../../Components/Buttons';

export default function Dates() {
  const [startEndDrop, setStartEndDrop] = useState(true)
  const [presetsEventsDrop, setPresetsEventsDrop] = useState(false)
  const [uploadDrop, setUploadDrop] = useState(false)
  const fileInputRef = useRef(null);


  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const [startDayDrop, setStartDayDrop] = useState(false)
  const [startDayText, setStartDayText] = useState("")

  const [maxLengthDrop, setMaxLengthyDrop] = useState(false)
  const [maxLengthText, setMaxLengthText] = useState("")

  const handleStartDateChange = (date) => {
    setStartDate(date.$d)
  };
  const handleEndDateChange = (date) => {
    setEndDate(date.$d)
  };

  const onTargetClick = () => {
    fileInputRef.current.click()
  }

  const onFileInputChange = (event) => {
    const { files } = event.target;
  }


  return (
    <>
      <NavBar />
      <Box className="datesContainer">

        <Box className="datesSideMenu">
          {/* Start End Drop */}
          <Box sx={{ height: startEndDrop ? "auto" : "62px" }} mb={2.5} className="StartEndDrop datesDrop">
            <Box mb={2} onClick={() => {
              setStartEndDrop(!startEndDrop)
              setPresetsEventsDrop(false)
            }} className="StartEndDropHeader">
              <Typography className="dropBoxHeader" sx={{ color: startEndDrop ? "#1e1d1d" : "#8E8E8E" }}>Start and End Date</Typography>
              <img className="dropBoxNavigateArrow startNavigateArrow" src={startEndDrop ? UpArrow : DownArrow} />
            </Box>
            <Box className="DropInnerContainer">
              <Typography mb={2} className='dropBoxSubHeader'>
                Please choose a Monday or Sunday start for<br /> your monthly-view calendars.
              </Typography>

              <Box mb={2} onClick={() => setStartDayDrop(!startDayDrop)} className="innerDrop">
                <Typography className='innerDropText'>{startDayText || "Monday Start"}</Typography>
                <img className="dropBoxNavigateArrow" src={startDayDrop ? UpArrow : DownArrow} />
                <Box sx={{ height: startDayDrop ? "auto" : "0px" }} className="innerDropItemBox">
                  <Box onClick={(e) => setStartDayText(e.target.innerText)} className="innerDropItem">
                    <p>Monday Start</p>
                  </Box>
                  <Box onClick={(e) => setStartDayText(e.target.innerText)} className="innerDropItem">
                    <p>Tuesday Start</p>
                  </Box>
                  <Box onClick={(e) => setStartDayText(e.target.innerText)} className="innerDropItem">
                    <p>Wednesday Start</p>
                  </Box>
                  <Box onClick={(e) => setStartDayText(e.target.innerText)} className="innerDropItem">
                    <p>Thursday Start</p>
                  </Box>
                  <Box onClick={(e) => setStartDayText(e.target.innerText)} className="innerDropItem">
                    <p>Friday Start</p>
                  </Box>
                  <Box onClick={(e) => setStartDayText(e.target.innerText)} className="innerDropItem">
                    <p>Saturday Start</p>
                  </Box>
                  <Box onClick={(e) => setStartDayText(e.target.innerText)} className="innerDropItem">
                    <p>Sunday Start</p>
                  </Box>
                </Box>
              </Box>

              <Typography className='dropBoxHeader'>Choose the start date for your planner</Typography>
              <Typography mb={1} className='subText'>(please remember it will take up to 10 days to print and ship your planner)</Typography>
              <Box mb={2} className="datePickerBox">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker onChange={handleStartDateChange} sx={{ width: "100%" }} />
                </LocalizationProvider>
              </Box>

              <Typography mb={1.5} className='dropBoxHeader'>How far out do you want your planner to go?</Typography>

              <Box mb={2} onClick={() => setMaxLengthyDrop(!maxLengthDrop)} className="innerDrop">
                <Typography className='innerDropText'>{maxLengthText || "Max length"}</Typography>
                <img className="dropBoxNavigateArrow" src={maxLengthDrop ? UpArrow : DownArrow} />
                <Box sx={{ height: maxLengthDrop ? "auto" : "0px" }} className="innerDropItemBox">
                  <Box onClick={(e) => setMaxLengthText(e.target.innerText)} className="innerDropItem">
                    <p>Max length</p>
                  </Box>
                  <Box onClick={(e) => setMaxLengthText(e.target.innerText)} className="innerDropItem">
                    <p>Min length</p>
                  </Box>
                </Box>
              </Box>

              <Typography mb={1.5} className='dropBoxHeader'>Choose the End date for your planner </Typography>
              <Box className="datePickerBox">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker onChange={handleEndDateChange} sx={{ width: "100%" }} />
                </LocalizationProvider>
              </Box>
            </Box>
          </Box>

          {/* presets Events Drop */}
          <Box mb={2.5} sx={{ height: presetsEventsDrop ? "auto" : "62px" }} className="presetsDrop datesDrop">
            <Box mb={2} onClick={() => {
              setPresetsEventsDrop(!presetsEventsDrop)
              setStartEndDrop(false)
            }} className="StartEndDropHeader">
              <Typography className="dropBoxHeader" sx={{ color: presetsEventsDrop ? "#1e1d1d" : "#8E8E8E" }}>Presets Events</Typography>
              <img className="dropBoxNavigateArrow startNavigateArrow" src={presetsEventsDrop ? UpArrow : DownArrow} />
            </Box>
            <Box mt={0.5} className="DropInnerContainer">

              <Box mb={1.5} className="checkBoxContainer">
                <Box className="checkBoxItem">
                  <input type="checkbox" />
                  <Typography ml={1}>National Holidays</Typography>
                </Box>
                <Typography pl={4.6} className='checkBoxSubText'>Limit to 1 Selection</Typography>
                <Box ml={5} className="checkBoxItem">
                  <input type="checkbox" />
                  <Typography className='checkBoxSubText' ml={1}>US HOLIDAYS(0/32)</Typography>
                </Box>
                <Box ml={5} className="checkBoxItem">
                  <input type="checkbox" />
                  <Typography className='checkBoxSubText' ml={1}>CANADA HOLIDAYS(20/20)</Typography>
                </Box>
                <Box ml={5} className="checkBoxItem">
                  <input type="checkbox" />
                  <Typography className='checkBoxSubText' ml={1}>UK HOLIDAYS(0/15)</Typography>
                </Box>
                <Box ml={5} className="checkBoxItem">
                  <input type="checkbox" />
                  <Typography className='checkBoxSubText' ml={1}>AUSTRALIA HOLIDAYS(0/24)</Typography>
                </Box>
              </Box>

              <Box mb={1.5} className="checkBoxContainer">
                <Box className="checkBoxItem">
                  <input type="checkbox" />
                  <Typography ml={1}>Religious Holidays</Typography>
                </Box>
                <Box ml={5} className="checkBoxItem">
                  <input type="checkbox" />
                  <Typography className='checkBoxSubText' ml={1}>CHRISTIAN HOLIDAYS(15/15)</Typography>
                </Box>
                <Box ml={5} className="checkBoxItem">
                  <input type="checkbox" />
                  <Typography className='checkBoxSubText' ml={1}>HINDU HOLIDAYS(16/16)</Typography>
                </Box>
                <Box ml={5} className="checkBoxItem">
                  <input type="checkbox" />
                  <Typography className='checkBoxSubText' ml={1}>HINDU HOLIDAYS(16/16)</Typography>
                </Box>
                <Box ml={5} className="checkBoxItem">
                  <input type="checkbox" />
                  <Typography className='checkBoxSubText' ml={1}>MUSLIM/ISLAMIC HOLIDAYS(10/11)</Typography>
                </Box>
              </Box>
            </Box>
          </Box>


          {/*update Drop*/}

          <Box mb={2.5} sx={{ height: uploadDrop ? "auto" : "62px" }} className="updateDrop datesDrop">
            <Box mb={2} onClick={() => setUploadDrop(!uploadDrop)} className="StartEndDropHeader">
              <Typography className="dropBoxHeader" sx={{ color: uploadDrop ? "#1e1d1d" : "#8E8E8E" }}>Upload Events</Typography>
              <img className="dropBoxNavigateArrow startNavigateArrow" src={uploadDrop ? UpArrow : DownArrow} />
            </Box>
            <Box mb={2} className="uploadContainer">
              <Typography mb={3} className='uploadHeader'>Upload Events (Optional)</Typography>
              <Typography mb={3} className="uploadSubHeader">If you have special events (anniversaries, birthdays) in an online calendar, you can download those dates and upload them into your paper planner (here are three videos – google calendar, outlook calendar, apple calendar – that show  how to download and upload the file). If you don’t have these dates in an online calendar, or if you don’t want to deal with moving files, we recommend skipping this step for your first planner (and save it for the next one if you feel like they were missed).</Typography>
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
            </Box>
            <ButtonPrimary buttonText="Skip" />
            <ButtonPrimary buttonText="OR BROWSE COMPUTER TO UPLOAD FILE" />

          </Box>

        </Box>

        <Box className="datesCover">
          <Box className="ChooseCoverHeader step5CoverHeader">
            <Typography mr={1} className='ChooseCoverHeaderText step3Text'>{startEndDrop ? "Step 5:" : "Step 6:"}
              <span style={{ marginLeft: "5px" }} className='ChooseCoverSubText step3SpanText'>{startEndDrop ? "Choose Start and Finish Dates" : "Events"}</span>
            </Typography>
          </Box>


          {/* start end date component*/}
          <Box sx={{ display: startEndDrop ? "block" : "none" }} className="StartEndCoverBox">
            <Box className="StartEnd_Cover">
              <Box sx={{ width: "50%" }}>
                <Typography mb={1} className='startDateLabel'>Start Date</Typography>
                <Typography className='SubDate'>{startDate.toString().slice(4).slice(0, 12) || "July 20, 2023"}</Typography>
              </Box>
              <Box sx={{ width: "50%" }}>
                <Typography mb={1} className='FinishDateLabel'>Finish Dates</Typography>
                <Typography className='SubDate'>{endDate.toString().slice(4).slice(0, 12) || "July 20, 2023"}</Typography>
              </Box>
            </Box>
          </Box>

          {/* presets Events component */}
          <Box sx={{ display: presetsEventsDrop ? "flex" : "none" }} className="presetsDropBox">
            <Typography className='presetsEventsHeader'>CANADA HOLIDAYS</Typography>
            <Typography className='checkBoxSubText'>To remove any holidays from your planner, simply uncheck</Typography>
            <Box mt={2} className="presetsEventsBox">
              <Box>
                <Box className="checkBoxItem">
                  <input type="checkbox" />
                  <Typography className='checkBoxSubText' ml={1}>SELECT ALL</Typography>
                </Box>
                <Box className="checkBoxItem">
                  <input type="checkbox" />
                  <Typography className='checkBoxSubText' ml={1}>LABOUR DAY SEP 4,2023</Typography>
                </Box>
                <Box className="checkBoxItem">
                  <input type="checkbox" />
                  <Typography className='checkBoxSubText' ml={1}>NATIONAL DAY FOR TRUTH AND RECONCILIATION SEP 30, 2023</Typography>
                </Box>
                <Box className="checkBoxItem">
                  <input type="checkbox" />
                  <Typography className='checkBoxSubText' ml={1}>THANKSGIVING OCT 9, 2023</Typography>
                </Box>
                <Box className="checkBoxItem">
                  <input type="checkbox" />
                  <Typography className='checkBoxSubText' ml={1}>HALLOWEEN OCT 31, 2023</Typography>
                </Box>
                <Box className="checkBoxItem">
                  <input type="checkbox" />
                  <Typography className='checkBoxSubText' ml={1}>DAYLIGHT SAVING ENDS NOV 5, 2023</Typography>
                </Box>
                <Box className="checkBoxItem">
                  <input type="checkbox" />
                  <Typography className='checkBoxSubText' ml={1}>REMEMBERANCE DAY NOV 11, 2023</Typography>
                </Box>
                <Box className="checkBoxItem">
                  <input type="checkbox" />
                  <Typography className='checkBoxSubText' ml={1}>CHRISTMAS DAY DEC 25, 2023</Typography>
                </Box>
              </Box>
              <Box>
                <Box className="checkBoxItem">
                  <input type="checkbox" />
                  <Typography className='checkBoxSubText' ml={1}>LABOUR DAY SEP 4,2023</Typography>
                </Box>
                <Box className="checkBoxItem">
                  <input type="checkbox" />
                  <Typography className='checkBoxSubText' ml={1}>NATIONAL DAY FOR TRUTH AND RECONCILIATION, SEP 30, 2023</Typography>
                </Box>
                <Box className="checkBoxItem">
                  <input type="checkbox" />
                  <Typography className='checkBoxSubText' ml={1}>THANKSGIVING OCT 9, 2023</Typography>
                </Box>
                <Box className="checkBoxItem">
                  <input type="checkbox" />
                  <Typography className='checkBoxSubText' ml={1}>HALLOWEEN OCT 31, 2023</Typography>
                </Box>
                <Box className="checkBoxItem">
                  <input type="checkbox" />
                  <Typography className='checkBoxSubText' ml={1}>DAYLIGHT SAVING ENDS NOV 5, 2023</Typography>
                </Box>
                <Box className="checkBoxItem">
                  <input type="checkbox" />
                  <Typography className='checkBoxSubText' ml={1}>REMEMBERANCE DAY NOV 11, 2023</Typography>
                </Box>
                <Box className="checkBoxItem">
                  <input type="checkbox" />
                  <Typography className='checkBoxSubText' ml={1}>CHRISTMAS DAY DEC 25, 2023</Typography>
                </Box>
              </Box>
              <Box>
                <Box className="checkBoxItem">
                  <input type="checkbox" />
                  <Typography className='checkBoxSubText' ml={1}>LABOUR DAY SEP 4,2023</Typography>
                </Box>
                <Box className="checkBoxItem">
                  <input type="checkbox" />
                  <Typography className='checkBoxSubText' ml={1}>NATIONAL DAY FOR TRUTH AND RECONCILIATION SEP 30, 2023</Typography>
                </Box>
                <Box className="checkBoxItem">
                  <input type="checkbox" />
                  <Typography className='checkBoxSubText' ml={1}>THANKSGIVING OCT 9, 2023</Typography>
                </Box>
                <Box className="checkBoxItem">
                  <input type="checkbox" />
                  <Typography className='checkBoxSubText' ml={1}>HALLOWEEN OCT 31, 2023</Typography>
                </Box>
                <Box className="checkBoxItem">
                  <input type="checkbox" />
                  <Typography className='checkBoxSubText' ml={1}>DAYLIGHT SAVING ENDS NOV 5, 2023</Typography>
                </Box>
                <Box className="checkBoxItem">
                  <input type="checkbox" />
                  <Typography className='checkBoxSubText' ml={1}>REMEMBERANCE DAY NOV 11, 2023</Typography>
                </Box>
                <Box className="checkBoxItem">
                  <input type="checkbox" />
                  <Typography className='checkBoxSubText' ml={1}>CHRISTMAS DAY DEC 25, 2023</Typography>
                </Box>
              </Box>
            </Box>
            <Box className="presetsEventsFooter">
              <Box className="saveBtn">
                <Typography>SAVE</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <PriceBox />
      </Box>
      <Footer />
    </>
  )
}
