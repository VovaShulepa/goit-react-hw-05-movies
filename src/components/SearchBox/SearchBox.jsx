export const SearchBox = ({ onSubmit }) => {
  const submitForm = evt => {
    evt.preventDefault();
    onSubmit(evt.target.elements.query.value);
  };
  return (
    <form onSubmit={submitForm}>
      <input name="query" type="text" placeholder="Search films" />
      <button type="submit">Search</button>
    </form>
  );
};
