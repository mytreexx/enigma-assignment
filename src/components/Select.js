import { Select as SelectMUI, FormControl, makeStyles, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  select: {
    minWidth: '150px',
    color: theme.palette.primary.light,

    '& .MuiSelect-icon': {
      color: theme.palette.primary.light,
    }
  }
}));

const Select = ({ children, label, ...props }) => {
  const classes = useStyles();

  return (
    <FormControl>
      <SelectMUI className={classes.select} value="-1" disableUnderline {...props}>
        <MenuItem disabled value="-1">{label}</MenuItem>
        {children}
      </SelectMUI>
    </FormControl>
  )
}

export default Select;