import React, { Component } from "react";
import "./App.scss";
import AddUserForm from "./components/AddUserForm";
import List from "./components/List";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import dataUsers from "./data.json";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

let maxId = dataUsers.length;

export default class App extends Component {
  state = {
    users: dataUsers,
    modalShow: false,
    modalData: {},
  };

  // lifescycle
  // componentDidMount() {
  // const data = await fetch("https://jsonplaceholder.typicode.com/users");
  // const users = await data.json();
  // this.setState({users})
  // }

  addUserHandler = (user) => {
    const newUsers = [...this.state.users, { id: ++maxId, ...user }];
    this.setState({ users: newUsers });
  };

  deleteHandler = (delId) => {
    const users = this.state.users.filter((item) => item.id !== delId);
    this.setState({ users });
  };

  editHandler = (user) => {
    this.setState({ modalData: { ...user }, modalShow: true });
  };

  updateHandler = (updateItem) => {
    const users = this.state.users.map((item) =>
      item.id === updateItem.id ? updateItem : item
    );
    this.setState({ users, modalShow: false });
  };

  render() {
    const { users, modalShow, modalData } = this.state;
    // console.log("Appjs User: ", users);

    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/add-user">
            <AddUserForm addUserHandler={this.addUserHandler} />
          </Route>
          <Route exact path="/users">
            <List
              data={users}
              deleteHandler={this.deleteHandler}
              editHandler={this.editHandler}
            />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
        {modalShow ? (
          <Modal
            modalData={modalData}
            updateHandler={this.updateHandler}
            removeModal={() => this.setState({ modalShow: false })}
          />
        ) : null}
      </BrowserRouter>
    );
  }
}
