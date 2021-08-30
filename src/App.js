import { Provider } from 'react-redux';
import { makeStyles, Tab } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';

import Panel from './components/Panel';
import CurrencyTable from './components/CurrencyTable';
import Tabs from './components/Tabs';
import store from './store/store';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background,
    paddingBottom: 60,
    color: theme.palette.primary.light,
    minHeight: '100%',
    boxSizing: 'border-box',
  },

  container: {
    maxWidth: 1000,
    marginInline: 'auto',
    padding: 10,
    boxSizing: 'border-box',
    paddingTop: 50,
  },

  currencyTable: {
    marginTop: 10,
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <div className={classes.root}>
        <div className={classes.container}>
          <Panel />

          <CurrencyTable className={classes.currencyTable} />
        </div>

        <Tabs variant="fullWidth" value={0}>
          <Tab label="Chart" />
          <Tab label="Book" />
          <Tab label="Trade" />
          <Tab label={<AppsIcon />} />
        </Tabs>
      </div>
    </Provider>
  );
}

export default App;
