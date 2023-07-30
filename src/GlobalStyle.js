// src/GlobalStyles.js
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  '@global': {
    body: {
      margin: 0,
      padding: 0,
      fontFamily: 'Roboto, sans-serif',
    },
  },
});

const GlobalStyles = () => {
  useStyles();
  return null;
};

export default GlobalStyles;
