import React from 'react';
import { connect } from 'react-redux';

class Footer extends React.Component {
  static CLASS_NAME = 'Footer';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <footer className={Footer.CLASS_NAME}>
        <p>XSound maintained by <a href="https://github.com/Korilakkuma" target="_blank" rel="noopener noreferrer">Korilakkuma</a></p>
      </footer>
    );
  }
}

export default connect()(Footer);
