import React, { useEffect } from "react";
import "./App.css";
import Header from "../src/components/Header";
import Sidebar from "../src/components/Sidebar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Mail from "../src/components/Mail";
import EmailList from "../src/components/EmailList";
import SendMail from "../src/components/SendMail";
import { useDispatch, useSelector } from "react-redux";
import { selectsendMessageIsOpen } from "./features/mailSlice";
import { login, selectUser } from "./features/userSlice";
import Login from "../src/components/Login";
import { getAuth } from "firebase/auth";

function App() {
  const sendMessageIsOpen = useSelector(selectsendMessageIsOpen);
  const user = useSelector(selectUser);
  const auth = getAuth();
  const dispatch = useDispatch();
  // const Navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          login({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        // Navigate("/");
      }
    });
  }, []);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="App">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/mail" element={<Mail />} />
              <Route path="/" element={<EmailList />} />
            </Routes>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
