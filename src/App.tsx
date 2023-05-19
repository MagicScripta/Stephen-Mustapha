import React from 'react'
import Desktop from './Desktop'
import { inject } from '@vercel/analytics'

inject()
const App = () => <Desktop />
export default App
