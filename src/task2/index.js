import React, { PureComponent } from 'react'

const HeaderCell = ({name, onClick}) => {
  return <th onClick={onClick}>{name}</th>
}

class Row extends React.Component {
  render(){
    return <tr>
      {this.props.children}
    </tr>
  }
}
class Cell extends PureComponent {
  render(){
    const {row, column, styles}= this.props
    return (
      <td>
        { column.structure === 'image' ? <img src={row[column.key]} style={styles} alt={row.name}/> : row[column.key] }
      </td>
    )
  }

}

class Table extends PureComponent {
  state = { highlightEverySecond: false }

  render() {
    const columns = this.props.columns
    return (
      <table className={this.state.highlightEverySecond ? 'highlighted': ''}>
        <thead>
          <tr>
            {
              columns.map((column, columnIdx) => (
                <HeaderCell
                  key={columnIdx}
                  name={column.name}
                  onClick={() => this.setState({highlightEverySecond: !this.state.highlightEverySecond}) }
                />
              ))
            }
          </tr>
        </thead>
        <tbody>
          {this.props.rows.map((row, rowIdx) =>  (
            <Row key={rowIdx}>
              {columns.map((column, columnIdx) => (
              <Cell
                key={columnIdx}
                row={row}
                column={column}
                styles={column.styles || {}}
              />
              ))}
            </Row>
          ))}
        </tbody>
      </table>
    )
  }
}

export default Table
