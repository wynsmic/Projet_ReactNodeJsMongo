import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Square extends Component {
 static propTypes () {
    black: PropTypes.bool
  };

  render() {
    const { black } = this.props;
    const fill = black ? 'black' : 'white';

    return (
      <div style={{
        width: '100%',
        height: '50px'
      }}>
        {this.props.children}
      </div>
    );
  }
}

export default Square;