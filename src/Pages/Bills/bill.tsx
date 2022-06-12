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
      <BillsD bills={bills} />
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
          "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex justify-center items-center bg-black/80 shadow"
        }
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-black rounded-lg shadow dark:bg-gray-700">
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
      <div>
        <h1 className="text-white text-xl font-bold">
          Bills and Montly Payments
        </h1>
        <UserBills bills={this.state.bills} />
        <Modal />
      </div>
    );
  }
}
