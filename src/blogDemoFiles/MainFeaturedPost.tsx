import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

interface MainFeaturedPostProps {
  post: {
    description?: string;
    languages: string;
    frameworks: string;
    cloud: string;
    databases: string;
    testing: string;
    other: string;
    image: string;
    imageText: string;
    linkText: string;
    title: string;
  };
}

export default function MainFeaturedPost(props: MainFeaturedPostProps) {
  const { post } = props;

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${post.image})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            {/* <Typography variant="h5" color="inherit" paragraph>
              {post.description}
            </Typography> */}
            <Typography variant="h5" color="inherit" paragraph>
              {post.languages}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.frameworks}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.cloud}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.databases}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.testing}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.other}
            </Typography>
            <Link variant="subtitle1" href="#">
              {post.linkText}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
