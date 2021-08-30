import { withStyles } from '@material-ui/core/styles';
import { Tabs } from '@material-ui/core';

export default withStyles(theme => ({
  root: {
    color: theme.palette.primary.light,
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: theme.palette.background,

    '& .Mui-selected': {
      backgroundColor: theme.palette.primary.main,
    },

    '& .MuiTab-wrapper': {
      textTransform: 'none',
    }
  },
  
  indicator: {
    display: 'none',
  }
}))(Tabs);