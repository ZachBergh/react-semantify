
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const defaultClassName = 'ui form';

const Form = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Form;
