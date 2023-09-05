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
  const [timeTab, setTimeTab] = useState("Hourlytimes")
  const [secondTime, setSecondTime] = useState("")
  const [weekRadio, setWeekRadio] = useState("")
  const [taskRadio, setTaskRadio] = useState("")
  const [customPageRadio, setCustomPageRadio] = useState("")
  const [customLeftPageRadio, setCustomLeftPageRadio] = useState("")
  const [rightCustomBox, setRightCustomBox] = useState(true)
  const [leftCustomBox, setLeftCustomBox] = useState(false)
  const [customOption, setCustomOption] = useState();
  const [customOptionVal, setCustomOptionVal] = useState();

  const TextMessage = "Showing some text message"

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
  console.log(timeTab);
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
                <Box onClick={() => setTimeTab("Hourlytimes")} className={timeTab === "Hourlytimes" ? "timeBoxItem timeBoxItemActive" : "timeBoxItem"}>
                  <Box className={timeTab === "Hourlytimes" ? "timeSBoxActive timeSBox" : "timeSBox"}></Box>
                  <Typography>Hourly times</Typography>
                </Box>
                <Box onClick={() => setTimeTab("Notimes")} className={timeTab === "Notimes" ? "timeBoxItem timeBoxItemActive" : "timeBoxItem"}>
                  <Box className={timeTab === "Notimes" ? "timeSBoxActive timeSBox" : "timeSBox"}></Box>
                  <Typography>No times</Typography>
                </Box>
                <Box onClick={() => setTimeTab("Blocksforeachday")} p={1} className={timeTab === "Blocksforeachday" ? "timeBoxItem timeBoxItemActive" : "timeBoxItem"}>
                  <Box mb={0.4} className={timeTab === "Blocksforeachday" ? "timeSBoxActive timeSBox" : "timeSBox"}></Box>
                  <Typography>Blocks for each day</Typography>
                </Box>
              </Box>

              <Box sx={{ display: timeTab === "Hourlytimes" ? "block" : "none" }} className="sideChangeableTab">
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
                    <Typography onClick={() => setRightCustomBox(!rightCustomBox)} className='BoxHeaderText'>Bottom right custom option
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
                      <Typography mr={2}>Reflection and Gratitude</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Quote Only</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2} >Habit Tracker</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Well-Being</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Reflection and Gratitude with a Quote</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Family</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Blank</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Custom List</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Custom Checklist</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Custom box</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
                    </Box>

                  </Box>

                </Box>


                {/* Custom left Button page */}
                <Box className={leftCustomBox ? "customPageBottomBox customPageBottomLCloseBox" : "customPageBottomBox"}>
                  <img onClick={() => setLeftCustomBox(!leftCustomBox)} className='leftCustomArrow' src={leftCustomBox ? UpArrow : DownArrow} />
                  <Box className="customPageBoxHeader">
                    <Typography onClick={() => setLeftCustomBox(!leftCustomBox)} className='BoxHeaderText'>Bottom left custom option<span className='choseOneSubText'>(choose one)</span></Typography>
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
                      <Typography mr={2}>Reflection and Gratitude</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Quote Only</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Habit Tracker</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Well-Being</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Reflection and Gratitude with a Quote</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Family</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Blank</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Custom List</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Custom Checklist</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Custom box</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
                    </Box>
                  </Box>
                </Box>
              </Box>






















              <Box sx={{ display: timeTab === "Notimes" ? "block" : "none" }} className="sideChangeableTab">
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

                {/* <Box mb={2} className="setTimeBox">
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
                </Box> */}

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
                    <Typography onClick={() => setRightCustomBox(!rightCustomBox)} className='BoxHeaderText'>Bottom right custom option
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
                      <Typography mr={2}>Reflection and Gratitude</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Quote Only</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2} >Habit Tracker</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Well-Being</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Reflection and Gratitude with a Quote</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Family</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Blank</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Custom List</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Custom Checklist</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Custom box</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
                    </Box>

                  </Box>

                </Box>


                {/* Custom left Button page
                <Box className={leftCustomBox ? "customPageBottomBox customPageBottomLCloseBox" : "customPageBottomBox"}>
                  <img onClick={() => setLeftCustomBox(!leftCustomBox)} className='leftCustomArrow' src={leftCustomBox ? UpArrow : DownArrow} />
                  <Box className="customPageBoxHeader">
                    <Typography onClick={() => setLeftCustomBox(!leftCustomBox)} className='BoxHeaderText'>Bottom left custom option<span className='choseOneSubText'>(choose one)</span></Typography>
                    
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
                      <Typography mr={2}>Reflection and Gratitude</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Quote Only</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Habit Tracker</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Well-Being</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Reflection and Gratitude with a Quote</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Family</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Blank</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Custom List</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Custom Checklist</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Custom box</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
                    </Box>
                  </Box>
                </Box> */}
              </Box>



















              {/* Blocks for each day */}
              <Box sx={{ display: timeTab === "Blocksforeachday" ? "block" : "none" }} className="sideChangeableTab">
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
                    <Typography onClick={() => setRightCustomBox(!rightCustomBox)} className='BoxHeaderText'>Bottom right custom option
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
                      <Typography mr={2}>Reflection and Gratitude</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Quote Only</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2} >Habit Tracker</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Well-Being</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Reflection and Gratitude with a Quote</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Family</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Blank</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Custom List</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Custom Checklist</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Custom box</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
                    </Box>

                  </Box>

                </Box>


                {/* Custom left Button page
                <Box className={leftCustomBox ? "customPageBottomBox customPageBottomLCloseBox" : "customPageBottomBox"}>
                  <img onClick={() => setLeftCustomBox(!leftCustomBox)} className='leftCustomArrow' src={leftCustomBox ? UpArrow : DownArrow} />
                  <Box className="customPageBoxHeader">
                    <Typography onClick={() => setLeftCustomBox(!leftCustomBox)} className='BoxHeaderText'>Bottom left custom option<span className='choseOneSubText'>(choose one)</span></Typography>
                    
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
                      <Typography mr={2}>Reflection and Gratitude</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Quote Only</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Habit Tracker</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Well-Being</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Reflection and Gratitude with a Quote</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Family</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Blank</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Custom List</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Custom Checklist</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
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
                      <Typography mr={2}>Custom box</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <title>{TextMessage}</title>
                        <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#A8A8A8" stroke="#A8A8A8" stroke-width="0.2" />
                      </svg>
                    </Box>
                  </Box>
                </Box> */}
              </Box>

            </Box>

            <Box className="customPreviewBox">
              <Box className="ChooseCoverHeader">
                <Typography mr={1} className='ChooseCoverHeaderText step3Text'>Step 3:
                  <span className='ChooseCoverSubText step3SpanText'>Select your layout (above), and customize it in the design box to the left</span>
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
