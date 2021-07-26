import {
  createTheme
} from '@material-ui/core/styles';

const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#074365',
    },
    secondary: {
      main: '#22b14c',
    },
  },
};

export default createTheme(themeOptions);