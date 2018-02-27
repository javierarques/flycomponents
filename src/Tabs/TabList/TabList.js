import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

export class TabList extends Component {
  static contextTypes = {
    activeIndex: PropTypes.number.isRequired,
    onSelectTab: PropTypes.func.isRequired
  };

  static propTypes = {
    children: PropTypes.node
  };

  static defaultProps = {
    children: null
  };

  render() {
    const { activeIndex } = this.context;
    const children = Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        isActive: index === activeIndex,
        onSelect: event => {
          event.preventDefault();
          this.context.onSelectTab(index);
        }
      });
    });
    return <div className="TabList">{children}</div>;
  }
}

export default TabList;