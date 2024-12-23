import React from "react";
import "./app.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Story from "./components/Story";
import RowContainer from "./components/Rowcontainer";
const App = () => {
  return (
    <div>
      <Header />
      <Section />
      <Story />
      <RowContainer />
    </div>
  );
};
export default App;
