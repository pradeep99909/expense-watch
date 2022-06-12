import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMoneyBill,
  faAddressBook,
  faGear,
  faTable,
} from "@fortawesome/free-solid-svg-icons";

class ProfileViewer extends React.Component {
  render() {
    return (
      <div id="profile-viewer" className="flex flex-col mt-10 pl-4">
        <img
          alt="profile"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d"
          className="m-2 w-10 h-10 rounded-full"
        ></img>
        <h3 className="mt-2">Fname Lname</h3>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div id="option-viewer" className="flex flex-col mt-10 pl-4">
        <Link
          to="/expense"
          className="h-10 items-center text-md font-semibold flex w-40"
        >
          <FontAwesomeIcon icon={faTable} className="w-4 h-4" />
          <p className="pl-2">Expense</p>
        </Link>
        <Link
          to="/profile"
          className="h-10 items-center text-md font-semibold flex w-40"
        >
          <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
          <p className="pl-2">Profile</p>
        </Link>
        <Link
          to="/account"
          className="h-10 items-center text-md font-semibold flex w-40"
        >
          <FontAwesomeIcon icon={faAddressBook} size="sm" className="w-4 h-4" />{" "}
          <p className="pl-2">Accounts</p>
        </Link>
        <Link
          to="/bills"
          className="h-10 items-center text-md font-semibold flex w-40"
        >
          <FontAwesomeIcon icon={faMoneyBill} className="w-4 h-4" />
          <p className="pl-2">Monthly Pay</p>
        </Link>
        <Link
          to="/settings"
          className="h-10 items-center text-md font-semibold flex w-40"
        >
          <FontAwesomeIcon icon={faGear} className="w-4 h-4" />
          <p className="pl-2">Settings</p>
        </Link>
      </div>
    );
  }
}

class Contents extends React.Component {
  render() {
    return (
      <div
        id="content-viewer"
        className="pl-2 text-slate-100 font-light text-sm justify-self-end mt-auto mb-0 ml-auto mr-auto"
      >
        <p>v1.0</p>
      </div>
    );
  }
}

export default class Profile extends React.Component {
  render() {
    return (
      <div
        id="profile-component"
        className="h-full w-1/6 text-white flex flex-col left-0 top-0 bottom-0 fixed bg-black"
      >
        <ProfileViewer />
        <Options />
        <Contents />
      </div>
    );
  }
}
