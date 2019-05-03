import React, { Component } from "react";

const HeaderCell = ({ name }) => <th>{name}</th>;

const Row = ({ row, columns }) => (
  <tr>
    {columns.map(column => (
      <Cell key={column.key} row={row} column={column} />
    ))}
  </tr>
);

const Cell = ({ row, column }) => (
  // console.log(column) ||
  <td>{row[column.key]}</td>
);

class Table extends Component {
  render() {
    const { columns, rows } = this.props;
    return (
      <table>
        <thead>
          <tr>
            {columns.map(({ key, name }) => (
              <HeaderCell key={key} name={name} />
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <Row row={row} columns={columns} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
