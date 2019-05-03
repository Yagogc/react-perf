import React, { PureComponent, memo, useMemo, useState } from "react";

import eventCounter from "../lib/eventCounter";

const HeaderCell = memo(({ key, name }) => {
  eventCounter("HeaderCell");
  return <th key={key}>{name}</th>;
});

const Row = memo(props => {
  eventCounter("Row");
  const {
    columns,
    row,
    rowIdx,
    activeRow,
    activeColumn,
    setActiveCell
  } = props;
  return (
    <tr>
      {columns.map((column, columnIdx) =>
        useMemo(() => (
          <Cell
            row={row}
            column={column}
            selectedCell={activeRow === rowIdx && activeColumn === columnIdx}
            rowIdx={rowIdx}
            columnIdx={columnIdx}
            setActiveCell={setActiveCell}
          />
        ))
      )}
    </tr>
  );
});

const Cell = memo(props => {
  eventCounter("Cell");
  const { row, column, setActiveCell, selectedCell, rowIdx, columnIdx } = props;

  const setActive = () => setActiveCell(rowIdx, columnIdx);

  return (
    <td onClick={setActive} className={selectedCell ? "selected" : ""}>
      {column.structure === "image" ? (
        <img src={row[column.key]} style={column.styles} alt={row.name} />
      ) : (
        row[column.key]
      )}
    </td>
  );
});

const Table = memo(({ columns, rows }) => {
  const [activeRow, setActiveRow] = useState(null);
  const [activeColumn, setActiveColumn] = useState(null);

  const setActiveCell = (activeRow, activeColumn) => {
    setActiveRow(activeRow);
    setActiveColumn(activeColumn);
  };

  eventCounter("Table");

  return (
    <table>
      <thead>
        <tr>
          {columns.map(column => (
            <HeaderCell key={column.key} name={column.name} />
          ))}{" "}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIdx) =>
          useMemo(() => (
            <Row
              key={rowIdx}
              row={row}
              columns={columns}
              rowIdx={rowIdx}
              activeRow={activeRow}
              activeColumn={activeColumn}
              setActiveCell={setActiveCell}
            />
          ))
        )}
      </tbody>
    </table>
  );
});

export default Table;
