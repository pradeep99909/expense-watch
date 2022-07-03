import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Pages/Profile/profile";
import Bills from "./Pages/Bills/bill";
import Expense from "./Pages/Expense/expense";
import "./App.css";
import { AppProvider } from "./Context/provider"

function Profile1() {
  return <h1 className="text-white text-xl font-bold">Profile</h1>;
}

function Accounts() {
  return <h1 className="text-white text-xl font-bold">Accounts</h1>;
}

function Settings() {
  return <h1 className="text-white text-xl font-bold">Settings</h1>;
}

class Home extends React.Component {
  render() {
    return (
      <div
        className="w-full md:w-5/6 flex p-10 absolute top-0 bg-black"
        style={{left:"16.666667%"}}
      >
        <AppProvider value={{}}>
          <Routes>
            <Route path="/expense" element={<Expense />} />
            <Route path="/profile" element={<Profile1 />} />
            <Route path="/account" element={<Accounts />} />
            <Route path="/bills" element={<Bills />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </AppProvider>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App bg-black text-white-0 flex">
          <Profile />
          <Home />
        </div>
      </Router>
    );
  }
}

export default App;
