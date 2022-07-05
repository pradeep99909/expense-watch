import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faChartBar,
  faAdd,
} from "@fortawesome/free-solid-svg-icons";
import { Chart, registerables } from "chart.js";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import listPlugin from "@fullcalendar/list";
import colors from "tailwindcss/colors";
import { AppContext } from "../../Context/provider"
Chart.register(...registerables);

class UserExpenseBanner extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          backgroundImage:
            "linear-gradient(45deg, rgba(30,58,138,1) 0%, rgba(30,64,175,1) 75%, rgba(29,78,216,1) 90%, rgba(37,99,235,1) 100%)",
        }}
        className="flex w-full p-5 rounded-xl justify-between h-fit shadow-md"
      >
        <span className="flex items-center">
          <span>
            <FontAwesomeIcon
              icon={faChartPie}
              color="white"
              className=""
              size="2x"
            />
          </span>
          <span className="ml-4">
            <p className="text-slate-400 font-bold text-xs">TOTAL EXPENSE</p>
            <p className="text-white font-bold text-lg">Rs. 10000</p>
          </span>
        </span>
        <span className="flex items-center">
          <span>
            <FontAwesomeIcon
              icon={faChartBar}
              color="white"
              className=""
              size="2x"
            />
          </span>
          <span className="ml-4">
            <p className="text-slate-400 font-bold text-xs">INCOME</p>
            <p className="text-white font-bold text-lg">Rs. 10000</p>
          </span>
        </span>
        <span className="flex items-center">
          <span>
            <FontAwesomeIcon
              icon={faChartPie}
              color="white"
              className=""
              size="2x"
            />
          </span>
          <span className="ml-4">
            <p className="text-slate-900 font-bold text-xs">TOTAL EXPENSE</p>
            <p className="text-white font-bold text-lg">Rs. 10000</p>
          </span>
        </span>
      </div>
    );
  }
}

class StackedBArChart extends React.Component<{}, { name: string; data: any }> {
  chartReference: any;
  constructor(props: any) {
    super(props);
    this.chartReference = React.createRef();
    this.state = {
      name: "React",
      data: {
        labels: ["Red", "Green", "Blue"],
        datasets: [
          {
            data: [5, 7, 6],
            backgroundColor: ["red", "green", "blue"],
          },
        ],
      },
    };

    setTimeout(() => {
      const chart: any = this.chartReference.current.getContext("2d");

      const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
        datasets: [
          {
            label: "Dataset 1",
            data: [1, 2, 3, 4, 5, 6],
            backgroundColor: colors.blue[900],
            color: "white",
          },
          {
            label: "Dataset 2",
            data: [1, 2, 3, 4, 5, 6],
            backgroundColor: colors.blue[700],
            color: "white",
          },
          {
            label: "Dataset 3",
            data: [1, 2, 3, 4, 5, 6],
            backgroundColor: colors.blue[500],
            color: "white",
          },
        ],
      };

      const options = {
        plugins: {
          legend: {
            labels: {
              color: "white",
              font: {
                size: 14,
              },
            },
          },
          title: {
            display: true,
            text: "Chart.js Bar Chart - Stacked",
            color: "white",
          },
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
            ticks: {
              color: "white",
            },
          },
          y: {
            stacked: true,
            ticks: {
              color: "white",
            },
          },
        },
      };

      new Chart(chart, {
        type: "bar",
        data: data,
        options: options,
      });
      //chart.update();
    }, 2000);
  }

  render() {
    return (
      <div className="w-full md:w-1/2 text-slate-50">
        <canvas ref={this.chartReference} />
      </div>
    );
  }
}

class DoughNutChart extends React.Component<{}, { name: string; data: any }> {
  chartReference: any;
  constructor(props: any) {
    super(props);
    this.chartReference = React.createRef();

    setTimeout(() => {
      const chart: any = this.chartReference.current.getContext("2d");

      const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
        datasets: [
          {
            label: "Dataset 1",
            data: [1, 2, 3, 4, 5, 6],
            color: "white",
            backgroundColor: [
              colors.blue[900],
              colors.blue[800],
              colors.blue[700],
              colors.blue[600],
              colors.blue[500],
              colors.blue[400],
            ],
            borderWidth: 0,
          },
        ],
      };

      const options = {
        plugins: {
          legend: {
            labels: {
              color: "white",
              font: {
                size: 14,
              },
            },
          },
          title: {
            display: true,
            text: "Chart.js Bar Chart - Stacked",
            color: "white",
          },
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
            ticks: {
              color: "white",
            },
          },
          y: {
            stacked: true,
            ticks: {
              color: "white",
            },
          },
        },
      };

      new Chart(chart, {
        type: "doughnut",
        data: data,
        options: options,
      });
      //chart.update();
    }, 2000);
  }

  render() {
    return (
      <div className="w-full md:w-1/2 text-slate-50">
        <canvas ref={this.chartReference} />
      </div>
    );
  }
}

