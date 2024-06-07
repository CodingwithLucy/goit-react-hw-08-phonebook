import React from 'react';
import { selectFilter } from '../../redux/contacts/selectors.js';
import { useGetContactsQuery } from '../../redux/contacts/contactsSlice.js';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { useDeleteContactMutation } from '../../redux/contacts/contactsSlice.js';

const contactsFiltration = (contacts = [], filter = '') => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(normalizedFilter) ||
      number.includes(normalizedFilter)
  );
};

const ContactList = () => {
  const filter = useSelector(selectFilter);
  const { data, isLoading } = useGetContactsQuery();
  const contacts = contactsFiltration(data, filter);
  const [deleteContact] = useDeleteContactMutation();

  const handleDelete = id => {
    deleteContact(id);
  };

  if (isLoading) {
    return <h2 style={{ textAlign: 'center' }}>loading...</h2>;
  }

  return (
    <>
      {isLoading && <h2>loading...</h2>}
      <div>
        <span>Name:</span>
        <span>Phone:</span>
      </div>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={nanoid()}>
            <span>{name}:</span>
            <span>{number}</span>
            <button onClick={() => handleDelete(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
