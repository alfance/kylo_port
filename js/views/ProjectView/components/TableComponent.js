import React from 'react'
import ReactTable from 'react-table'
import LayoutHelper from './LayoutHelper'

export default class TableComponent extends React.Component {
  render () {
    const {data, columns, content, title} = this.props.content
    const count = data.length
    return (
      <div>
        <h3>{title}</h3>
        {LayoutHelper.layoutArrayContent(content)}
        <ReactTable
          data={data}
          columns={columns}
          resolveData={data => data.map(row => row)}
          showPagination={false}
          minRows={count} />
      </div>
    )
  }
}
