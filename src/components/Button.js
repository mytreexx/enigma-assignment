import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

export default withStyles({
  root: {
    textTransform: 'none',
    padding: 5,
    paddingInline: 10,
    borderRadius: 0,
    marginRight: 5,
  }
})(Button);