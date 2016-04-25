
import React from 'react';

import filter from '../filter';

const stateArray       = ['active'];
const defaultClassName = 'ui modal';

const Basic = React.createClass({

  render: function () {

    const { props: { children, ...other } } = this;

    return (
      <div {...other} ref="modal" >
        {children}
      </div>
    );
  }
});

const Modal = new filter(Basic)
  .stateFilter(stateArray)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Modal;
