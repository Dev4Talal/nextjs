import Copyright from './copyright'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DetailsIcon from '@material-ui/icons/Details';
import InfoIcon from '@material-ui/icons/Info';

import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import en from '../locales/en'
import ar from '../locales/ar'


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  menuItem: {
    fontWeight: 'bolder',
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  nav: {
    align: 'center',
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
}));

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Pricing() {
  const classes = useStyles();

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : ar;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push('/', '/', { locale });
  };

  function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

  return (
    <Container>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            {t.companyName}
          </Typography>
          <nav>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
                <HomeIcon className={classes.icon} />
                <Box display={{ xs: 'none', sm: 'block' }}>
                  {t.Home}
                </Box>
              </Link>
              <Link
                color="inherit"
                href="/"
                onClick={handleClick}
                className={classes.link}
              >
                <DetailsIcon className={classes.icon} />
                <Box display={{ xs: 'none', sm: 'block' }}>
                  {t.ContactUs}
                </Box>
              </Link>
              <Link
                color="inherit"
                href="/"
                onClick={handleClick}
                className={classes.link}
              >
                <InfoIcon className={classes.icon} />
                <Box display={{ xs: 'none', sm: 'block' }}>
                  {t.AboutUs}
                </Box>
              </Link>
            </Breadcrumbs>
          </nav>
          <Select
            onChange={changeLanguage}
            defaultValue={locale}
            className={classes.link}
          >
            <MenuItem className={classes.menuItem} value="en">E</MenuItem>
            <MenuItem className={classes.menuItem} value="ar">ع</MenuItem>
          </Select>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          {t.homeMainTitle}
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          {t.homeMainDescription}
        </Typography>
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