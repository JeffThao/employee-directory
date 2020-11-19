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
      this.sortPhone();
      this.sortEmail();
    }
    )
    
    // .then(function(data){
    //     this.setState({ this.state.employee : data.data.results})
    //   console.log(data.data.results)
    // });
  }


  sortEmail =()  => {
    console.log(this.state.employee.sort(function(a, b) {
      var nameA = a.email.toUpperCase(); // ignore upper and lowercase
      var nameB = b.email.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
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
