import PropTypes from "prop-types";
import { useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField'
import {filterValue} from '../../redux/contacts/actions';
import { getFilter } from '../../redux/auth/selectors';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch()

  const changeFilter = useCallback ( e => {
    dispatch(filterValue(e.target.value))
    }, [dispatch]);

  return (
  <>
    <TextField
    label='Find contact by name'
    type='search'
    value={value}
    onChange={changeFilter} />
  </>
  )
};

 Filter.propTypes = {
   value: PropTypes.string,
   onChange: PropTypes.func,
 };
export default Filter
