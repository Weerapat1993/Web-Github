import React, { Component,PropTypes } from 'react';
import { Link,IndexLink } from 'react-router';

class NavLink extends Component {

  static propTypes = {
    to: PropTypes.string,
    onlyActiveOnIndex: PropTypes.bool,
    children: PropTypes.node
  };

  // pull in the router context
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  render() {
    // determine if the route is active, router.isActive function
    // receives the "to" and onlyActiveOnIndex props
    const isActive = this.context.router.isActive(this.props.to, this.props.onlyActiveOnIndex);

    // if onlyActiveOnIndex is passed then IndexLink is used, else just Link
    const LinkComponent = this.props.onlyActiveOnIndex ? IndexLink : Link;

    // add the bootstrap active class to the active links containing <li>
    const className = isActive ? 'active' : '';

    return (
        <li className={className}>
            <LinkComponent {...this.props}>
                {this.props.children}
            </LinkComponent>
        </li>
    );
  }
}

export default NavLink;
