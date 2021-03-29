import React, { PureComponent } from 'react';
// import logo from './logo.svg';
// import './App.css';
import FunctionalComponent from "./components/FunctionalComponent"
import {ClassComp,ClassComp1} from "./components/classComponent"
import Click from "./components/Click"
import Counter from "./components/Counter"
import UpdateComponent from "./components/HigherOrder"
import PureComp from "./components/PureComponent"
import RegComp from "./components/RegComp"
import ParentComp from "./components/ParentComp"
import ClassProps from './components/ClassProps';
import FunctionProp from './components/FunctionProp'
function App() {
  return (
    <div>
           <h1>shreya</h1>
           
    <FunctionalComponent></FunctionalComponent>
    <ClassComp></ClassComp>
    <ClassComp1></ClassComp1>
    <Click></Click>
    <Counter></Counter>
    <UpdateComponent></UpdateComponent>
    <PureComp></PureComp>
    <RegComp></RegComp>
    <ParentComp></ParentComp>
    <ClassProps name="Shreya" place="Kolhapur"></ClassProps>
    <ClassProps name="Harshraj" place="Nagpur"></ClassProps>
    <ClassProps name="Somnath" place="Latur"></ClassProps>
    <FunctionProp name="Vaishnavi" place="Nandura"></FunctionProp>
   
    </div>
  );
}


export default App;
