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
  const [scheme, setScheme] = useState(getInitialScheme())
  const [currentPage, setCurrentPage] = useState(0)
  const [profileSize, setProfileSize] = useState(0)
  const [topSize, setTopSize] = useState(0)
  const [botSize, setBotSize] = useState(0)
  const [titleSize, setTitleSize] = useState(0)
  const [textSize, setTextSize] = useState(0)
  const [pageSize, setPageSize] = useState(0)

  window.addEventListener('load', function () {
    setTimeout(function () {
      setIsLoaded(true)
    }, 1500)
  })

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
    setPageSize(
      document.getElementById('full-console') === null
        ? 0 // @ts-ignore
        : document.getElementById('full-console').clientHeight
    )
  }, [])

  useEffect(() => {
    setProfileSize(
      document.getElementById('top') === null
        ? 0 // @ts-ignore
        : Math.round(document.getElementById('top').clientHeight / 1.3)
    )
  }, [profileSize])

  useEffect(() => {
    setTopSize(
      document.getElementById('center-console') === null
        ? 0
        : Math.round(
            // @ts-ignore
            document.getElementById('center-console').clientHeight / 5.5
          )
    )
    setBotSize(
      document.getElementById('center-console') === null
        ? 0 // @ts-ignore
        : document.getElementById('center-console').clientHeight - topSize
    )
    setTitleSize(
      document.getElementById('right-console') === null
        ? 0
        : Math.round(
            // @ts-ignore
            document.getElementById('right-console').clientWidth / 10
          )
    )
    setTextSize(
      document.getElementById('center-console') === null
        ? 0
        : Math.round(
            // @ts-ignore
            document.getElementById('center-console').clientWidth / 20
          )
    )
  }, [])

  return (
    <div className={`h-screen w-screen overflow-hidden grid grid-cols-1`}>
      <div
        id={`full-console`}
        className={`col-start-1 row-start-1 h-screen w-screen ${getPeripheralBG(
          scheme
        )} overflow-hidden flex flex-col`}
      >
        <div
          className={`flex flex-row w-1/5 mx-auto`}
          style={{ height: Math.round(pageSize / 10) + 'px' }}
          id={`color-schemes`}
        >
          <ColorScheme schemeNumber={1} />
          <ColorScheme schemeNumber={2} />
          <ColorScheme schemeNumber={3} />
          <ColorScheme schemeNumber={4} />
        </div>
        <div className={`text-white grid grid-cols-7 gap-4 h-4/5`}>
          <div
            id={`left-console`}
            className={`grid grid-rows-3 w-5/6 mr-0 ml-auto rounded-lg col-span-2`}
          >
            <Banner
              name={'EXPERIENCE'}
              index={0}
              border={true}
              setDisplay={setCurrentPage}
            />
            <Banner
              name={'SPORTS'}
              index={1}
              border={true}
              setDisplay={setCurrentPage}
            />
            <Banner
              name={'GAMING'}
              index={2}
              border={true}
              setDisplay={setCurrentPage}
            />
          </div>
          <div
            id={`center-console`}
            className={`flex flex-col px-3 col-span-3 font-main text-2xl overflow-hidden h-full`}
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
                />
                <Logo
                  link={'https://www.linkedin.com/in/stephen-mustapha-ng/'}
                  linkName={'LinkedIn'}
                  src={linkedin}
                />
                <Logo
                  link={
                    'https://stackoverflow.com/users/11434507/stephen-mustapha'
                  }
                  linkName={'Stack'}
                  src={stack}
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
              <MainDisplay displayIndex={currentPage} />
            </div>
          </div>
          <div
            id={`right-console`}
            className={`flex flex-col ml-0 w-5/6 col-span-2 overflow-hidden`}
          >
            <div
              id={`tools`}
              className={`h-full flex flex-col mb-1 rounded-t-lg font-[stencil] ${getMainBG(
                scheme
              )} overflow-hidden`}
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
                  name={`CHATBOT`}
                  link={chatBot}
                  className={`col-span-2 bg-blue-400`}
                  setDisplay={setCurrentPage}
                />
              </div>
            </div>
            <div
              id={`awards`}
              className={`h-full flex flex-col pt-1 rounded-b-lg font-[stencil] overflow-hidden ${getMainBG(
                scheme
              )}`}
            >
              <p
                style={{ fontSize: titleSize + 'px' }}
                className={`w-full text-center ${getTitleText(scheme)}`}
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
