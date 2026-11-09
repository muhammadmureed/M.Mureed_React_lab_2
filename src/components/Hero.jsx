import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import EmailIcon from '@mui/icons-material/Email'
import heroImg from '../assets/hero.png'

export default function Hero() {
  const greeting = "Hi, I'm Muhammad Mureed"
  const title = "Computer Science Student & Web Developer"
  const bio = "Welcome to my portfolio! I specialize in creating responsive, clean web applications with React, Material UI, and modern frontend tools."

  return (
    <Box component="section" id="about" sx={{ bgcolor: '#f4f6f8', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Chip
              label="Available for Opportunities"
              color="primary"
              variant="outlined"
              size="small"
              sx={{ mb: 2 }}
            />

            <Typography
              variant="h3"
              component="h1"
              fontWeight="bold"
              gutterBottom
              sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3.25rem' } }}
            >
              {greeting}
            </Typography>

            <Typography
              variant="h6"
              color="primary"
              sx={{ mb: 2, fontWeight: 500 }}
            >
              {title}
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 4, maxWidth: 580, lineHeight: 1.7 }}
            >
              {bio}
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                href="#projects"
                endIcon={<ArrowForwardIcon />}
              >
                View My Projects
              </Button>
              <Button
                variant="outlined"
                size="large"
                color="primary"
                href="#contact"
                startIcon={<EmailIcon />}
              >
                Get in Touch
              </Button>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }} sx={{ textAlign: 'center' }}>
            <Box
              component="img"
              src={heroImg}
              alt="Muhammad Mureed developer avatar illustration"
              sx={{
                width: '100%',
                maxWidth: 340,
                height: 'auto',
                borderRadius: 4,
                boxShadow: 2,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
