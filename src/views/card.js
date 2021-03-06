
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const defaultClassName = 'ui card';

const Card = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Card;
