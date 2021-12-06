import * as React from 'react';
import s from "./ContactForm.module.css";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { useAddNewContactMutation, useFetchContactsQuery} from '../../redux/auth/slices';

function ContactForm () {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [addContact] = useAddNewContactMutation();
  const contacts = useFetchContactsQuery();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
    }
  };

  const addNewContact = (obj) => {
    const sameName = contacts.data.map((el) => el.name).includes(obj.name);
    if (sameName) {
   alert(`${obj.name} is already in contacts!`);
    } else {
      dispatch(addContact({...obj}, obj.id));
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = { name, number };
    addNewContact(contact)
    reset()
  };

  const reset = ()=> {
    setName("");
    setNumber("");
  }

  return (
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label} htmlFor={name.id}>
          Name
        </label>
        <input
          id={name.id}
          onChange={handleChange}
          className={s.input}
          type="text"
          name="name"
          value={name}
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <label className={s.label} htmlFor={number.id}>
          Number
        </label>
        <input
          id={number.id}
          onChange={handleChange}
          className={s.input}
          type="tel"
          name="number"
          value={number}
          placeholder="Enter number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать обелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <Button type="submit" variant="outlined">add</Button>
      </form>
  );
}

export default ContactForm
