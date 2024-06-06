import { useDispatch, useSelector } from 'react-redux';
import { toFilter } from '../../redux/contacts/filterSlice.js';
import { selectFilter } from '../../redux/contacts/selectors.js';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handelFilterChange = e => {
    dispatch(toFilter(e.target.value));
  };

  return (
    <div>
      <span>Find your contact</span>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handelFilterChange}
      />
    </div>
  );
};

export default Filter;
