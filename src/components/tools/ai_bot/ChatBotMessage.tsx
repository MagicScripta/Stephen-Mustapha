import chatBot from '../../../assets/chatBot.jpg'
import React, { useEffect, useState } from 'react'
import { getBodyText, getInitialScheme, getPeripheralBG } from '../../../tools'

interface chatBotProps {
  message: string
}

const ChatBotMessage = (props: chatBotProps) => {
  let [scheme, setScheme] = useState(getInitialScheme())
  const [baseSize, setBaseSize] = useState(0)

  useEffect(() => {
    setBaseSize(
      document.getElementById('chat-history') === null
        ? 0 // @ts-ignore
        : Math.round(document.getElementById('chat-history').clientHeight / 3)
    )
  }, [])

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
      <div
        style={{
          width: baseSize / 2,
          height: baseSize / 2,
        }}
        className={`ease-in-out duration-300 rounded-full overflow-hidden border-white border-4 mx-auto mt-5`}
      >
        <img className={``} src={chatBot} alt={'OpenAI'} />
      </div>
      <span className={`col-span-4 box-border p-5 ${getBodyText(scheme)} `}>
        {props.message}
      </span>
    </div>
  )
}

export default ChatBotMessage
