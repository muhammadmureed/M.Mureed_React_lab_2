import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import heroImg from '../assets/hero.png'

export default function Hero() {
  const headline = "Build Faster Modern Web Apps with React"
  const subtext = "DevLaunch gives developers the tools and reusable components needed to launch production-grade applications in minutes."

  return (
    <Box component="section" id="home" sx={{ bgcolor: '#f0f4f8', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Chip
              label="v2.0 Just Released"
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
              {headline}
            </Typography>

            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ mb: 4, fontWeight: 400, fontSize: { xs: '1rem', md: '1.25rem' } }}
            >
              {subtext}
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                href="#features"
                endIcon={<ArrowForwardIcon />}
              >
                Explore Features
              </Button>
              <Button
                variant="outlined"
                size="large"
                color="primary"
                href="#contact"
              >
                Contact Us
              </Button>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }} sx={{ textAlign: 'center' }}>
            <Box
              component="img"
              src={heroImg}
              alt="DevLaunch platform illustration showcasing web features"
              sx={{
                width: '100%',
                maxWidth: 360,
                height: 'auto',
                display: 'inline-block',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
