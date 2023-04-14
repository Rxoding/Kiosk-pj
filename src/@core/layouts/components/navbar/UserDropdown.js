// ** React Imports
import { Link, json } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";

import React, { useState } from "react";

// ** Custom Components
import Avatar from "@components/avatar";

// ** Third Party Components
import {
  User,
  Mail,
  CheckSquare,
  MessageSquare,
  Settings,
  CreditCard,
  HelpCircle,
  Power,
} from "react-feather";

// ** Reactstrap Imports
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";

// ** Default Avatar Image
import defaultAvatar from "@src/assets/images/portrait/small/avatar-s-11.jpg";

const UserDropdown = () => {
  const [EditBtn, setEditBtn] = React.useState(false);
  const onClick = () => {
    setEditBtn((current) => !current);
  };
  const logout = () => {
    sessionStorage.removeItem("user");
  };
  localStorage.setItem("edit", EditBtn);
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (!user) {
    // 세션 스토리지에 값이 없는 경우
    return null; // 렌더링하지 않음
  }
  const name = user[0].names;
  const nickname = user[0].nicknames;
  return (
    <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
      <DropdownToggle
        href="/"
        tag="a"
        className="nav-link dropdown-user-link"
        onClick={(e) => e.preventDefault()}
      >
        <div className="user-nav d-sm-flex d-none">
          <span className="user-name fw-bold">{name}</span>
          <span className="user-status">{nickname}</span>
        </div>
        <Avatar
          img={defaultAvatar}
          imgHeight="40"
          imgWidth="40"
          status="online"
        />
      </DropdownToggle>
      <DropdownMenu end>
        <DropdownItem tag={Link} to="/" onClick={(e) => e.preventDefault()}>
          <User size={14} className="me-75" />
          <span className="align-middle">Profile</span>
        </DropdownItem>

        <DropdownItem tag={Link} to="/home" onClick={onClick}>
          <Settings size={14} className="me-75" />
          <span className="align-middle">
            {EditBtn ? "저장하기" : "수정하기"}
          </span>
        </DropdownItem>

        <DropdownItem tag={Link} to="/login" onClick={logout}>
          <Power size={14} className="me-75" />
          <span className="align-middle">Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default UserDropdown;
