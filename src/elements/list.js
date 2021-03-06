
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const defaultClassName = 'ui list';

const List = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default List;
