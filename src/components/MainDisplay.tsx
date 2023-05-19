import React from 'react'
import Experience from './about_tabs/Experience'
import Sports from './about_tabs/Sports'
import Gaming from './about_tabs/Gaming'
import SpaceApps from './SpaceApps'
import AIBot from './tools/AIBot'

interface displayProps {
  displayIndex: number
  centerConsoleWidth: number
}

const MainDisplay = (props: displayProps) => {
  switch (props.displayIndex) {
    case 1:
      return <Sports />
    case 2:
      return <Gaming />
    case 3:
      return <SpaceApps />
    case 4:
      return <AIBot centerConsoleWidth={props.centerConsoleWidth} />
    default:
      return <Experience />
  }
}

export default MainDisplay
