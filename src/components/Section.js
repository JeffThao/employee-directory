import React from "react";



function Section(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="SearchBar"
                aria-describedby="Search"
                placeholder="Search"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        {/* =============================== */}
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
            </tr>
          </thead>

          {props.employee.map((currentEmployee) => (
            <tbody key={currentEmployee.login.md5}>
              <tr >
                <th scope="row">
                  <img
                    src={currentEmployee.picture.medium}
                    alt={currentEmployee.name}
                  />
                </th>
                <td>
                  {currentEmployee.name.first} {currentEmployee.name.last}
                </td>
                <td>{currentEmployee.cell}</td>
                <td>{currentEmployee.email}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Section;
