import React from 'react';

import classes from './Filter.module.scss';
import FormCell from '../Form/FormCell';
import Label from '../Form/Label';
import { Select } from '../Form/Input';
import Input from '../Form/Input';

const OPTIONS = [
  { name: 'All Platforms', value: 'all' },
  { name: 'Linux', value: 'linux' },
  { name: 'Mac', value: 'mac' },
  { name: 'PC (Microsoft Windows)', value: 'win' },
  { name: 'Play Station 3', value: 'ps3' },
  { name: 'Play Station 4', value: 'ps4' },
  { name: 'Wii U', value: 'wiiu' },
  { name: 'Xbox 360', value: 'xbox360' },
  { name: 'Xbox One', value: 'xboxone' },
];

const Filter = function () {
  return (
    <form action="" method="" className={classes.filter}>
      <FormCell>
        <Label id="top-platform-filter">Platform:</Label>
        <Select
          name="top_filter"
          id="top-platform-filter"
          options={OPTIONS}
        ></Select>
      </FormCell>
      <FormCell>
        <Label id="top_from_year">From Year:</Label>
        <Input
          name="top_filter"
          id="top_from_year"
          placeholder="1900"
          type="text"
          value="1900"
        ></Input>
      </FormCell>
      <FormCell>
        <Label id="top_to_year">To Year:</Label>
        <Input
          name="top_filter"
          id="top_to_year"
          placeholder="YYYY"
          type="text"
          value="2023"
        ></Input>
      </FormCell>
    </form>
  );
};

export default Filter;
