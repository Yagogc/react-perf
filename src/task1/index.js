import React, { memo } from "react";

const HeaderCell = memo(({ name }) => <th>{name}</th>);

const Row = memo(({ row, columns }) => (
  <tr>
    {columns.map(column => (
      <Cell
        key={column.key}
        row={row}
        column={column}
        styles={column.styles || {}}
      />
    ))}
  </tr>
));

const Cell = memo(({ row, column, styles }) => (
  <td>
    {column.structure === "image" ? (
      <img src={row[column.key]} style={styles} alt={row.name} />
    ) : (
      row[column.key]
    )}
  </td>
));

const Table = memo(({ columns, rows }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map(column => (
            <HeaderCell key={column.key} name={column.name} />
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <Row key={row.name} row={row} columns={columns} />
        ))}
      </tbody>
    </table>
  );
});

export default Table;
