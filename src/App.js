import React, { Component } from "react";
import Section from "./components/Section";
import Header from "./components/Header";
import API from "./utils/API";

class App extends Component {
  state = {
    employee:[]
  };

  componentDidMount() {
    API.searchEmployee()
    .then(data =>
      { 
      this.setState({ employee: data.data.results })
      console.log({ employee: data.data.results });
      this.sortName();
      this.sortPhone();
      this.sortEmail();
    })
  }

  sortName =()  => {
    console.log(this.state.employee.sort(function(a, b) {
      // ignore upper and lowercase
      let nameA = a.name;
      let nameB = b.name;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }));

  };

  sortEmail =()  => {
    console.log(this.state.employee.sort(function(a, b) {
      // ignore upper and lowercase
      let emailA = a.email.toUpperCase();
      let emailB = b.email.toUpperCase();
      if (emailA < emailB) {
        return -1;
      }
      if (emailA > emailB) {
        return 1;
      }
      return 0;
    }));

  };

  sortPhone =()  => {
    console.log(this.state.employee.sort(function (a, b) {
      return a.cell - b.cell;
    }));
  
  };

  render() {
    return (
      <div>
        <Header/>
        <Section
       employee = {this.state.employee}
        />
      </div>
    );
  }
}

export default App;
