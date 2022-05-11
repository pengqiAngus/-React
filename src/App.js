import React from "react";
import Header from "./common/header";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login";
import Write from "./pages/write";
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/detail/:id" element={<Detail />}></Route>
            <Route path="/write" element={<Write />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};
export default App;
