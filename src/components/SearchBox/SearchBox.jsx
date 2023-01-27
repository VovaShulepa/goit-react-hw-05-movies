import css from './SearchBox.module.css';

export const SearchBox = ({ onSubmit }) => {
  const submitForm = evt => {
    evt.preventDefault();

    onSubmit(evt.target.elements.query.value);
  };

  return (
    <form onSubmit={submitForm} className={css.form}>
      <input
        className={css.input}
        name="query"
        type="text"
        placeholder="Search films"
      />
      <button className={css.btn} type="submit">
        Search
      </button>
    </form>
  );
};
