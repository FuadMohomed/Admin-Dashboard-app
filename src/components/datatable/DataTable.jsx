import React, { useState } from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import './datatable.scss'
import {userColumns, userRows} from '../../DataTableSource'
import {Link} from 'react-router-dom'

function DataTable() {
const [data,setData] = useState(userRows)

const handleDelete = (id) => {
setData(data.filter(item => item.id !== id))
}

  const actionColumn = [{
    ield: 'action', headerName: 'Action', width: 200,
    renderCell:(params) => {
      return(
        <div className='cellAction'>
            <Link to='/users/test' style={{textDecoration:'none'}}>
          <div className="viewButton">View</div>
     </Link>
          <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>
        </div>
      )
    }
  }]
  return (
    <div className='dataTable'>
      <div className="datatableTitle">
        Add New User
       <Link to='/users/new' style={{textDecoration:'none'}} className='link'>
         Add New
       </Link>
      </div>
       <DataGrid
       className='datagrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable