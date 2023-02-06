import PropTypes from 'prop-types';

export function Searchbar({ onSubmit }) {
    return (
<header className="searchbar">
  <form className="form" onSubmit={onSubmit}>
   
    <button type="submit" className="button">
      <span className="button-label">Search</span>
    </button>

    <input
      className="input"
      type="text"
      name="query"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
    )
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}