import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import CodeIcon from '@mui/icons-material/Code'
import StorageIcon from '@mui/icons-material/Storage'
import BuildIcon from '@mui/icons-material/Build'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <CodeIcon color="primary" fontSize="large" />,
      skills: 'React.js, JavaScript (ES6+), HTML5, CSS3, Material UI, Responsive Design',
    },
    {
      title: 'Programming & Data',
      icon: <StorageIcon color="primary" fontSize="large" />,
      skills: 'Python, C++, Data Structures, Algorithms, Machine Learning Basics',
    },
    {
      title: 'Tools & Workflow',
      icon: <BuildIcon color="primary" fontSize="large" />,
      skills: 'Git, GitHub, Vite, npm, VS Code, CI/CD with GitHub Actions',
    },
  ]

  return (
    <Box component="section" id="skills" sx={{ py: { xs: 6, md: 10 }, bgcolor: '#f9fafb' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="overline" color="primary" fontWeight="bold" letterSpacing={1}>
            CAPABILITIES
          </Typography>
          <Typography variant="h4" component="h2" fontWeight="bold" sx={{ mt: 1 }}>
            Technical Skills
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 600, mx: 'auto' }}>
            Technologies and tools I work with to build robust software.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {skillCategories.map((cat) => (
            <Grid key={cat.title} size={{ xs: 12, md: 4 }}>
              <Paper variant="outlined" sx={{ p: 4, height: '100%', textAlign: 'center', borderRadius: 2 }}>
                <Stack spacing={2} alignItems="center">
                  {cat.icon}
                  <Typography variant="h6" fontWeight="bold">
                    {cat.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {cat.skills}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
