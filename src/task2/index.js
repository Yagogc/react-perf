import React, { PureComponent, memo, useMemo, useState } from "react";

const HeaderCell = memo(({ name, onClick }) => {
  return <th onClick={onClick}>{name}</th>;
});

const Row = memo(({ columns, row }) => (
  <tr>
    {columns.map((column, columnIdx) =>
      useMemo(() => (
        <Cell
          key={columnIdx}
          row={row}
          column={column}
          styles={column.styles}
        />
      ))
    )}
  </tr>
));

class Cell extends PureComponent {
  render() {
    const { row, column, styles } = this.props;
    return (
      <td>
        {column.structure === "image" ? (
          <img src={row[column.key]} style={styles} alt={row.name} />
        ) : (
          row[column.key]
        )}
      </td>
    );
  }
}

const Table = memo(props => {
  const [highlight, setHighlight] = useState(false);
  const { columns, rows } = props;
  return (
    <table className={highlight ? "highlighted" : ""}>
      <thead>
        <tr>
          {columns.map((column, columnIdx) => (
            <HeaderCell
              key={columnIdx}
              name={column.name}
              onClick={() => setHighlight(!highlight)}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIdx) =>
          useMemo(() => <Row key={rowIdx} columns={columns} row={row} />)
        )}
      </tbody>
    </table>
  );
});

export default Table;
