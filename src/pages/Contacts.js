import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm.jsx';
import Filter from '../components/Filter/Filter.jsx';
import ContactList from '../components/ContactList/ContactList.jsx';

const Contacts = () => {
  return (
    <div>
      <h1>PHONEBOOK</h1>
      <ContactForm />
      <h2>CONTACT LIST</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;
