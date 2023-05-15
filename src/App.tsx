import React from 'react'
import { isDesktop, isTablet } from 'react-device-detect'
import Desktop from './Desktop'
import Mobile from './Mobile'
import { inject } from '@vercel/analytics'

inject()
const App = () => (isDesktop || isTablet ? <Desktop /> : <Mobile />)
export default App
