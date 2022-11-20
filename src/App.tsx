import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Pages/Profile/profile";
import Bills from "./Pages/Bills/bill";
import Expense from "./Pages/Expense/expense";
import { Settings, ProfileSettings, NoftificationSettings, DashboardSettings } from "./Pages/Settings/settings";
import "./App.css";
import { AppProvider } from "./Context/provider"

function Profile1() {
  return <h1 className="text-white text-xl font-bold">Profile</h1>;
}

function Accounts() {
  return <h1 className="text-white text-xl font-bold">Accounts</h1>;
}

class Home extends React.Component {
  render() {
    return (
      <AppProvider value={{}}>
        <div className="flex w-full h-full">
          <Profile />
          <Routes>
            <Route path="/expense" element={<Expense />} />
            <Route path="/profile" element={<Profile1 />} />
            <Route path="/account" element={<Accounts />} />
            <Route path="/bills" element={<Bills />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </AppProvider>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App w-full h-full absolute text-white-0 flex">
          <AppProvider value={{}}>
            <Profile />
            <Routes>
              <Route path="/expense" element={<Expense />} />
              <Route path="/profile" element={<Profile1 />} />
              <Route path="/account" element={<Accounts />} />
              <Route path="/bills" element={<Bills />} />
              <Route path="settings" element={<Settings />} >
                <Route path="profile" element={<ProfileSettings />} />
                <Route path="notification" element={<NoftificationSettings />} />
                <Route path="dashboard" element={<DashboardSettings />} />
              </Route>
            </Routes>
          </AppProvider>
        </div>
      </Router>
    );
  }
}

export default App;
