import React, { PureComponent } from 'react'

import eventCounter from '../lib/eventCounter'

const HeaderCell = React.memo(({name}) => {
  eventCounter('HeaderCell')
  return <th>{name}</th>
})

const emptyStyles = {}

const Row = React.memo(({row, rowIdx, columns, onCellClick, selectedCell, onClickRemove}) => {
  eventCounter('Row')
  return (
    <tr>
      <td className='trash' onClick={()=> onClickRemove(row)}>
          <span role='img' aria-label='remove'>🗑️</span>
      </td>
      {columns.map((column, columnIdx) =>
        <Cell
          key={columnIdx}
          name={row.name}
          content={row[column.key]}
          rowIdx={rowIdx}
          columnIdx={columnIdx}
          structure={column.structure}
          onClick={onCellClick}
          selected={selectedCell === columnIdx}
          styles={column.styles || emptyStyles}
        />)}
    </tr>
  )
})

const Cell =  React.memo(({name, content, rowIdx, structure, columnIdx, styles, onClick, selected})  => {
  eventCounter('Cell')
  return (
    <td onClick = {()=>onClick(rowIdx, columnIdx)} className={selected ? 'selected' : ''}>
      { structure === 'image' ? <img src={content} style={styles} alt={name}/> : content }
    </td>
  )
})


class Table extends PureComponent {
  state = {
    activeRow: null,
    activeColumn: null,
    rows: this.props.rows,
  }

  setActiveCell = (activeRow, activeColumn) => {
    this.setState({activeRow, activeColumn})
  }

  removeRow = rowToDelete => {
    this.setState({rows: this.state.rows.filter(row => row !== rowToDelete)})
  }

  render() {
    eventCounter('Table')
    const {columns} =this.props
    const {rows} = this.state
    return (
      <table>
        <thead>
          <tr>
            <th>Remove</th>
            {columns.map(column => <HeaderCell key={column.key} name={column.name}/>)}
          </tr>
        </thead>
        <tbody>
        {rows.map((row, rowIdx)=>
          <Row
            key={rowIdx}
            row={row}
            columns={columns}
            rowIdx={rowIdx}
            selectedCell={this.state.activeRow === rowIdx && this.state.activeColumn}
            onCellClick={this.setActiveCell}
            onClickRemove={this.removeRow}
          />
        )}
        </tbody>
      </table>
    )
  }
}

export default Table
