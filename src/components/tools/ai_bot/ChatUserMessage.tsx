import VerticalHelper from '../../VerticalHelper'
import userProfile from '../../../assets/user.jpg'
import React, { useEffect, useState } from 'react'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'
import {
  getBodyText,
  getInitialScheme,
  getMainBG,
  getPeripheralBG,
} from '../../../tools'

interface chatUserProps {
  size: number
  startActive: boolean
  message?: string
  sendMessage?: Function
  startOver?: Function
}

const ChatUserMessage = (props: chatUserProps) => {
  let [scheme, setScheme] = useState(getInitialScheme())
  let [message, setMessage] = useState(props.message ? props.message : '')
  const [isActive, setIsActive] = useState(props.startActive)
  const [baseSize, setBaseSize] = useState(Math.round(props.size / 3))
  const { transcript, listening, resetTranscript } = useSpeechRecognition()
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true })

  useEffect(() => setBaseSize(Math.round(props.size / 4)), [props.size])

  useEffect(() => {
    if (isActive) setMessage(transcript)
  }, [isActive, transcript])

  const click = () => {
    if (!isActive) return
    listening ? SpeechRecognition.stopListening() : startListening()
  }

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

  return (
    <div
      className={`overflow-hidden mb-3 h-full grid grid-cols-5 gap-0 w-full rounded-3xl ${getPeripheralBG(
        scheme
      )}`}
      style={{ minHeight: baseSize, height: 'auto' }}
    >
      <span className={`col-span-4 box-border p-5 ${getBodyText(scheme)} `}>
        {message}
      </span>
      <div className={`col-start-5`}>
        <div
          className={`mt-5 grid grid-cols-1 w-full overflow-hidden ${
            isActive ? `cursor-pointer` : ``
          }`}
          onClick={click}
          style={{
            height: baseSize / 1.5,
          }}
        >
          <VerticalHelper
            child={
              <div
                id="circles"
                style={{ height: baseSize / 1.2, width: baseSize / 1.2 }}
              >
                <div
                  className={`circle1 ${listening ? `bg-black` : `bg-white`}`}
                />
                <div
                  className={`circle2 ${listening ? `bg-black` : `bg-white`}`}
                />
                <div
                  className={`circle3 ${listening ? `bg-black` : `bg-white`}`}
                />
              </div>
            }
            className={`col-start-1 row-start-1 mx-auto ${
              isActive ? `visible` : `invisible`
            }`}
          />
          <VerticalHelper
            child={
              <div
                style={{
                  width: baseSize / 2,
                  height: baseSize / 2,
                }}
                className={`ease-in-out duration-300 rounded-full overflow-hidden ${
                  listening && isActive ? `border-red-600` : `border-white`
                } border-4`}
              >
                <img className={``} src={userProfile} alt={'OpenAI'} />
              </div>
            }
            className={`col-start-1 row-start-1`}
          />
        </div>
        <div
          className={`grid grid-cols-2 m-1 grid-rows-2 ${
            isActive ? `visible` : `invisible`
          }`}
        >
          <button
            style={{ height: baseSize / 6 }}
            className={`${getMainBG(
              scheme
            )} text-sm hover:border-2 border-0 border-white font-bold rounded m-1`}
            onClick={resetTranscript}
          >
            Clear
          </button>
          <button
            onClick={() => {
              if (message.length < 3) return
              SpeechRecognition.stopListening()
              if (props.sendMessage) props.sendMessage(message)
              setIsActive(false)
            }}
            style={{ height: baseSize / 6 }}
            className={`${getMainBG(
              scheme
            )} text-sm hover:border-2 border-0 border-white font-bold rounded m-1`}
          >
            Reply
          </button>
          <button
            onClick={() => {
              if (props.startOver) props.startOver()
            }}
            style={{ height: baseSize / 6 }}
            className={`${getMainBG(
              scheme
            )} text-sm hover:border-2 border-0 border-white font-bold rounded m-1 col-span-2`}
          >
            Start Over
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatUserMessage
