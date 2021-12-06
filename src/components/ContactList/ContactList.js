import s from "./ContactList.module.css";
import { useSelector } from 'react-redux';
import PropTypes from "prop-types";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import {useFetchContactsQuery,useDeleteContactMutation} from '../../redux/auth/slices';
 import { getFilter } from '../../redux/auth/selectors';


const ContactList = () => {
  const contacts = useFetchContactsQuery();
  const value = useSelector(getFilter);
  const [deleteContact] = useDeleteContactMutation();
  let normalizedFilter = value.toLowerCase();

 const handleDelete =(e)=> {
   deleteContact(e.target.id)

 }
 return (
   <ul className={s.list}>
     {contacts.data
     .filter((contact) =>
          contact.name.toLowerCase().includes(normalizedFilter)
          )
     .map(({id, name, number}) => (
     <li key={id} className={s.item}>
          <p className={s.text}>{name + " : " + number}</p>
         <Button id= {id}
         variant="none"
         startIcon={<DeleteIcon/>}
         onClick={handleDelete}
         >del</Button>
       </li>
     ))}
   </ul>
 )
 };

  ContactList.propTypes = {
    onDeleteContact: PropTypes.func,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      })
    ),
  };
export default ContactList
