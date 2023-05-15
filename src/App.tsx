import React from 'react'

import { isDesktop, isTablet } from 'react-device-detect'
import Desktop from './Desktop'
import Mobile from './Mobile'

const App = () => (isDesktop || isTablet ? <Desktop /> : <Mobile />)
export default App
