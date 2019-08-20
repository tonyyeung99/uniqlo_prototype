import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./AppFooter.css";
import pollIcon from "../poll.svg";
import { Layout, Menu, Dropdown, Icon } from "antd";
const Footer = Layout.Footer;

class AppFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let menuItems;

    menuItems = [
      <Menu.Item key="/">
        <Link to="/">
          <Icon type="menu" className="nav-icon" />
        </Link>
      </Menu.Item>,
      <Menu.Item key="/">
        <Link to="/">
          <Icon type="customer-service" className="nav-icon" />
        </Link>
      </Menu.Item>,
      <Menu.Item key="/" className="nav-icon">
        <Link to="/">
          <Icon type="shop" className="nav-icon" />
        </Link>
      </Menu.Item>,
      <Menu.Item key="/" className="nav-icon">
        <Link to="/">
          <Icon type="shopping" className="nav-icon" />
        </Link>
      </Menu.Item>,
      <Menu.Item key="/" className="nav-icon">
        <Link to="/">
          <Icon type="user" className="nav-icon" />
        </Link>
      </Menu.Item>
    ];

    return (
      <Footer className="app-footer">
        <div className="container">
          <Menu
            className="app-menu"
            mode="horizontal"
            style={{ lineHeight: "64px" }}
          >
            {menuItems}
          </Menu>
        </div>
      </Footer>
    );
  }
}

export default withRouter(AppFooter);
