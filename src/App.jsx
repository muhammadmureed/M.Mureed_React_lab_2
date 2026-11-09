import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <CssBaseline />
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Hero />
        <Features />
        <Contact />
      </Box>
      <Footer />
    </Box>
  )
}
