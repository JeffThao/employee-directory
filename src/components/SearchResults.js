import React from "react";
import API from "../utils/API";

class SearchResult extends Component {
    state = {
      search: "",
      results: []
    };
  
    // When this component mounts, search the Giphy API for pictures of kittens
    componentDidMount() {
      this.searchEmployees("");
    }
  
    searchEmployees = query => {
      API.searchEmployee(query)
        .then(res => this.setState({ results: res.data.data }))
        .catch(err => console.log(err));
    };
  
    handleInputChange = event => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      API.searchEmployee(this.state.search)
        .then(res => {
          if (res.data.status === "error") {
            throw new Error(res.data.message);
          }
          this.setState({ results: res.data.message, error: "" });
        })
        .catch(err => this.setState({ error: err.message }));
    };
  
    render() {
      return (
        <div>
          <SearchForm
            search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <ResultList results={this.state.results} />
        </div>
      );
    }
  }
  
  export default SearchResult;
  