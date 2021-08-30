import { createTheme } from '@material-ui/core/styles';

export default createTheme({
  palette: {
    primary: {
      main: '#1e2a64',
      contrastText: '#b9c4e0',
      dark: '#111a3b',
      light: '#f4f4f4',
      positive: '#3a8858',
      negative: '#8f2033',
      disabled: '#373737',
    },
    background: '#000',
  },
  typography: {
    fontFamily: 'Roboto Mono',
    fontSize: 12
  }
});