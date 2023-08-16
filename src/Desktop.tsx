import {
  getBodyText,
  getInitialScheme,
  getMainBG,
  getMainDecoration,
  getPeripheralBG,
  getTitleText,
} from './tools'
import ColorScheme from './components/ColorScheme'
import Banner from './components/Banner'
import VerticalHelper from './components/VerticalHelper'
import profile from './assets/profile.jpg'
import Logo from './components/Logo'
import github from './assets/github.png'
import linkedin from './assets/linkedin.png'
import stack from './assets/stackoverflow.svg'
import MainDisplay from './components/MainDisplay'
import Tool from './components/Tool'
import chatBot from './assets/chatBot.jpg'
import React, { useEffect, useState } from 'react'
import Waiting from './components/Waiting'

const Desktop = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLandscape, setIsLandscape] = useState(true)
  const [scheme, setScheme] = useState(getInitialScheme())
  const [currentPage, setCurrentPage] = useState(0)
  const [profileSize, setProfileSize] = useState(0)
  const [consoleHeight, setConsoleHeight] = useState(0)
  const [centerConsoleWidth, setCenterConsoleWidth] = useState(0)
  const [sideConsoleSize, setSideConsoleSize] = useState(0)
  const [schemesSize, setSchemesSize] = useState(0)
  const [topSize, setTopSize] = useState(0)
  const [botSize, setBotSize] = useState(0)
  const [titleSize, setTitleSize] = useState(0)
  const [textSize, setTextSize] = useState(0)
  const [pageHeight, setPageHeight] = useState(0)

  window.addEventListener('load', function () {
    setTimeout(function () {
      setIsLoaded(true)
    }, 1500)
  })

  const setAllSizes = () => {
    setIsLandscape(window.innerHeight < window.innerWidth)
    setPageHeight(
      document.getElementById('full-console') === null
        ? 0 // @ts-ignore
        : document.getElementById('full-console').clientHeight
    )
    setCenterConsoleWidth(
      document.getElementById('center-console') === null
        ? 0 // @ts-ignore
        : document.getElementById('center-console').clientWidth
    )
    setSchemesSize(
      document.getElementById('color-schemes') === null
        ? 0 // @ts-ignore
        : document.getElementById('color-schemes').clientHeight
    )
    if (isLandscape) {
      setSideConsoleSize(
        document.getElementById('right-console') === null
          ? 0 // @ts-ignore
          : document.getElementById('right-console').clientWidth
      )
    } else {
      setSideConsoleSize(
        document.getElementById('right-console') === null
          ? 0 // @ts-ignore
          : document.getElementById('right-console').clientHeight
      )
    }
  }

  useEffect(() => setAllSizes())
  window.onresize = () => setAllSizes()

  useEffect(
    () =>
      isLandscape
        ? setConsoleHeight(Math.round((pageHeight * 4) / 5))
        : setConsoleHeight(pageHeight - Math.round(pageHeight / 20)),
    [pageHeight]
  )

  useEffect(() => {
    const handleStorage = () => {
      let scheme = localStorage.getItem('colorScheme')
      if (scheme) {
        setScheme(JSON.parse(scheme))
      }
    }

    window.addEventListener('ThemeChange', () => handleStorage())
    return () =>
      window.removeEventListener('ThemeChange', () => handleStorage())
  }, [])

  useEffect(() => {
    if (isLandscape) {
      setTopSize(Math.round(consoleHeight / 5.5))
    } else {
      setTopSize(Math.round(consoleHeight / 10))
    }
    setProfileSize(topSize / 1.2)
    setBotSize(consoleHeight - topSize)
    setTitleSize(Math.round(sideConsoleSize / 10))
    setTextSize(centerConsoleWidth / 20)
  }, [pageHeight, centerConsoleWidth, sideConsoleSize, consoleHeight, topSize])

  return (
    <div className={`h-screen w-screen overflow-hidden grid grid-cols-1`}>
      <div
        id={`full-console`}
        className={`col-start-1 row-start-1 h-screen w-screen ${getPeripheralBG(
          scheme
        )} overflow-hidden flex flex-col`}
      >
        <div
          className={`flex mx-auto ${isLandscape ? `w-1/5 flex-row` : `w-3/5`}`}
          style={
            isLandscape
              ? { height: Math.round(pageHeight / 10) }
              : {
                  minHeight: Math.round(pageHeight / 20),
                  height: Math.round(pageHeight / 20),
                }
          }
          id={`color-schemes`}
        >
          <ColorScheme schemeNumber={1} parentHeight={schemesSize} />
          <ColorScheme schemeNumber={2} parentHeight={schemesSize} />
          <ColorScheme schemeNumber={3} parentHeight={schemesSize} />
          <ColorScheme schemeNumber={4} parentHeight={schemesSize} />
        </div>
        <div
          className={`text-white grid gap-4 ${
            isLandscape ? `grid-cols-7 ` : `grid-rows-20 w-5/6 mx-auto pb-10 `
          } h-full`}
          style={{ height: consoleHeight }}
        >
          <div
            id={`left-console`}
            className={`mr-0 ml-auto rounded-lg ${
              isLandscape
                ? `grid grid-rows-3 col-span-2 w-5/6`
                : `grid grid-cols-3 row-span-3 min-h-full min-w-full`
            }`}
          >
            <Banner
              name={'EXPERIENCE'}
              index={0}
              border={true}
              setDisplay={setCurrentPage}
              sideConsoleSize={sideConsoleSize}
            />
            <Banner
              name={'SPORTS'}
              index={1}
              border={true}
              setDisplay={setCurrentPage}
              sideConsoleSize={sideConsoleSize}
            />
            <Banner
              name={'GAMING'}
              index={2}
              border={true}
              setDisplay={setCurrentPage}
              sideConsoleSize={sideConsoleSize}
            />
          </div>
          <div
            id={`center-console`}
            className={`flex flex-col font-main text-2xl overflow-hidden ${
              isLandscape ? `px-3 col-span-3 h-full ` : `row-[span_13] h-full`
            }`}
          >
            <div
              id={'top'}
              style={{ minHeight: topSize + 'px' }}
              className={`mb-1 rounded-t-lg ${getMainBG(
                scheme
              )} overflow-hidden grid grid-cols-7 gap-3`}
            >
              <VerticalHelper
                child={
                  <div
                    style={{
                      width: profileSize + 'px',
                      height: profileSize + 'px',
                    }}
                    className={`mt-3 rounded-full overflow-hidden border-white border-4`}
                  >
                    <img src={profile} alt="Profile" />
                  </div>
                }
                className={`col-span-2 mx-auto`}
              />

              <div
                className={`col-span-5 grid place-items-center grid-cols-5 gap-2`}
              >
                <Logo
                  link={'https://github.com/MagicScripta'}
                  linkName={'Github'}
                  src={github}
                  size={topSize}
                />
                <Logo
                  link={'https://www.linkedin.com/in/stephen-mustapha-ng/'}
                  linkName={'LinkedIn'}
                  src={linkedin}
                  size={topSize}
                />
                <Logo
                  link={
                    'https://stackoverflow.com/users/11434507/stephen-mustapha'
                  }
                  linkName={'Stack'}
                  src={stack}
                  size={topSize}
                />
              </div>
            </div>
            <div
              id={`main-display`}
              style={{
                fontSize: textSize + 'px',
                letterSpacing: Math.round(textSize / 25) + 'px',
                wordSpacing: Math.round(textSize / 20) + 'px',
                height: botSize + 'px',
              }}
              className={`mt-1 rounded-b-lg ${getMainBG(scheme)} ${getBodyText(
                scheme
              )}`}
            >
              <MainDisplay
                displayIndex={currentPage}
                centerConsoleWidth={centerConsoleWidth}
              />
            </div>
          </div>
          <div
            id={`right-console`}
            className={`flex overflow-hidden ${
              isLandscape
                ? `ml-0 w-5/6 col-span-2 flex-col `
                : `row-span-4 min-w-full flex-row `
            }`}
          >
            <div
              id={`tools`}
              className={`h-full w-full flex flex-col font-sten ${getMainBG(
                scheme
              )} overflow-hidden ${
                isLandscape ? `mb-1 rounded-t-lg` : `rounded-l-lg`
              }`}
            >
              <p
                style={{ fontSize: titleSize + 'px' }}
                className={`w-full text-center ${getTitleText(scheme)}`}
              >
                Toolbox
              </p>
              <hr className={`${getMainDecoration(scheme)}`} />
              <div className={`grid grid-cols-2 h-full`}>
                <Tool
                  index={4}
                  size={sideConsoleSize}
                  name={`CHATBOT`}
                  link={chatBot}
                  className={`col-span-2 bg-blue-400`}
                  setDisplay={setCurrentPage}
                />
              </div>
            </div>
            <div
              id={`awards`}
              className={`h-full w-full flex flex-col font-sten ${
                isLandscape ? `pt-1 rounded-b-lg` : `rounded-r-lg`
              } overflow-hidden ${getMainBG(scheme)}`}
            >
              <p
                style={{ fontSize: titleSize + 'px' }}
                className={`w-full font-sten text-center ${getTitleText(
                  scheme
                )}`}
              >
                Certifications
              </p>
              <hr className={`${getMainDecoration(scheme)}`} />
              <div className={`h-full grid grid-rows-1`}>
                <Banner
                  name={`NASA SPACE APPS`}
                  border={false}
                  index={3}
                  setDisplay={setCurrentPage}
                  sideConsoleSize={sideConsoleSize}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Waiting done={isLoaded} className={`col-start-1 row-start-1`} />
    </div>
  )
}

export default Desktop
