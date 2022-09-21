import React, { useState, useContext, createContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BillModel from "./interface";
import DB from "../../LocalDB/db";
import {
  faAdd,
  faEdit,
  faTrash,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";

const Database = new DB();

interface IMyComponentProps {
  bills: any;
}

interface IMyComponentState {
  bills: any;
  name: string;
  type: string;
  amount: number;
  active: boolean;
}

function BillsD(props: any) {
  if (props.bills.length > 0) {
    return (
      <div className="container flex justify-center mx-auto mt-5">
        <div className="flex flex-col">
          <div className="w-full">
            <div className="shadow">
              <table className="">
                <thead>
                  <tr>
                    <th className="text-white text-sm text-left w-20">Name</th>
                    <th className="text-white text-sm text-left w-20">Type</th>
                    <th className="text-white text-sm text-left w-20">
                      Amount
                    </th>
                    <th className="text-white text-sm text-left w-20">Edit</th>
                    <th className="text-white text-sm text-left w-20">
                      Delete
                    </th>
                    <th className="text-white text-sm text-left w-20">
                      Active
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {props.bills.map((bill: BillModel) => {
                    return (
                      <tr className="whitespace-nowrap">
                        <td className="text-white text-sm text-left py-2">
                          <div className="text-sm text-white">{bill.name}</div>
                        </td>
                        <td className="text-white text-sm text-left py-2">
                          <div className="text-sm text-white">{bill.type}</div>
                        </td>
                        <td className="text-white text-sm text-left py-2 text-sm text-white">
                          {bill.amount}
                        </td>
                        <td className="text-white text-sm text-left py-2">
                          <FontAwesomeIcon
                            icon={faEdit}
                            className="text-slate-50 w-4 h-4 cursor-pointer"
                          />
                        </td>
                        <td className="text-white text-sm text-left py-2">
                          <FontAwesomeIcon
                            icon={faTrash}
                            className="text-slate-50 w-4 h-4 cursor-pointer"
                          />
                        </td>
                        <td className="text-white text-sm text-left py-2">
                          <FontAwesomeIcon
                            icon={faToggleOn}
                            className="text-slate-50 w-4 h-4 cursor-pointer"
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

const Modal = () => {
  const [display, setDisplay] = useState("hidden ");
  const [bills, setBills] = useState<BillModel[]>([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState(0);
  return (
    <div>
      {
        bills.length ? <BillsDisplay bills={bills} /> : null
      }
      <button
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(30,58,138,1) 0%, rgba(30,64,175,1) 10%, rgba(29,78,216,1) 100%, rgba(37,99,235,1) 100%)",
        }}
        onClick={() => setDisplay("")}
        className="block text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
        type="button"
      >
        <FontAwesomeIcon icon={faAdd} />
        &nbsp; Add
      </button>
      <div
        id="authentication-modal"
        className={
          display +
          "dark overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex justify-center items-center bg-black/80 shadow"
        }
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-black-200 rounded-lg shadow dark:bg-gray-700">
            <button
              onClick={() => setDisplay("hidden ")}
              type="button"
              className="absolute top-3 right-2.5 text-white bg-transparent hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-100 dark:text-white">
                Add Bills and Montly payment
              </h3>
              <form className="space-y-6" action="#">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-100 dark:text-gray-300">
                    Bill or Payment
                  </label>
                  <input
                    maxLength={20}
                    type="text"
                    name="name"
                    id="name"
                    className="bg-black border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="eg: Credit Card"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-100 dark:text-gray-300">
                    Type
                  </label>
                  <select
                    className="text-sm font-medium"
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                    required
                  >
                    <option className="w-10 py-2">Loan</option>
                    <option className="w-10 py-2">Credit Card</option>
                    <option className="w-10 py-2">Subscribtion</option>
                    <option className="w-10 py-2">Bill</option>
                    <option className="w-10 py-2">Others</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-100 dark:text-gray-300">
                    Amount
                  </label>
                  <input
                    type="number"
                    name="amount"
                    id="password"
                    placeholder="eg: 700"
                    className="bg-black border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    onChange={(e) => {
                      setAmount(parseInt(e.target.value));
                    }}
                    required
                  />
                </div>
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, rgba(30,58,138,1) 0%, rgba(30,64,175,1) 10%, rgba(29,78,216,1) 100%, rgba(37,99,235,1) 100%)",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    setDisplay("hidden ");
                    setBills([
                      ...bills,
                      {
                        name,
                        type,
                        amount,
                      },
                    ]);
                    setName("");
                    setAmount(0);
                    setType("");
                  }}
                  type="submit"
                  className="w-full text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

class UserBills extends React.Component<IMyComponentProps, IMyComponentState> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.bills.map((bill: BillModel, index: number) => {
          return (
            <div>
              <p className="text-white">{bill.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

class BillsDisplay extends React.Component<IMyComponentProps, IMyComponentState> {
  state: Readonly<IMyComponentState>;
  modalRef: any
  constructor(props: any) {
    super(props);
    this.state = {
      bills: [],
      name: "",
      type: "",
      amount: 0,
      active: false
    }
    this.modalRef = React.createRef();
  }

  openEditor(e: any, index: number): any {
    this.modalRef.current.style.display = "flex"
    this.setState((prevState: any) => ({
      ...prevState,
      name: this.props.bills[index].name,
      type: this.props.bills[index].type,
      amount: this.props.bills[index].amount,
      active: this.props.bills[index].active
    }))
  }

  render() {
    return (
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg dark mt-10">
        <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800">
          <div>
            <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Action button</span>
              Action
              <svg className="ml-2 w-3 h-3" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div id="dropdownAction" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
              <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                <li>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                </li>
              </ul>
              <div className="py-1">
                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
              </div>
            </div>
          </div>
          <label htmlFor="table-search" className="sr-only">Search</label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input type="text" id="table-search-users" className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
          </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                </div>
              </th>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Type
              </th>
              <th scope="col" className="py-3 px-6">
                Amount
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.bills.map((bill: BillModel, key: any) => {
                return (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="p-4 w-4">
                      <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                      </div>
                    </td>
                    <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                      {/* <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image" /> */}
                      <div className="pl-3">
                        <div className="text-base font-semibold">{bill.name}</div>
                      </div>
                    </th>
                    <td className="py-4 px-6">
                      {bill.type}
                    </td>
                    <td className="py-4 px-6">
                      {bill.amount}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Active
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <a href="#" type="button" onClick={(e) => {
                        this.openEditor(e, key)
                      }} data-modal-toggle="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                    </td>
                  </tr>
                )
              })
            }
            {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                </div>
              </td>
              <th scope="row" className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image" />
                <div className="pl-3">
                  <div className="text-base font-semibold">Bonnie Green</div>
                  <div className="font-normal text-gray-500">bonnie@flowbite.com</div>
                </div>
              </th>
              <td className="py-4 px-6">
                Designer
              </td>
              <td className="py-4 px-6">
                1200
              </td>
              <td className="py-4 px-6">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Online
                </div>
              </td>
              <td className="py-4 px-6">
                <a href="#" type="button" data-modal-toggle="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                </div>
              </td>
              <th scope="row" className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Jese image" />
                <div className="pl-3">
                  <div className="text-base font-semibold">Jese Leos</div>
                  <div className="font-normal text-gray-500">jese@flowbite.com</div>
                </div>
              </th>
              <td className="py-4 px-6">
                Vue JS Developer
              </td>
              <td className="py-4 px-6">
                200
              </td>
              <td className="py-4 px-6">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Online
                </div>
              </td>
              <td className="py-4 px-6">
                <a href="#" type="button" data-modal-toggle="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                </div>
              </td>
              <th scope="row" className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Jese image" />
                <div className="pl-3">
                  <div className="text-base font-semibold">Thomas Lean</div>
                  <div className="font-normal text-gray-500">thomes@flowbite.com</div>
                </div>
              </th>
              <td className="py-4 px-6">
                UI/UX Engineer
              </td>
              <td className="py-4 px-6">
                200
              </td>
              <td className="py-4 px-6">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Online
                </div>
              </td>
              <td className="py-4 px-6">
                <a href="#" type="button" data-modal-toggle="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
                </div>
              </td>
              <th scope="row" className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Jese image" />
                <div className="pl-3">
                  <div className="text-base font-semibold">Leslie Livingston</div>
                  <div className="font-normal text-gray-500">leslie@flowbite.com</div>
                </div>
              </th>
              <td className="py-4 px-6">
                SEO Specialist
              </td>
              <td className="py-4 px-6">
                200
              </td>
              <td className="py-4 px-6">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> Offline
                </div>
              </td>
              <td className="py-4 px-6">
                <a href="#" type="button" data-modal-toggle="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
              </td>
            </tr> */}
          </tbody>
        </table>
        <div id="editUserModal" ref={this.modalRef} tabIndex={2} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center p-4 w-full md:inset-0 h-modal md:h-full">
          <div className="relative w-full max-w-2xl h-full md:h-auto">
            <form action="#" className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Edit user
                </h3>
                <button type="button" onClick={() => {
                  this.modalRef.current.style.display = "none"
                }} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="editUserModal">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="text" name="first-name" id="first-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie" required />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                    <input type="text" name="last-name" id="last-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Green" required />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
                    <input type="number" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@company.com" required />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="phone-number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                    <input type="checkbox" name="phone-number" id="phone-number" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. +(12)3456 789" required />
                  </div>
                </div>
              </div>
              <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save all</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default class Bills extends React.Component<
  {},
  { bills: any; display: string }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      bills: [],
      display: "hidden ",
    };
  }

  displayPopUp = () => {
    console.log("displayPopUp :: this.state.display ::", this.state.display);
    this.setState((prevState) => ({
      ...prevState,
      display: "",
    }));
    console.log(
      "displayPopUp :: after this.state.display ::",
      this.state.display
    );
  };

  render() {
    return (
      <div className="w-full h-full bg-black p-10">
        <h1 className="text-white text-xl font-bold">
          Bills and Montly Payments
        </h1>
        {/* <UserBills bills={this.state.bills} /> */}
        <Modal />
        {/* <BillsDisplay bills={this.state.bills} /> */}
      </div>
    );
  }
}
