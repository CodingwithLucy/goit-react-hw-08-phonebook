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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: '60px',
          paddingRight: '60px',
          paddingTop: '40px',
        }}
      >
        <span>Contact name</span>
        <span>Phone number</span>
        <span>Action</span>
      </div>
      <ul style={{ padding: 0 }}>
        {contacts.map(({ id, name, number }) => (
          <li key={nanoid()}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: '80px',
                paddingRight: '80px',
              }}
            >
              <span>{name}</span>
              <span>{number}</span>
              <button onClick={() => handleDelete(id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
