import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const NOOP = () => {};
const Option = ({
  id,
  isActive = false,
  label,
  onClick = NOOP,
  template,
  value,
  ...otherProps
}) => {
  const optionProps = {
    'aria-label': label,
    'aria-selected': isActive,
    'data-label': label,
    className: classNames('Dropdown-option', { 'is-active': isActive }),
    label,
    onClick,
    role: 'option',
    tabIndex: -1,
    value,
    id: id,
    ...otherProps
  };

  return typeof template === 'function' ? (
    template({ ...optionProps })
  ) : (
    <li {...optionProps}>{label}</li>
  );
};

Option.displayName = 'Option';
Option.propTypes = {
  id: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func,
  template: PropTypes.func,
  value: PropTypes.string.isRequired
};

export default Option;
