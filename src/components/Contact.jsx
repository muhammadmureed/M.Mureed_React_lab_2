import { useState } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Alert from '@mui/material/Alert'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SendIcon from '@mui/icons-material/Send'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Box component="section" id="contact" sx={{ py: { xs: 6, md: 10 }, bgcolor: '#f9fafb' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="overline" color="primary" fontWeight="bold" letterSpacing={1}>
            GET IN TOUCH
          </Typography>
          <Typography variant="h4" component="h2" fontWeight="bold" sx={{ mt: 1, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
            Contact Our Team
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 600, mx: 'auto' }}>
            Have questions about DevLaunch or need help getting started? Send us a message and we will respond promptly.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={3}>
              <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <EmailIcon color="primary" fontSize="large" />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">Email Us</Typography>
                    <Typography variant="body2" color="text.secondary">mureedkhan465@gmail.com</Typography>
                  </Box>
                </Stack>
              </Paper>

              <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <LocationOnIcon color="primary" fontSize="large" />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">Location</Typography>
                    <Typography variant="body2" color="text.secondary">Islamabad, Pakistan</Typography>
                  </Box>
                </Stack>
              </Paper>

              <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <AccessTimeIcon color="primary" fontSize="large" />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">Office Hours</Typography>
                    <Typography variant="body2" color="text.secondary">Monday - Friday: 9am - 6pm</Typography>
                  </Box>
                </Stack>
              </Paper>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Paper variant="outlined" sx={{ p: { xs: 3, md: 4 }, borderRadius: 2 }}>
              {submitted && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  Thank you! Your message has been received.
                </Alert>
              )}
              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth required label="Your Name" variant="outlined" size="small" />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth required type="email" label="Your Email" variant="outlined" size="small" />
                  </Grid>
                  <Grid size={12}>
                    <TextField fullWidth required label="Subject" variant="outlined" size="small" />
                  </Grid>
                  <Grid size={12}>
                    <TextField fullWidth required multiline rows={4} label="Message" variant="outlined" />
                  </Grid>
                  <Grid size={12}>
                    <Button type="submit" variant="contained" color="primary" size="large" endIcon={<SendIcon />}>
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
