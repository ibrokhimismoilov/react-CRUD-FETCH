import React, { Component } from "react";

export default class Modal extends Component {
  state = {
    ...this.props.modalData,
  };

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
    this.props.updateHandler(this.state);
  };

  render() {
    console.log("Modal", this.state);
    const { name, phone, address, company } = this.state;

    return (
      <div className="edit-modal">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <form
              className="edit-modal__inner col-md-6"
              onSubmit={this.submitHandler}
            >
              <h1 className="edit-modal__title">
                Update Todo
                <span className="remove" onClick={this.props.removeModal}>
                  &times;
                </span>
              </h1>
              <div className="form-group">
                <label>name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={this.inputHandler}
                  value={name}
                  required
                />
              </div>

              <div className="form-group">
                <label>phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  onChange={this.inputHandler}
                  value={phone}
                  required
                />
              </div>

              <div className="form-group">
                <label>Address city</label>
                <input
                  type="tel"
                  name="address"
                  className="form-control"
                  onChange={this.inputHandler}
                  value={address.city}
                  required
                />
              </div>

              <div className="form-group">
                <label>Company name</label>
                <input
                  type="tel"
                  name="company"
                  className="form-control"
                  onChange={this.inputHandler}
                  value={company.name}
                  required
                />
              </div>

              <button className="btn btn-block btn-info">Update todo</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
