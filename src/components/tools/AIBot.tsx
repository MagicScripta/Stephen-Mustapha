import React, { useEffect, useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'
import ChatBotMessage from './ai_bot/ChatBotMessage'
import ChatUserMessage from './ai_bot/ChatUserMessage'

interface ChatObject {
  role: string
  content: string
}

interface BotProps {
  centerConsoleWidth: number
}

const AIBot = (props: BotProps) => {
  const scrollbar = React.useRef<Scrollbars>(null)
  const [chatKey, setChatKey] = useState(0)
  const [chat, setChat] = useState<ChatObject[]>([])
  const [userReplyNeeded, setUserReplyNeeded] = useState(false)
  const [userReplied, setUserReplied] = useState(false)
  const [startingOver, setStartingOver] = useState(false)
  const [chatComponentsList, setChatComponentsList] = useState<JSX.Element[]>(
    []
  )

  const observer = new MutationObserver((mutationList, observer) => {
    for (const mutation of mutationList) {
      if (mutation.type === 'childList') {
        if (scrollbar.current) scrollbar.current.scrollToBottom()
      }
    }
  })

  const reloadChat = () => {
    let chatStorage = localStorage.getItem('chat')
    let loadedChat = chatStorage ? JSON.parse(chatStorage) : []
    if (chatStorage) {
      setChat(loadedChat)
    } else {
      setUpDefault().then()
      return
    }

    let newChatList = []
    let tempKey = chatKey
    for (let message of loadedChat) {
      if (message.role === 'user' && message.content) {
        console.log(newChatList)
        newChatList.push(
          <ChatUserMessage
            startActive={false}
            message={message.content}
            key={tempKey}
            size={props.centerConsoleWidth}
          />
        )
      } else if (message.role === 'assistant' && message.content) {
        console.log(newChatList)
        newChatList.push(
          <ChatBotMessage
            message={message.content}
            key={tempKey}
            size={props.centerConsoleWidth}
          />
        )
      }
      tempKey += 1
    }
    setChatKey(tempKey)

    setChatComponentsList(newChatList)
    const message = loadedChat[loadedChat.length - 1]
    if (message.role === 'assistant' && message.content) {
      setUserReplyNeeded(true)
    } else if (
      (message.role === 'assistant' && !message.content) ||
      (message.role === 'user' && message.content)
    ) {
      setUserReplied(true)
    }
  }
  useEffect(() => reloadChat(), [])
  useEffect(() => {
    const chatNode = document.getElementById('chat-history')
    if (chatNode)
      observer.observe(chatNode, {
        attributes: true,
        childList: true,
        subtree: true,
      })
  }, [])

  // Default
  const setUpDefault = async () => {
    let newChatList: JSX.Element[] = []
    newChatList.push(
      <ChatBotMessage
        message={`Hey, welcome to my implementation of the ChatGPT API. This tool will take your voice input, transcribe it to text and use that with the gpt-3.5-turbo model of open AI to have a friendly conversation with you.
            Click on the profile picture to the right to start or stop the recording, you have options to clear the text and send it right under.`}
        key={chatKey}
        size={props.centerConsoleWidth}
      />
    )
    setChatKey(chatKey + 1)
    setChatComponentsList(newChatList)
    setUserReplyNeeded(true)
  }

  useEffect(() => {
    if (userReplyNeeded) {
      requestUserMessage()
      setUserReplyNeeded(false)
    }
  }, [chatComponentsList, chat])

  useEffect(() => {
    if (userReplied) {
      requestBotMessage().then()
      setUserReplied(false)
    }
  }, [chat])

  useEffect(() => {
    if (startingOver) {
      reloadChat()
      setStartingOver(false)
    }
  }, [chatKey])

  // No chat request yet
  const requestUserMessage = () => {
    let newChatList: JSX.Element[] = []
    newChatList.push(...chatComponentsList)
    newChatList.push(
      <ChatUserMessage
        startActive={true}
        sendMessage={sendUserMessage}
        startOver={startOver}
        key={chatKey}
        size={props.centerConsoleWidth}
      />
    )
    setChatKey(chatKey + 1)
    setChatComponentsList(newChatList)
  }

  // Awaiting bot reply from open ai
  const requestBotMessage = async () => {
    let newChatList: JSX.Element[] = []
    fetch('https://openai-sigma-six.vercel.app/get-reply', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: chat,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        const botReply = response
          ? response
          : "OpenAI didn't give much of a reply there sorry about that"
        let newChat = [...chat]
        newChat.push({ role: 'assistant', content: botReply.trim() })
        setChat(newChat)
        localStorage.setItem('chat', JSON.stringify(newChat))
        newChatList.push(...chatComponentsList)
        newChatList.push(
          <ChatBotMessage
            message={botReply}
            key={chatKey}
            size={props.centerConsoleWidth}
          />
        )
        setChatKey(chatKey + 1)
        setChatComponentsList(newChatList)
        setUserReplyNeeded(true)
      })
  }

  const sendUserMessage = (message: string) => {
    let newChat = [...chat]
    newChat.push({ role: 'user', content: message })
    setChat(newChat)
    localStorage.setItem('chat', JSON.stringify(newChat))
    setUserReplied(true)
  }

  const startOver = () => {
    setChat([])
    setChatComponentsList([])
    localStorage.removeItem('chat')
    setChatKey(0)
    setStartingOver(true)
  }

  return (
    <div className={`p-3 h-full`}>
      <Scrollbars
        autoHide
        ref={scrollbar}
        id={`chat-history`}
        autoHideTimeout={2000}
        autoHideDuration={1000}
      >
        {chatComponentsList}
      </Scrollbars>
    </div>
  )
}

export default AIBot
