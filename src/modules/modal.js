
import React from 'react';

import filter from '../filter';

const stateArray       = ['active'];
const defaultClassName = 'ui modal';

const Basic = React.createClass({

  getInitialState: function() {
    return {
      props: {}
    }
  },

  render: function () {

    const { state: { props } } = this;
    const { children, ...other } = props

    return (
      <div {...other} ref="modal" >
        {children}
      </div>
    );
  },

  componentWillReceiveProps: function (nextProps) {
    this.setState( { props: nextProps } );
  },

  componentDidMount: function () {

    const { props: { init = false } } = this;
    if (init === false) {
      return;
    }

    if (init === true) {
      $(this.refs.modal).modal();
    } else {
      $(this.refs.modal).modal(init);
    }
  }
});

const Modal = new filter(Basic)
  .stateFilter(stateArray)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Modal;
