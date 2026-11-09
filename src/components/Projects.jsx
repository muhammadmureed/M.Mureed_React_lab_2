import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import GitHubIcon from '@mui/icons-material/GitHub'

export default function Projects() {
  const projects = [
    {
      title: 'React Fundamentals Lab',
      description: 'A modular, component-based web application constructed using React, Vite, and Material UI with complete mobile responsiveness.',
      tags: ['React', 'Vite', 'Material UI'],
      github: 'https://github.com/muhammadmureed/M.Mureed_React_lab_2',
    },
    {
      title: 'Web Engineering Lab Work',
      description: 'A collection of core web projects featuring semantic HTML5 structure, CSS3 Flexbox/Grid layouts, and modern JavaScript interactivity.',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/muhammadmureed/Web_Lab_Work',
    },
    {
      title: 'Sleep Disorder Classifier',
      description: 'An applied machine learning model classifying patient health indicators and sleep patterns using scientific Python libraries.',
      tags: ['Python', 'Machine Learning', 'Data Science'],
      github: 'https://github.com/muhammadmureed/sleep_disorder_classification',
    },
  ]

  return (
    <Box component="section" id="projects" sx={{ py: { xs: 6, md: 10 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="overline" color="primary" fontWeight="bold" letterSpacing={1}>
            PORTFOLIO
          </Typography>
          <Typography variant="h4" component="h2" fontWeight="bold" sx={{ mt: 1 }}>
            Featured Projects
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 600, mx: 'auto' }}>
            A showcase of my recent coursework, web applications, and programming projects.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid key={project.title} size={{ xs: 12, md: 4 }}>
              <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2 }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {project.tags.map((tag) => (
                      <Chip key={tag} label={tag} size="small" variant="outlined" color="primary" />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    size="small"
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
