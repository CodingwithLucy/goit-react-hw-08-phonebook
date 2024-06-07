import { useGetContactsQuery } from '../../redux/contacts/contactsSlice.js';
import ContactList from '../ContactList/ContactList.jsx';
import Filter from '../Filter/Filter.jsx';

const Contacts = () => {
  const { data = [], isFetching } = useGetContactsQuery();

  if (data.length <= 0) {
    return (
      <div style={{ width: '45%', border: 'none' }}>
        <h2>Please, add first contact</h2>
      </div>
    );
  }

  return (
    <div style={{ minWidth: '600px', maxWidth: '45%' }}>
      <Filter />
      <div style={{ position: 'relative', width: '100%' }}>
        <h2>Contacts</h2>
        <div style={{ position: 'absolute', top: 10, right: 0 }}>
          {data.length} contacts
        </div>
        {isFetching && (
          <div
            style={{
              color: 'grey',
              position: 'absolute',
              right: '50%',
              transform: 'translate(50%,30%)',
            }}
          >
            Loading...
          </div>
        )}
      </div>
      <ContactList />
    </div>
  );
};

export default Contacts;
