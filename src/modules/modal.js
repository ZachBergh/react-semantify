
import React from 'react';

import filter from '../filter';

const stateArray       = ['active'];
const defaultClassName = 'ui modal';

const Basic = React.createClass({

  getInitialState: function() {
    return {
      children: {}
    }
  },

  render: function () {

    const { props: { ...other } } = this;

    return (
      <div {...other} ref="modal" >
        {this.state.children}
      </div>
    );
  },

  componentWillReceiveProps: function (nextProps) {
    this.setState( { children: nextProps.children } );
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
