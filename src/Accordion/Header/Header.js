import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ children, setActive }) => (
  <header className="Accordion-sectionHeader" onClick={setActive}>
    <h3 className="Accordion-sectionTitle">{children}</h3>
  </header>
);

Header.propTypes = {
  children: PropTypes.node,
  setActive: PropTypes.func
};

export default Header;