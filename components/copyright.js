import {colors,
    CssBaseline,
    ThemeProvider,
    Typography,
    Container,
    makeStyles,
    createMuiTheme,
    Box,
    SvgIcon,
    Link,} from "@material-ui/core";


export default function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        {'Creative Wonders Digital.'}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  };