function ExpenseCalenderList() {
    const { expenseDialog, expenseList } = useContext(AppContext);
    const [ expenses, setExpenses ] = expenseList;
    //render(){
      return (
        <div className="mt-4 mb-3 w-1/2 pr-2">
          <FullCalendar
            events={expenses}
            plugins={[listPlugin]}
            initialView="listMonth"
          />
        </div>
      );
    //}
}

function ExpenseCalender(){
  const { expenseDialog, expenseList } = useContext(AppContext);
  const [ expenses, setExpenses ] = expenseList;
  return (
      <div className="mt-4 -mb-3 w-1/2 pl-2">
        <FullCalendar
          events={expenses}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
        />
      </div>
    );
}

function BarChart() {
  return (
    <div className="flex flex-col md:flex-row mt-10">
      <StackedBArChart />
      <StackedBArChart />
    </div>
  );
}

function DoughPieChart() {
  return (
    <div className="flex flex-col md:flex-row mt-10">
      <DoughNutChart />
      <DoughNutChart />
    </div>
  );
}

function ExpenseTableandCalender() {
  return (
    <div className="flex-column mt-10">
      <h2 className="text-white font-bold text-2xl justify-self-start align-self-top">
        Expenses
      </h2>
      <div className="flex">
        <ExpenseCalenderList />
        <ExpenseCalender />
      </div>
    </div>
  );
}

function Model() {
  const { expenseDialog, expenseList } = useContext(AppContext);
  const [ expenses, setExpenses ] = expenseList;
  const [ displayExpenseDialog, setdisplayExpenseDialog ] = expenseDialog;
  const [ name, setName ] = useState("");
  const [ category, setCategory ] = useState("");
  const [ amount, setAmount ] = useState(0);
  const [ dateTime, setDateTime ] = useState("")
  return (
    <div
      id="authentication-modal"
      className={
        displayExpenseDialog +
        "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex justify-center items-center bg-gray-800/95 shadow"
      }
    >
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            <div className="relative bg-gray-900 rounded-lg shadow">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-white bg-transparent hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={() => setdisplayExpenseDialog("hidden ")}  
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div className="py-6 px-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-100 dark:text-white">
                  Add Expense
                </h3>
                <form className="space-y-6" action="#">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-100 dark:text-gray-300">
                      Expense
                    </label>
                    <input
                      maxLength={20}
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-900 border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="eg: Credit Card"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-100 dark:text-gray-300">
                      Categories
                    </label>
                    <select
                      className="text-sm font-medium bg-gray-900 w-30 py-4 br-4 text-white shadow"
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                      required
                    >
                      <option className="w-10 py-2">Loan</option>
                      <option className="w-10 py-2">Credit Card</option>
                      <option className="w-10 py-2">Subscribtion</option>
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
                      defaultValue={0}
                      placeholder="eg: 700"
                      className="bg-gray-900 border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      onChange={(e) => {
                        setAmount(parseInt(e.target.value));
                      }}
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-100 dark:text-gray-300">
                      Date & Time
                    </label>
                    <input
                      type="datetime-local"
                      name="date"
                      id="date"
                      defaultValue={new Date().toISOString()}
                      placeholder="eg: 700"
                      className="bg-gray-900 border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      onChange={(e) => {
                        setDateTime(e.target.value);
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
                      const expense = [...expenses, { title: name, date: dateTime }];
                      setExpenses(expense);
                      setName("");
                      setAmount(0);
                      setCategory("");
                     setdisplayExpenseDialog("hidden ");
                      
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
  )
}

function FloatActionButton() {
  const { expenseDialog } = useContext(AppContext);
  const [ displayExpenseDialog, setdisplayExpenseDialog ] = expenseDialog;
  return (
    <div onClick={() => setdisplayExpenseDialog(displayExpenseDialog === "hidden " ? "" :"hidden ")} className="w-16 h-16 rounded-full bg-blue-700 flex justify-center items-center shadow-lg shadow-blue-500/50 fixed bottom-10 right-10 cursor-pointer">
      <FontAwesomeIcon icon={faAdd} color="white" className="" size="1x" />
    </div>
  );
}

export default class Expense extends React.Component {
  render() {
    return (
      <div className="w-full">
        <UserExpenseBanner />
        <ExpenseTableandCalender />
        <BarChart />
        <DoughPieChart />
        <Model />
        <FloatActionButton />
      </div>
    );
  }
}
