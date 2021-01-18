
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
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
}));

export default function Nav() {
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
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
        <Box display={{ xs: 'block', sm: 'none' }}>
          {t.companyNameShort}
        </Box>
        <Box display={{ xs: 'none', sm: 'block' }}>
          {t.companyName}
        </Box>
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
  );
}