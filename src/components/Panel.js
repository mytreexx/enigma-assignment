import { makeStyles, MenuItem } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';

import Button from './Button';
import SearchBox from './SearchBox';
import Select from './Select';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',

    '& > div': {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      marginBottom: 5,
    }
  },

  sortIcon: {
    marginLeft: 20,
    marginRight: 10,
    color: theme.palette.primary.light,
  }
}));

const Panel = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Button variant="contained" color="primary">Kraken markets</Button>
        <Button variant="contained" color="primary">BTC markets</Button>
        <Button variant="contained" color="primary">Watchlist</Button>
      </div>

      <div>
        <SearchBox placeholder="Search all markets" />

        <SortIcon className={classes.sortIcon} />

        <Select label="Number of pairs">
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="5">5</MenuItem>
          <MenuItem value="10">10</MenuItem>
        </Select>
      </div>
    </div>
  )
}

export default Panel;