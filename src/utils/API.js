import axios from "axios";

// axios.get("https://randomuser.me/api/?results=200&nat=us");

export default {
  searchEmployee: function() {
    return axios.get("https://randomuser.me/api/?results=10&nat=us");
  }
};
