import { makeStyles } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';
import InputBase from '@material-ui/core/InputBase';

import Button from './Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: 35,
  },
  input: {
    display: 'inline-block',
    backgroundColor: theme.palette.primary.dark,
  },
  inputBase: {
    color: theme.palette.primary.light,
    fontSize: 12,
    padding: 5,
    margin: 0,
    minWidth: 150,
  },
  clearButton: {
    padding: 8,
    minWidth: 0,
    margin: 0,
    paddingInline: 5,
    boxShadow: 'none'
  }
}));

const SearchBox = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.input}>
        <InputBase className={classes.inputBase} {...props} />
      </div>

      <Button color="primary" variant="contained" className={classes.clearButton}>
        <ClearIcon />
      </Button>
    </div>
  )
}

export default SearchBox;