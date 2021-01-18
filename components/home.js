import Copyright from './copyright'
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Image from 'next/image'

import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import en from '../locales/en'
import ar from '../locales/ar'
import Nav from './nav';
import { Paper } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

const post = {
  title: 'Featured post',
  date: 'Nov 12',
  description:
    'This is a wider card with supporting text below as a natural lead-in to additional content.',
  image: 'https://pixabay.com/get/54e0d6414355a914f6d1867dda353678143fd7ed50597440_1920.jpg',
  imageText: 'Image Text',
}

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Home() {
  const classes = useStyles();

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : ar;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push('/', '/', { locale });
  };

  return (
    <Container>
      <CssBaseline />
      <Nav />
      {/* Hero unit */}
      <Container component="main" className={classes.heroContent}>
        <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${post.image})` }}>
          {/* Increase the priority of the hero background image */}
          {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
          <div className={classes.overlay} />
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturedPostContent}>
                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                  {t.homeMainTitle}
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                  {t.homeMainDescription}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      {/* End hero unit */}
      
           {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          <Grid item xs={12} sm={6} key={'footer.title'}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              {'connections to social media'}
            </Typography>
            <ul>
              <li key={'item'}>
                  <Link href="#" variant="subtitle1" color="textSecondary">
                    {'item'}
                  </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
      </Container>
  );
}