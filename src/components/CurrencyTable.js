import { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import StarIcon from '@material-ui/icons/Star';
import classNames from 'classnames/bind';

import { LOAD_CURRENCIES, CURRENCIES_LOADED } from '../store/actions';
import dummyCurrneciesData from '../data.json';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTableCell-root': {
      border: 'none',
      padding: 5,
      color: theme.palette.primary.light,
    }
  },
  currencyName: {
    borderTop: `1px solid ${theme.palette.primary.light}`,

    '& .MuiTableCell-root': {
      paddingTop: 10,
    }
  },

  exchangeRate: {
    textAlign: 'right',
  },

  change: {
    textAlign: 'center',
  },

  positive: {
    color: theme.palette.primary.positive,
  },

  negative: {
    color: theme.palette.primary.negative,
  },

  watchers: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  star: {
    color: theme.palette.primary.disabled,
    marginLeft: 5,
  },

  watched: {
    background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(224,153,35,0.25) 99%)',

    '& $star': {
      color: '#e09923',
    }
  }
}));

const CurrencyTable = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currencies = useSelector(state => state.currencies)
  const isLoading = useSelector(state => state.isLoading)

  useEffect(() => {
    // Instead of an API call...
    dispatch({ type: LOAD_CURRENCIES })
    setTimeout(() => {
      dispatch({ type: CURRENCIES_LOADED, payload: dummyCurrneciesData })
    }, 1000)
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        Loading currencies...
      </div>
    )
  }

  if (!currencies) {
    return null;
  }

  return (
    <div {...props}>
      <Table className={classes.root}>
        <TableBody>
          {currencies.map((currency) => (
            <Fragment key={currency.name}>
              <TableRow key={currency.name} className={classes.currencyName}>
                <TableCell colSpan={5}>
                  {currency.name.toUpperCase()}
                </TableCell>
              </TableRow>

              {currency.prices.map((otherCurrency) => (
                <TableRow key={currency.name + otherCurrency.name} className={classNames({ [classes.watched]: otherCurrency.watched })}>
                  <TableCell>
                    {currency.name.toUpperCase()}{otherCurrency.name.toUpperCase()}
                  </TableCell>
                  <TableCell className={classes.exchangeRate}>
                    {otherCurrency.exchangeRate}
                  </TableCell>
                  <TableCell className={classes.change}>
                    <div className={otherCurrency.change > 0 ? classes.positive : classes.negative}>
                      {otherCurrency.change}%
                </div>
                  </TableCell>
                  <TableCell className={classes.watchers}>
                    {otherCurrency.watchers}

                    <StarIcon className={classes.star} />
                  </TableCell>
                </TableRow>
              ))}
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default CurrencyTable;