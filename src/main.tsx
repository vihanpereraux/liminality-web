import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// MUI
import { Box } from '@mui/material'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Box sx={{
      width: '100%',
      height: 90,
      position: 'fixed',
      top: 0,
      zIndex: 1,
      background: 'linear-gradient(to bottom, #000000ff 0%, rgba(0, 0, 0, .75) 50%, rgba(0, 0, 0, 0) 100%)',
    }}></Box>
    <App />
  </StrictMode>,
)
