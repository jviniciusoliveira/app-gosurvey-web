import { createMuiTheme } from '@material-ui/core';
import { cyan } from '@material-ui/core/colors';

const defaultTheme = createMuiTheme({
  palette: {
    background: {
      default: '#fafafa',
      paper: '#fafafa',
    },
    primary: {
      main: cyan['500'],
    },
  },
});

export default defaultTheme;
