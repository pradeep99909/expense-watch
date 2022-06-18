import React from "react";
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
      console.log(this.chartReference.current.getContext("2d"));

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
      console.log(this.chartReference.current.getContext("2d"));

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

class ExpenseTable extends React.Component {
  render() {
    return (
      <div className="mt-4 -mb-3 w-1/2 p-4">
        <div className="not-prose relative bg-slate-900 rounded-xl overflow-hidden dark:bg-slate-800/25">
          <div
            style={{ backgroundPosition: "10px 10px" }}
            className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
          ></div>
          <div className="relative rounded-xl overflow-auto">
            <div className="shadow-sm overflow-hidden my-8">
              <table className="border-collapse table-auto w-full text-sm">
                <thead>
                  <tr>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-100 dark:text-slate-200 text-left">
                      Song
                    </th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-100 dark:text-slate-200 text-left">
                      Year
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-slate-900 dark:bg-slate-800">
                  <tr>
                    <td className="dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      The Sliding Mr. Bones (Next Stop, Pottersville)
                    </td>
                    <td className="dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                      1961
                    </td>
                  </tr>
                  <tr>
                    <td className=" dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      Witchy Woman
                    </td>
                    <td className="dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                      1972
                    </td>
                  </tr>
                  <tr>
                    <td className="dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      Shining Star
                    </td>
                    <td className="dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">
                      1975
                    </td>
                  </tr>
                  <tr>
                    <td className="dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      The Sliding Mr. Bones (Next Stop, Pottersville)
                    </td>
                    <td className="dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                      1961
                    </td>
                  </tr>
                  <tr>
                    <td className=" dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      Witchy Woman
                    </td>
                    <td className="dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                      1972
                    </td>
                  </tr>
                  <tr>
                    <td className="dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      Shining Star
                    </td>
                    <td className="dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">
                      1975
                    </td>
                  </tr>
                  <tr>
                    <td className="dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      The Sliding Mr. Bones (Next Stop, Pottersville)
                    </td>
                    <td className="dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                      1961
                    </td>
                  </tr>
                  <tr>
                    <td className=" dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      Witchy Woman
                    </td>
                    <td className="dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                      1972
                    </td>
                  </tr>
                  <tr>
                    <td className="dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      Shining Star
                    </td>
                    <td className="dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">
                      1975
                    </td>
                  </tr>
                  <tr>
                    <td className="dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      The Sliding Mr. Bones (Next Stop, Pottersville)
                    </td>
                    <td className="dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                      1961
                    </td>
                  </tr>
                  <tr>
                    <td className=" dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      Witchy Woman
                    </td>
                    <td className="dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                      1972
                    </td>
                  </tr>
                  <tr>
                    <td className="dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      Shining Star
                    </td>
                    <td className="dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">
                      1975
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>
        </div>
      </div>
    );
  }
}

class ExpenseCalenderList extends React.Component {
  render() {
    return (
      <div className="mt-4 mb-3 w-1/2 pr-2">
        <FullCalendar
          events={[
            { title: "event 1", date: "2022-06-06" },
            { title: "event 2", date: "2022-06-07" },
            { title: "event 3", date: "2022-06-07" },
          ]}
          plugins={[listPlugin]}
          initialView="listMonth"
        />
      </div>
    );
  }
}

class ExpenseCalender extends React.Component {
  render() {
    return (
      <div className="mt-4 -mb-3 w-1/2 pl-2">
        <FullCalendar
          events={[
            { title: "event 1", date: "2022-06-06" },
            { title: "event 2", date: "2022-06-07" },
            { title: "event 3", date: "2022-06-07" },
          ]}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
        />
      </div>
    );
  }
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

class FloatActionButton extends React.Component {
  render() {
    return (
      <div className="w-16 h-16 rounded-full bg-blue-700 flex justify-center items-center shadow-lg shadow-blue-500/50 fixed bottom-10 right-10 cursor-pointer">
        <FontAwesomeIcon icon={faAdd} color="white" className="" size="1x" />
      </div>
    );
  }
}

export default class Expense extends React.Component {
  render() {
    return (
      <div className="w-full">
        <UserExpenseBanner />
        <ExpenseTableandCalender />
        <BarChart />
        <DoughPieChart />
        <FloatActionButton />
      </div>
    );
  }
}
