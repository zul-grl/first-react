import React from "react";
import "./app.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Story from "./components/Story";
import RowContainer from "./components/Rowcontainer";
import NewsFeed from "./components/Interview";
import Category from "./components/Category";
import Entertainment from "./components/Entertainment";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Header />
      <Section />
      <Story />
      <RowContainer />
      <NewsFeed />
      <Category />
      <Entertainment />
      <Footer />
    </div>
  );
};
export default App;
