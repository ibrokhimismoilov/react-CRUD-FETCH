import React from "react";
import { FaPen, FaTrashAlt } from "react-icons/fa";

export default function List({ data, editHandler, deleteHandler }) {
  return (
    <div className="container">
      <div className="table-responsive">
        <h1 className="my-3 text-center">Todos</h1>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Address city</th>
              <th>Company name</th>
              <th>Edit / Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.address.city}</td>
                <td>{item.company.name}</td>
                <td>
                  <div className="btn-group">
                    <button
                      onClick={() => editHandler(item)}
                      className="btn btn-primary pb-2 mr-1"
                    >
                      <FaPen />
                    </button>
                    <button
                      onClick={() => deleteHandler(item.id)}
                      className="btn btn-danger pb-2"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
