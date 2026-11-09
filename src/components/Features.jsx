import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import SpeedIcon from '@mui/icons-material/Speed'
import SecurityIcon from '@mui/icons-material/Security'
import CloudQueueIcon from '@mui/icons-material/CloudQueue'

export default function Features() {
  return (
    <Box component="section" id="features" sx={{ py: { xs: 6, md: 10 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="overline" color="primary" fontWeight="bold" letterSpacing={1}>
            WHY CHOOSE US
          </Typography>
          <Typography variant="h4" component="h2" fontWeight="bold" sx={{ mt: 1, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
            Engineered for Modern Web Teams
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 600, mx: 'auto' }}>
            Explore the powerful capabilities that help developers build, test, and ship responsive applications effortlessly.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 1, borderRadius: 2 }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Avatar sx={{ bgcolor: 'primary.light', color: 'primary.main', mb: 2, width: 56, height: 56 }}>
                  <SpeedIcon fontSize="medium" />
                </Avatar>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Ultra Fast Performance
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Optimized bundle footprints and instant hot-module reloading powered by modern bundlers and best practices.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href="#contact">Get Started</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 1, borderRadius: 2 }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Avatar sx={{ bgcolor: 'success.light', color: 'success.main', mb: 2, width: 56, height: 56 }}>
                  <SecurityIcon fontSize="medium" />
                </Avatar>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Enterprise Security
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Built-in sanitization, strict types, and robust authentication layers to keep your user data completely safe.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href="#contact">Get Started</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 1, borderRadius: 2 }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Avatar sx={{ bgcolor: 'warning.light', color: 'warning.main', mb: 2, width: 56, height: 56 }}>
                  <CloudQueueIcon fontSize="medium" />
                </Avatar>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Cloud Native Architecture
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Deploy seamlessly across serverless edge networks, containers, and traditional hosting providers with zero friction.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href="#contact">Get Started</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
