import React from "react";
import MyDay from "./MyDay";

const ChildrenComponent = () => {
  return true;
};

const Home = () => {
  return <div>My Day !!!
    <ChildrenComponent />
    {ChildrenComponent() ? <div>Not Children</div> : <div>Ok!!!</div>}
    {!ChildrenComponent() ? <div>Not Children</div> : <div>Ok!!!</div>}
  </div>;

};

export default Home;
