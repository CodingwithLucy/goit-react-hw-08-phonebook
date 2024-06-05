import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../contactsSlice.js';
import { nanoid } from 'nanoid';
import axios from 'axios';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = Array.isArray(contacts)
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  const handleDelete = async contactId => {
    dispatch(deleteContact(contactId));
    try {
      await axios.delete(
        `https://connections-api.herokuapp.com/api/contacts/${contactId}`
      );
      console.log('Contact deleted successfully:', contactId);
    } catch (error) {
      console.error('Error deleting contact:', error.message);
    }
  };

  return (
    <div>
      <ul className="contact-list">
        {filteredContacts.map(contact => (
          <li key={nanoid()} className="contact-list-item">
            {contact.name}: {contact.number}
            <button onClick={() => handleDelete(contact.id)}>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
