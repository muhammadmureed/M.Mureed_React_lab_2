import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <Box component="footer" sx={{ bgcolor: '#111827', color: '#9ca3af', pt: { xs: 6, md: 8 }, pb: 5 }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', md: 'center' }}
          spacing={3}
          sx={{ mb: 4 }}
        >
          <Box>
            <Typography variant="h6" color="#ffffff" fontWeight="bold">
              DevLaunch
            </Typography>
            <Typography variant="body2" sx={{ mt: 0.5 }}>
              The modern React starter toolkit for innovative teams.
            </Typography>
          </Box>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1.5, sm: 3 }}>
            <Link href="#home" underline="hover" color="inherit">Home</Link>
            <Link href="#features" underline="hover" color="inherit">Features</Link>
            <Link href="#contact" underline="hover" color="inherit">Contact</Link>
          </Stack>

          <Stack direction="row" spacing={1}>
            <IconButton color="inherit" size="small" aria-label="GitHub" href="https://github.com/muhammadmureed">
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton color="inherit" size="small" aria-label="LinkedIn">
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton color="inherit" size="small" aria-label="Twitter">
              <TwitterIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>

        <Divider sx={{ borderColor: '#374151', mb: 3 }} />

        <Typography variant="body2" align="center" color="#6b7280">
          &copy; {year} DevLaunch. Created by Muhammad Mureed. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}
