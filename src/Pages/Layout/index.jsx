import React, { useState, useRef } from 'react';
import { Typography, Box, Radio } from '@mui/material';
import "./style.css";

import DownArrow from "../../Assets/images/DownArrow.svg";
import UpArrow from "../../Assets/images/UpArrow.svg";
import coverPage1 from "../../Assets/images/DailySinglePage1.png"
import coverPage2 from "../../Assets/images/DailySinglePage2.png"
import InsideCoverBinder from "../../Assets/images/insideCoverBinder.png"


//Component 
import NavBar from '../NavBar';
import Footer from '../Footer';
import PriceBox from '../../Components/PriceBox';

export default function Layout() {
  const [tab, setTab] = useState("DailySinglePage");
  const [secondTime, setSecondTime] = useState("")
  const [weekRadio, setWeekRadio] = useState("")
  const [taskRadio, setTaskRadio] = useState("")
  const [customPageRadio, setCustomPageRadio] = useState("")
  const [customLeftPageRadio, setCustomLeftPageRadio] = useState("")
  const [rightCustomBox, setRightCustomBox] = useState(true)
  const [leftCustomBox, setLeftCustomBox] = useState(false)
  const [customOption, setCustomOption] = useState();
  const [customOptionVal, setCustomOptionVal] = useState();

  const handleSecondTimeRadioChange = (event) => {
    setSecondTime(event.target.value);
  };
  const handleWeekRadioChange = (event) => {
    setWeekRadio(event.target.value);
  };
  const handleTaskRadioChange = (event) => {
    setTaskRadio(event.target.value);
  };
  const handleCustomRightBottomRadioChange = (event) => {
    setCustomPageRadio(event.target.value);
  };
  const handleCustomLeftBottomRadioChange = (event) => {
    setCustomLeftPageRadio(event.target.value);
  };

  const handelCustomOptionVal = (e) => {
    setCustomOptionVal(e.target.innerText)
    setCustomOption(false)
  }

  return (
    <>
      <NavBar />
      <Box className="layOutContainer">
        <Box className="coverNav">
          <Box className="CnavItem">
            <Typography className={tab === "WeeklyView" ? "navFont" : null} onClick={() => setTab("WeeklyView")}>Weekly View</Typography>
          </Box>
          <Box className="CnavItem">
            <Typography className={tab === "DailySinglePage" ? "navFont" : null} onClick={() => setTab("DailySinglePage")}>Daily Single Page</Typography>
          </Box>
          <Box className="CnavItem">
            <Typography className={tab === "DailyTwoPage" ? "navFont" : null} onClick={() => setTab("DailyTwoPage")}>Daily - Two Page</Typography>
          </Box>
          <Box className="CnavItem">
            <Typography className={tab === "Calendars" ? "navFont" : null} onClick={() => setTab("Calendars")}>Calendars</Typography>
          </Box>
        </Box>

        <Box className="layOutContainerBox">

          <Box sx={{ display: tab === "DailySinglePage" ? "flex" : "none" }} className="DailySinglePage">

            <Box className="sideCustomBox">

              <Box mb={2} className="timeBox">
                <Box className="timeBoxItem">
                  <Box className="timeSBox"></Box>
                  <Typography>Hourly times</Typography>
                </Box>
                <Box className="timeBoxItem">
                  <Box className="timeSBox"></Box>
                  <Typography>No times</Typography>
                </Box>
                <Box className="timeBoxItem">
                  <Box className="timeSBox"></Box>
                  <Typography>Blocks for each day</Typography>
                </Box>
              </Box>

              <Box onClick={() => setCustomOption(!customOption)} mb={2} className="customOption">
                <Typography pl={2}>{customOptionVal || "Custom Options"}</Typography>
                <img onClick={() => setCustomOption(!customOption)} className='customOptionDownArrow' src={customOption ? UpArrow : DownArrow} />
                <Box sx={{ height: customOption ? "auto" : "0px" }} className="customPopUpList">
                  <Typography onClick={handelCustomOptionVal} className='customPopUpListItem'>Custom Options A</Typography>
                  <Typography onClick={handelCustomOptionVal} className='customPopUpListItem'>Custom Options B</Typography>
                  <Typography onClick={handelCustomOptionVal} className='customPopUpListItem'>Custom Options C</Typography>
                  <Typography onClick={handelCustomOptionVal} className='customPopUpListItem'>Custom Options D</Typography>
                  <Typography onClick={handelCustomOptionVal} className='customPopUpListItem'>Custom Options F</Typography>
                </Box>
              </Box>

              <Box mb={2} className="setTimeBox">
                <Box className="setTimeInsideBox">

                  <Box className="setTimeInRadioBox">
                    <label className='radioLabel' >
                      <Radio
                        sx={{
                          color: '#B8845F',
                          '&.Mui-checked': {
                            color: '#B8845F',
                          },
                        }}
                        name='5am-9pm'
                        value='5am-9pm'
                        checked={secondTime === '5am-9pm'}
                        onChange={handleSecondTimeRadioChange}
                      />
                    </label>
                    <Typography>5am - 9pm</Typography>
                  </Box>
                  <Box className="setTimeInRadioBox">
                    <label className='radioLabel'>
                      <Radio
                        sx={{
                          color: '#B8845F',
                          '&.Mui-checked': {
                            color: '#B8845F',
                          },
                        }}
                        name="7am-11pm"
                        value="7am-11pm"
                        checked={secondTime === '7am-11pm'}
                        onChange={handleSecondTimeRadioChange}
                      />
                    </label>
                    <Typography>7am - 11pm</Typography>
                  </Box>

                </Box>
                <Box className="setTimeInsideBox">
                  <Box className="setTimeInRadioBox">
                    <label className='radioLabel' >
                      <Radio
                        sx={{
                          color: '#B8845F',
                          '&.Mui-checked': {
                            color: '#B8845F',
                          },
                        }}
                        name='6am-10pm'
                        value='6am-10pm'
                        checked={secondTime === '6am-10pm'}
                        onChange={handleSecondTimeRadioChange}
                      />
                    </label>
                    <Typography>6am - 10pm</Typography>
                  </Box>

                  <Box className="setTimeInRadioBox">
                    <label className='radioLabel' >
                      <Radio
                        sx={{
                          color: '#B8845F',
                          '&.Mui-checked': {
                            color: '#B8845F',
                          },
                        }}
                        name='8am-12pm'
                        value='8am-12pm'
                        checked={secondTime === '8am-12pm'}
                        onChange={handleSecondTimeRadioChange}
                      />
                    </label>
                    <Typography>8am - 12pm</Typography>
                  </Box>
                </Box>
              </Box>

              {/* week Box */}
              <Box mb={2} className="weekBox">
                <Box className="weekBoxHeader"><Typography className='BoxHeaderText'>Include these two options at the top?</Typography></Box>
                <Box className="weekRadioBox">
                  <label className='radioLabel' >
                    <Radio
                      sx={{
                        color: '#B8845F',
                        '&.Mui-checked': {
                          color: '#B8845F',
                        },
                      }}
                      name='Week'
                      value='Week'
                      checked={weekRadio === 'Week'}
                      onChange={handleWeekRadioChange}
                    />
                  </label>
                  <Typography>Week of the quarter</Typography>
                </Box>
                <Box className="weekRadioBox">
                  <label className='radioLabel' >
                    <Radio
                      sx={{
                        color: '#B8845F',
                        '&.Mui-checked': {
                          color: '#B8845F',
                        },
                      }}
                      name='Pre-week'
                      value='Pre-week'
                      checked={weekRadio === 'Pre-week'}
                      onChange={handleWeekRadioChange}
                    />
                  </label>
                  <Typography>Pre-week planning check-in</Typography>
                </Box>
              </Box>


              {/* Task list */}
              <Box mb={2} className="TaskListBox">
                <Box className="tackHeader">
                  <Typography className='BoxHeaderText'>What do you want included in your task list? </Typography>
                </Box>
                <Box className="taskRadioBox">
                  <Box className="weekRadioBox">
                    <label className='radioLabel' >
                      <Radio
                        sx={{
                          color: '#B8845F',
                          '&.Mui-checked': {
                            color: '#B8845F',
                          },
                        }}
                        name='Pre-week'
                        value='Pre-week'
                        checked={taskRadio === 'Pre-week'}
                        onChange={handleTaskRadioChange}
                      />
                    </label>
                    <Typography>Three top priorities for the day</Typography>
                  </Box>
                  <Box className="weekRadioBox">
                    <label className='radioLabel' >
                      <Radio
                        sx={{
                          color: '#B8845F',
                          '&.Mui-checked': {
                            color: '#B8845F',
                          },
                        }}
                        name='Professional/Personal'
                        value='Professional/Personal'
                        checked={taskRadio === 'Professional/Personal'}
                        onChange={handleTaskRadioChange}
                      />
                    </label>
                    <Typography>Split (Professional/Personal) Task List (unselect for one list)</Typography>
                  </Box>
                  <Box className="weekRadioBox">
                    <label className='radioLabel' >
                      <Radio
                        sx={{
                          color: '#B8845F',
                          '&.Mui-checked': {
                            color: '#B8845F',
                          },
                        }}
                        name='MorningRitualCheck'
                        value='MorningRitualCheck'
                        checked={taskRadio === 'MorningRitualCheck'}
                        onChange={handleTaskRadioChange}
                      />
                    </label>
                    <Typography>Morning Ritual Check</Typography>
                  </Box>
                  <Box className="weekRadioBox">
                    <label className='radioLabel' >
                      <Radio
                        sx={{
                          color: '#B8845F',
                          '&.Mui-checked': {
                            color: '#B8845F',
                          },
                        }}
                        name='EveningRitualCheck'
                        value='EveningRitualCheck'
                        checked={taskRadio === 'EveningRitualCheck'}
                        onChange={handleTaskRadioChange}
                      />
                    </label>
                    <Typography>Evening Ritual Check</Typography>
                  </Box>

                </Box>
              </Box>

              {/* Custom Right button page */}
              <Box mb={2} className={rightCustomBox ? "customPageBottomBox customPageBottomRCloseBox" : "customPageBottomBox"}>
                <img onClick={() => setRightCustomBox(!rightCustomBox)} className='leftCustomArrow' src={rightCustomBox ? UpArrow : DownArrow} />
                <Box className="customPageBoxHeader">
                  <Typography className='BoxHeaderText'>Bottom right custom option
                    <span className='choseOneSubText'>(choose one)</span>

                  </Typography>
                  {/* <Typography className='choseOneSubText'></Typography> */}
                </Box>
                <Box className="customRadioBox">
                  <Box className="customRadioInputBox">
                    <label className='radioLabel' >
                      <Radio
                        sx={{
                          color: '#B8845F',
                          '&.Mui-checked': {
                            color: '#B8845F',
                          },
                        }}
                        name='ReflectionandGratitude'
                        value='ReflectionandGratitude'
                        checked={customPageRadio === 'ReflectionandGratitude'}
                        onChange={handleCustomRightBottomRadioChange}
                      />
                    </label>
                    <Typography>Reflection and Gratitude</Typography>
                  </Box>
                  <Box className="customRadioInputBox">
                    <label className='radioLabel' >
                      <Radio
                        sx={{
                          color: '#B8845F',
                          '&.Mui-checked': {
                            color: '#B8845F',
                          },
                        }}
                        name='QuoteOnly'
                        value='QuoteOnly'
                        checked={customPageRadio === 'QuoteOnly'}
                        onChange={handleCustomRightBottomRadioChange}
                      />
                    </label>
                    <Typography>Quote Only</Typography>
                  </Box>
                  <Box className="customRadioInputBox">
                    <label className='radioLabel' >
                      <Radio
                        sx={{
                          color: '#B8845F',
                          '&.Mui-checked': {
                            color: '#B8845F',
                          },
                        }}
                        name='HabitTracker'
                        value='HabitTracker'
                        checked={customPageRadio === 'HabitTracker'}
                        onChange={handleCustomRightBottomRadioChange}
                      />
                    </label>
                    <Typography>Habit Tracker</Typography>
                  </Box>
                  <Box className="customRadioInputBox">
                    <label className='radioLabel' >
                      <Radio
                        sx={{
                          color: '#B8845F',
                          '&.Mui-checked': {
                            color: '#B8845F',
                          },
                        }}
                        name='WellBeing'
                        value='WellBeing'
                        checked={customPageRadio === 'WellBeing'}
                        onChange={handleCustomRightBottomRadioChange}
                      />
                    </label>
                    <Typography>Well-Being</Typography>
                  </Box>
                  <Box className="customRadioInputBox">
                    <label className='radioLabel' >
                      <Radio
                        sx={{
                          color: '#B8845F',
                          '&.Mui-checked': {
                            color: '#B8845F',
                          },
                        }}
                        name='ReflectionandGratitudeQuote'
                        value='ReflectionandGratitudeQuote'
                        checked={customPageRadio === 'ReflectionandGratitudeQuote'}
                        onChange={handleCustomRightBottomRadioChange}
                      />
                    </label>
                    <Typography>Reflection and Gratitude with a Quote</Typography>
                  </Box>
                  <Box className="customRadioInputBox">
                    <label className='radioLabel' >
                      <Radio
                        sx={{
                          color: '#B8845F',
                          '&.Mui-checked': {
                            color: '#B8845F',
                          },
                        }}
                        name='Family'
                        value='Family'
                        checked={customPageRadio === 'Family'}
                        onChange={handleCustomRightBottomRadioChange}
                      />
                    </label>
                    <Typography>Family</Typography>
                  </Box>
                  <Box className="customRadioInputBox">
                    <label className='radioLabel' >
                      <Radio
                        sx={{
                          color: '#B8845F',
                          '&.Mui-checked': {
                            color: '#B8845F',
                          },
                        }}
                        name='Blank'
                        value='Blank'
                        checked={customPageRadio === 'Blank'}
                        onChange={handleCustomRightBottomRadioChange}
                      />
                    </label>
                    <Typography>Blank</Typography>
                  </Box>
                  <Box className="customRadioInputBox">
                    <label className='radioLabel' >
                      <Radio
                        sx={{
                          color: '#B8845F',
                          '&.Mui-checked': {
                            color: '#B8845F',
                          },
                        }}
                        name='CustomList'
                        value='CustomList'
                        checked={customPageRadio === 'CustomList'}
                        onChange={handleCustomRightBottomRadioChange}
                      />
                    </label>
                    <Typography>Custom List</Typography>
                  </Box>
                  <Box className="customRadioInputBoxInput">
                    <input type="text" placeholder='Title' />
                    <Box className="titleSaveButton">
                      <Typography>Save</Typography>
                    </Box>

                  </Box>
                  <Box className="customRadioInputBox">
                    <label className='radioLabel' >
                      <Radio
                        sx={{
                          color: '#B8845F',
                          '&.Mui-checked': {
                            color: '#B8845F',
                          },
                        }}
                        name='CustomChecklist'
                        value='CustomChecklist'
                        checked={customPageRadio === 'CustomChecklist'}
                        onChange={handleCustomRightBottomRadioChange}
                      />
                    </label>
                    <Typography>Custom Checklist</Typography>
                  </Box>
                  <Box className="customRadioInputBox">
                    <label className='radioLabel' >
                      <Radio
                        sx={{
                          color: '#B8845F',
                          '&.Mui-checked': {
                            color: '#B8845F',
                          },
                        }}
                        name='Custombox'
                        value='Custombox'
                        checked={customPageRadio === 'Custombox'}
                        onChange={handleCustomRightBottomRadioChange}
                      />
                    </label>
                    <Typography>Custom box</Typography>
                  </Box>

                </Box>

              </Box>


              {/* Custom left Button page */}
              <Box className={leftCustomBox ? "customPageBottomBox customPageBottomLCloseBox" : "customPageBottomBox"}>
                <img onClick={() => setLeftCustomBox(!leftCustomBox)} className='leftCustomArrow' src={leftCustomBox ? UpArrow : DownArrow} />
                <Box className="customPageBoxHeader">
                  <Typography className='BoxHeaderText'>Bottom left custom option<span className='choseOneSubText'>(choose one)</span></Typography>
                  {/* <Typography className='choseOneSubText'>(choose one)</Typography> */}
                </Box>
                <Box className="customRadioBox">
                  <Box className="customRadioInputBox">
                    <label className='radioLabel' >
                      <Radio
                        sx={{
                          color: '#B8845F',
                          '&.Mui-checked': {
                            color: '#B8845F',
                          },
                        }}
                        name='ReflectionandGratitude'
                        value='ReflectionandGratitude'
                        checked={customLeftPageRadio === 'ReflectionandGratitude'}
                        onChange={handleCustomLeftBottomRadioChange}
                      />
                    </label>
                    <Typography>Reflection and Gratitude</Typography>
                  </Box>
                  <Box className="customRadioInputBox">
                    <label className='radioLabel' >
                      <Radio
                        sx={{
                          color: '#B8845F',
                          '&.Mui-checked': {
                            color: '#B8845F',
                          },
                        }}
                        name='QuoteOnly'
                        value='QuoteOnly'
                        checked={customLeftPageRadio === 'QuoteOnly'}
                        onChange={handleCustomLeftBottomRadioChange}
                      />
                    </label>
                    <Typography>Quote Only</Typography>
                  </Box>
                  <Box className="customRadioInputBox">
                    <label className='radioLabel' >
                      <Radio
                        sx={{
                          color: '#B8845F',
                          '&.Mui-checked': {
                            color: '#B8845F',
                          },
                        }}
                        name='HabitTracker'
                        value='HabitTracker'
                        checked={customLeftPageRadio === 'HabitTracker'}
                        onChange={handleCustomLeftBottomRadioChange}
                      />
                    </label>
                    <Typography>Habit Tracker</Typography>
                  </Box>
                  <Box className="customRadioInputBox">
                    <label className='radioLabel' >
                      <Radio
                        sx={{
                          color: '#B8845F',
                          '&.Mui-checked': {
                            color: '#B8845F',
                          },
                        }}
                        name='WellBeing'
                        value='WellBeing'
                        checked={customLeftPageRadio === 'WellBeing'}
                        onChange={handleCustomLeftBottomRadioChange}
                      />
                    </label>
                    <Typography>Well-Being</Typography>
                  </Box>
                  <Box className="customRadioInputBox">
                    <label className='radioLabel' >
                      <Radio
                        sx={{
                          color: '#B8845F',
                          '&.Mui-checked': {
                            color: '#B8845F',
                          },
                        }}
                        name='ReflectionandGratitudeQuote'
                        value='ReflectionandGratitudeQuote'
                        checked={customLeftPageRadio === 'ReflectionandGratitudeQuote'}
                        onChange={handleCustomLeftBottomRadioChange}
                      />
                    </label>
                    <Typography>Reflection and Gratitude with a Quote</Typography>
                  </Box>
                  <Box className="customRadioInputBox">
                    <label className='radioLabel' >
                      <Radio
                        sx={{
                          color: '#B8845F',
                          '&.Mui-checked': {
                            color: '#B8845F',
                          },
                        }}
                        name='Family'
                        value='Family'
                        checked={customLeftPageRadio === 'Family'}
                        onChange={handleCustomLeftBottomRadioChange}
                      />
                    </label>
                    <Typography>Family</Typography>
                  </Box>
                  <Box className="customRadioInputBox">
                    <label className='radioLabel' >
                      <Radio
                        sx={{
                          color: '#B8845F',
                          '&.Mui-checked': {
                            color: '#B8845F',
                          },
                        }}
                        name='Blank'
                        value='Blank'
                        checked={customLeftPageRadio === 'Blank'}
                        onChange={handleCustomLeftBottomRadioChange}
                      />
                    </label>
                    <Typography>Blank</Typography>
                  </Box>
                  <Box className="customRadioInputBox">
                    <label className='radioLabel' >
                      <Radio
                        sx={{
                          color: '#B8845F',
                          '&.Mui-checked': {
                            color: '#B8845F',
                          },
                        }}
                        name='CustomList'
                        value='CustomList'
                        checked={customLeftPageRadio === 'CustomList'}
                        onChange={handleCustomLeftBottomRadioChange}
                      />
                    </label>
                    <Typography>Custom List</Typography>
                  </Box>
                  <Box className="customRadioInputBoxInput">
                    <input type="text" placeholder='Title' />
                    <Box className="titleSaveButton">
                      <Typography>Save</Typography>
                    </Box>

                  </Box>
                  <Box className="customRadioInputBox">
                    <label className='radioLabel' >
                      <Radio
                        sx={{
                          color: '#B8845F',
                          '&.Mui-checked': {
                            color: '#B8845F',
                          },
                        }}
                        name='CustomChecklist'
                        value='CustomChecklist'
                        checked={customLeftPageRadio === 'CustomChecklist'}
                        onChange={handleCustomLeftBottomRadioChange}
                      />
                    </label>
                    <Typography>Custom Checklist</Typography>
                  </Box>
                  <Box className="customRadioInputBox">
                    <label className='radioLabel' >
                      <Radio
                        sx={{
                          color: '#B8845F',
                          '&.Mui-checked': {
                            color: '#B8845F',
                          },
                        }}
                        name='Custombox'
                        value='Custombox'
                        checked={customLeftPageRadio === 'Custombox'}
                        onChange={handleCustomLeftBottomRadioChange}
                      />
                    </label>
                    <Typography>Custom box</Typography>
                  </Box>

                </Box>

              </Box>

            </Box>

            <Box className="customPreviewBox">
              <Box className="ChooseCoverHeader">
                <Typography mr={1} className='ChooseCoverHeaderText'>Step 3:
                  <span className='ChooseCoverSubText'>Select your layout (above), and customize it in the design box to the left</span>
                </Typography>
                {/* <Typography className='ChooseCoverSubText'></Typography> */}
              </Box>
              <Box mt={3} className="step3Container">
                <Box className="st3CoverBox">
                  <Box mr={1} className="st3page">
                    <img src={coverPage1} />
                  </Box>
                  <Box ml={1} className="st3page">
                    <img className='insideCover_binder' src={InsideCoverBinder} />
                    <img src={coverPage2} />
                  </Box>

                </Box>

              </Box>
            </Box>

          </Box>


        </Box>
        {<PriceBox />}
      </Box>
      <Footer />
    </>
  )
}
