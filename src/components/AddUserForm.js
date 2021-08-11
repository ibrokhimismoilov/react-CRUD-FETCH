import React, { Component } from "react";

const initialState = {
  name: "",
  phone: "",
  address: {
    city: "",
  },
  company: {
    name: "",
  },
  addedTodo: false,
};
export default class AddUserForm extends Component {
  state = initialState;

  inputHandler = (e) => {
    const { name, value } = e.target;
    if (name === "address") {
      this.setState({ address: { city: value } });
    } else if (name === "company") {
      this.setState({ company: { name: value } });
    } else {
      this.setState({ [name]: value });
    }
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { name, phone, address, company } = this.state;
    this.props.addUserHandler({ name, phone, address, company });
    this.setState({ ...initialState, addedTodo: true }, () => {
      setTimeout(() => {
        this.setState((prev) => ({ ...prev, addedTodo: false }));
      }, 10000);
    });
  };

  render() {
    const { name, phone, address, company, addedTodo } = this.state;

    return (
      <div className="container">
        {addedTodo ? (
          <div class="alert alert-success" role="alert">
            <h5>New Todo added</h5>
          </div>
        ) : null}

        <form onSubmit={this.submitHandler}>
          <h1 className="my-3 text-center">Add todo</h1>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Enter new name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={this.inputHandler}
                value={name}
                required
              />
            </div>

            <div className="form-group col-md-6">
              <label>Enter new phone number</label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                onChange={this.inputHandler}
                value={phone}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Enter new address city</label>
              <input
                type="tel"
                name="address"
                className="form-control"
                onChange={this.inputHandler}
                value={address.city}
                required
              />
            </div>

            <div className="form-group col-md-6">
              <label>Enter new company name</label>
              <input
                type="tel"
                name="company"
                className="form-control"
                onChange={this.inputHandler}
                value={company.name}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-5"></div>
            <div className="col-md-2">
              <button className="btn mx-auto btn-block btn-info">
                Add todo
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
