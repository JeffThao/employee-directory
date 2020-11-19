import React, { Component } from "react";
import Section from "./components/Section";
import Header from "./components/Header";
import API from "./utils/API";
// import FriendCard from "./components/FriendCard";
// import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
// import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
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
    
      // names must be equal
      return 0;
    }));
    // // Set this.state.friends equal to the new friends array
    // this.setState({ friends });
  };

  sortPhone =()  => {
    console.log(this.state.employee.sort(function (a, b) {
      return a.cell - b.cell;
    }));
  
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Header/>
        <Section
       employee = {this.state.employee}
        />
      {/* <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper> */}
      </div>
    );
  }
}

export default App;
