import React from 'react';

import classes from './Search.module.scss';
import Input from '../../Form/Input';
import sprite from '../../../../assets/img/header-sprite.svg';

const Search = function (props) {
  return (
    <form
      id="search"
      className={`${props.className} ${classes.search}`}
      action=""
    >
      <Input
        type="search"
        placeholder="Search"
        name="search"
        id="search-input"
      />
      <button className={classes.search__submit} type="submit">
        <svg className={classes.search__icon}>
          <use xlinkHref={`${sprite}#icon-search`}></use>
        </svg>
      </button>
    </form>
  );
};

export default Search;
